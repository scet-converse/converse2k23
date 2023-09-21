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
          errorToast('you have already registered for this event');
        } else {
          const res = await generateTicket({
            userId,
            eventId: event.eventId,
            eventName: event.eventName,
            userMail,
            userEnrollment,
          });
          if (res.status) {
            successToast('event registeraton successfull');
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
      {count <= 140 &&
        event.category === 'Tech event' &&
        (isRegistered ? (
          <button
            className={`${isSlug ? 'PixellButton' : 'pixel-border'} px-3 mt-6 ${
              isSlug ? 'w-full' : 'w-2/5'
            } text-center opacity-50`}
            disabled
          >
            Registered
          </button>
        ) : (
          <button
            className={`${isSlug ? 'PixellButton' : 'pixel-border'} px-3 mt-6 ${
              isSlug ? 'w-full' : 'w-2/5'
            } text-center`}
            onClick={() => {
              if (window.confirm(`Register for ${event.eventName}?`)) {
                handleRegistration();
              }
            }}
          >
            {isLoading ? <Spinner /> : 'Register'}
          </button>
        ))}
    </>
  );
}

export default RegisterButton;
