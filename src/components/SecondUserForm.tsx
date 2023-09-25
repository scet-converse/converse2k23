'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Spinner from './ui/Spinner';
import { getUserById, searchUser } from '@/lib/actions/user.actions';
import {
  callNodeMailer,
  generateTicket,
  ticketAlreadyGenerated,
} from '@/lib/actions/ticket.actions';
import { errorToast, successToast } from './ui/Toast';
import { useRouter } from 'next/navigation';
import { AiOutlineSearch } from 'react-icons/ai';

function SecondUserForm({ toggleModal, userId, event }: any) {
  const router = useRouter();
  const userRef = useRef<HTMLInputElement | null>(null);
  const [secondUserInfo, setSecondUserInfo] = useState<{
    id: string;
    name: string;
    email: string;
    enroll: string;
  } | null>(null);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    console.log(userId);
    if (!userId) {
      router.push('/sign-in');
    }
  }, []);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!secondUserInfo) {
        return;
      }

      const userFromDB = await getUserById(userId);
      const userName: any = userFromDB?.name;
      const userEnrollment: any = userFromDB?.enroll;
      const userMail: any = userFromDB?.email;

      if (userMail === secondUserInfo.email) {
        errorToast('You cannot be the second user');
        setLoading(false);
        return;
      }

      let ticketCheckOne = await ticketAlreadyGenerated({
        userId,
        eventId: event.eventId,
      });
      let ticketCheckTwo = await ticketAlreadyGenerated({
        userId: secondUserInfo.id,
        eventId: event.eventId,
      });
      if (ticketCheckOne) {
        errorToast('You have already registered for this event');
      } else if (ticketCheckTwo) {
        errorToast('Teammate has already registered for this event.');
      } else {
        const res1 = await generateTicket({
          userId,
          eventId: event.eventId,
          eventName: event.eventName,
          userMail,
          userEnrollment,
          userName,
          secondUserId: secondUserInfo.id,
          secondUserMail: secondUserInfo.email,
          secondUserEnrollment: secondUserInfo.enroll,
          secondUserName: secondUserInfo.name,
        });
        const res2 = await generateTicket({
          userId: secondUserInfo.id,
          eventId: event.eventId,
          eventName: event.eventName,
          userMail: secondUserInfo.email,
          userEnrollment: secondUserInfo.enroll,
          userName: secondUserInfo.name,
          secondUserId: userId,
          secondUserMail: userMail,
          secondUserEnrollment: userEnrollment,
          secondUserName: userName,
        });

        if (res1.status && res2.status) {
          successToast('Event registration successful');
          const mailSentOne = await callNodeMailer({
            mailTo: userMail,
            userName: `${userFromDB?.name} and ${secondUserInfo.name}`,
            event,
          });
          const mailSentTwo = await callNodeMailer({
            mailTo: secondUserInfo.email,
            userName: `${secondUserInfo.name} and ${userFromDB?.name}`,
            event,
          });
          if (mailSentOne && mailSentTwo) {
            successToast('Check Your Mail');
          }
        }
        setLoading(false);
        toggleModal(false);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Image
          src={'/logo-512.png'}
          alt="converse logo"
          width={48}
          height={48}
        />
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold">Add Second Teammate</h1>

        <p className="text-base font-normal text-[#ffffffaf]">
          Please have them onboarded to register
        </p>
      </div>

      <div>
        <form className="grid grid-rows-6 gap-4">
          <div className="row-span-5">
            {/* search input */}

            <div className="flex flex-col gap-1">
              <label className={styles.label}>
                Enter their registered email
              </label>

              <div className="flex flex-row justify-between gap-2">
                <input
                  className={`${styles.input} flex-1`}
                  type="text"
                  ref={userRef}
                />
                <button
                  className={`${styles.button}`}
                  onClick={async (e) => {
                    e.preventDefault();
                    setSearchLoading(true);
                    const searchMail = userRef.current && userRef.current.value;
                    console.log(searchMail);
                    if (searchMail === null) {
                      return;
                    }
                    const secondUser = await searchUser({ email: searchMail });
                    if (!secondUser) {
                      setSecondUserInfo({
                        name: '',
                        email: '',
                        enroll: '',
                        id: '',
                      });
                    } else {
                      setSecondUserInfo(secondUser);
                    }
                    setSearchLoading(false);
                  }}
                >
                  <AiOutlineSearch className="text-xl" />
                </button>
              </div>
            </div>

            {/* list of user */}

            {searchLoading ? (
              <Spinner />
            ) : (
              <div className="space-y-2 text-sm my-4">
                {secondUserInfo &&
                  (secondUserInfo.name !== '' ? (
                    <>
                      <p>Name: {secondUserInfo.name}</p>
                      <p>Email: {secondUserInfo.email}</p>
                      <p>Enrollment: {secondUserInfo.enroll}</p>
                    </>
                  ) : (
                    <p>User not found</p>
                  ))}
              </div>
            )}
          </div>

          {/* submit button */}

          <div className="absolute bottom-8 left-8 right-8 grid grid-cols-12 gap-4 items-center row-span-1 pt-1 ">
            <button
              className={`${styles.button} col-span-6`}
              type="submit"
              disabled={loading}
              onClick={() => toggleModal(false)}
            >
              Cancel
            </button>

            <button
              className={`${styles.button} col-span-6`}
              type="submit"
              disabled={
                loading || secondUserInfo === null || secondUserInfo.name === ''
              }
              onClick={() => {
                if (
                  window.confirm(
                    `Register for ${event.eventName} with ${secondUserInfo?.name}?`
                  )
                ) {
                  handleSubmit();
                }
              }}
            >
              {loading ? <Spinner /> : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const styles = {
  label: 'text-[0.8125rem] font-medium',
  input:
    'border border-[#ffffff29] rounded-md p-2 bg-transparent text-[0.8125rem] px-4 py-[0.625rem] outline-none',
  option: 'bg-[#19191a]',
  button:
    'py-[0.625rem] px-5 cursor-pointer bg-[var(--accent)] rounded-md p-2 text-[0.6875rem] font-semibold min-h-[2.25rem] tracking-[0.5px] hover:bg-[var(--accentDark)] uppercase disabled:opacity-25',
  hint: 'text-[rgba(255, 255, 255, 0.65)] text-[0.8125rem] font-normal mt-[0.5rem] text-red-800 block',
};

export default SecondUserForm;
