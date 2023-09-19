'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  callNodeMailer,
  generateTicket,
  howManyRegisteredForThis,
  ticketAlreadyGenerated,
} from '@/lib/actions/ticket.actions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { successToast, errorToast } from './ui/Toast';
import { motion } from 'framer-motion';
import { getUserById } from '@/lib/actions/user.actions';
import Spinner from '@/components/ui/Spinner';

type PropType = {
  userId: string | null;
  event: {
    eventId: string;
    eventName: string;
    imgSrc: string;
    category: string;
  };
  isReg: boolean;
};

const EventCard = ({ userId, event, isReg }: PropType) => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [isRegistered, setIsReg] = useState(isReg);
  const [count, setCount] = useState(140);

  useEffect(() => {
    const gettingCount = async () => {
      setCount(await howManyRegisteredForThis(event.eventId));
    };
    gettingCount();
  });

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
            const mailSent = callNodeMailer({
              mailTo: userMail,
              userName: userFromDB?.name,
              event,
            });
            if (mailSent) {
              successToast('Check Your Mail');
            }
          }
          setIsReg(true);
        }
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }} // Initial state (hidden and off to the left)
      animate={{ opacity: 1, x: 0 }} // Animation state (visible and at the original position)
      transition={{ duration: 2 }} // Animation duration
    >
      <div
        className={`grid-cols-12 md:max-w-[18.5rem] lg:max-w-sm xl:w-[23rem] ${
          Number(event.eventId) % 2 !== 0 ? 'bg-[#BB86FC]' : 'bg-[#3700B3]'
        }  text-white rounded-lg shadow-lg py-4 md:p-4 w-full transition-transform transform hover:scale-105 hover:border-2 mt-4`}
      >
        <div className="col-span-12 px-2 pt-2 text-[#46cf31f] text-white">
          {event.category}
        </div>
        <div className="grid justify-center items-center h-[15rem] mt-2 col-span-12">
          <Image src={event.imgSrc} alt="events" width={240} height={240} />
        </div>
        <div className="grid justify-center items-center col-span-12 text-white text-[1.75rem]">
          {event.eventName}
        </div>
        <div className="col-span-12 grid gap-8 grid-cols-12 items-center mt-8 mb-8">
          <div
            className={`${
              count <= 140 && event.category === 'Tech event'
                ? 'col-span-6 w-4/5 mx-auto'
                : 'grid  ml-[1.95rem] col-span-11'
            }`}
          >
            <Link href={`events/${event.eventId}`}>
              <button className="pixel-border px-4 text-white w-full">
                View
              </button>
            </Link>
          </div>
          {count <= 140 && event.category === 'Tech event' && (
            <div className="col-span-6 w-4/5 mx-auto">
              {isRegistered ? (
                <button
                  className="pixel-border text-white px-4 w-full opacity-50"
                  disabled
                >
                  Registered
                </button>
              ) : (
                <button
                  onClick={handleRegistration}
                  className="pixel-border text-white px-4 w-full"
                  disabled={isLoading}
                >
                  {isLoading ? <Spinner /> : 'Participate'}
                </button>
              )}
            </div>
          )}
        </div>
        {event.category === 'Tech event' && (
          <div className="col-span-12 grid justify-center text-[#ca432e] text-[1.25rem] mt-8 mb-4 ">
            {count <= 140
              ? `Only ${140 - count} tickets left.`
              : 'Sorry No tickets left'}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default EventCard;
