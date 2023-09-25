'use client';
import {
  callNodeMailer,
  generateTicket,
  ticketAlreadyGenerated,
} from '@/lib/actions/ticket.actions';
import { getUserById } from '@/lib/actions/user.actions';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Spinner from './ui/Spinner';
import { errorToast, successToast } from './ui/Toast';
import { FEST_COUNT, FEST_END_AT } from '@/lib/constants';
import Modal from './ui/Modal';
import SecondUserForm from './SecondUserForm';

type PropType = {
  userId: string | null;
  event: {
    eventId: string;
    eventName: string;
    imgSrc: string;
    category: string;
  };
  isReg: boolean;
  count: number;
  isSlug?: boolean;
};

function RegisterButton({
  userId,
  event,
  isReg,
  count,
  isSlug = false,
}: PropType) {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(isReg);
  const [secondUser, setSecondUser] = useState(false);

  //console.log(event.eventName + " " + count);

  const handleRegistration = async () => {
    try {
      if (!userId) {
        router.push('/sign-in');
      } else {
        setLoading(true);
        const userFromDB = await getUserById(userId);
        const userName: any = userFromDB?.name;
        const userEnrollment: any = userFromDB?.enroll;
        const userMail: any = userFromDB?.email;
        let ticketCheck = await ticketAlreadyGenerated({
          userId,
          eventId: event.eventId,
        });
        if (ticketCheck) {
          errorToast('You have already registered for this event');
        } else {
          const res = await generateTicket({
            userId,
            eventId: event.eventId,
            eventName: event.eventName,
            userMail,
            userEnrollment,
            userName,
          });
          if (res.status) {
            successToast('Event registration successful');
            const mailSent = await callNodeMailer({
              mailTo: userMail,
              userName: userFromDB?.name,
              event,
            });
            if (mailSent) {
              successToast('Check Your Mail');
            }
          }
          setIsRegistered(true);
        }
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {(() => {
        if (count > FEST_COUNT) {
          return (
            <button
              className={`${
                isSlug ? 'PixellButton w-[80%] mt-6' : 'pixel-border w-2/5 mt-6'
              } md:text-lg text-base opacity-50`}
              disabled
            >
              Full
            </button>
          );
        }

        if (
          event.category === 'Tech event' &&
          Date.parse(FEST_END_AT) - Date.now() <= 0
        ) {
          return (
            <button
              className={`${
                isSlug ? 'PixellButton w-[80%] mt-6' : 'pixel-border w-2/5 mt-6'
              } md:text-lg text-base  opacity-50`}
              disabled
            >
              Closed
            </button>
          );
        }

        if (isRegistered) {
          return (
            <button
              className={`${
                isSlug ? 'PixellButton w-[80%] mt-6' : 'pixel-border w-2/5 mt-6'
              } md:text-lg text-base  opacity-50`}
              disabled
            >
              Registered
            </button>
          );
        }

        if (event.category === 'Tech event') {
          return (
            <div
              className={`${
                isSlug ? 'w-[80%] mt-6' : 'w-2/5 mt-6'
              } px-3 md:text-lg text-base`}
            >
              <Modal open={secondUser}>
                <SecondUserForm
                  toggleModal={setSecondUser}
                  userId={userId}
                  event={event}
                />
              </Modal>
              <button
                className={`${
                  isSlug ? 'PixellButton' : 'w-2/5 pixel-border'
                } w-full`}
                onClick={() => {
                  if (window.confirm(`Register for ${event.eventName}?`)) {
                    if (
                      event.eventName === 'Codathon' ||
                      event.eventName === 'Rise to Crescendo'
                    ) {
                      setSecondUser(true);
                      return;
                    }
                    handleRegistration();
                  }
                }}
              >
                {isLoading ? <Spinner /> : 'Register'}
              </button>
            </div>
          );
        }
      })()}
    </>
  );
}

export default RegisterButton;
