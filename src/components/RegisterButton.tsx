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

  console.log(event.eventName + ' ' + count);

  const handleRegistration = async () => {
    try {
      if (!userId) {
        router.push('/sign-in');
      } else {
        setLoading(true);
        const userFromDB = await getUserById(userId);
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
          });
          if (res.status) {
            successToast('Event registeraton successful');
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
                isSlug ? 'PixellButton w-full mt-8' : 'pixel-border w-2/5 mt-6'
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
                isSlug ? 'PixellButton w-full mt-8' : 'pixel-border w-2/5 mt-6'
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
                isSlug ? 'PixellButton w-full mt-8' : 'pixel-border w-2/5 mt-6'
              } md:text-lg text-base  opacity-50`}
              disabled
            >
              Registered
            </button>
          );
        }

        if (event.category === 'Tech event') {
          return (
            <button
              className={`${
                isSlug ? 'PixellButton w-full mt-8' : 'pixel-border w-2/5 mt-6'
              } px-3 md:text-lg text-base`}
              onClick={() => {
                if (window.confirm(`Register for ${event.eventName}?`)) {
                  handleRegistration();
                }
              }}
            >
              {isLoading ? <Spinner /> : 'Register'}
            </button>
          );
        }
      })()}
    </>
  );
}

export default RegisterButton;
