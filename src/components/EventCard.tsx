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
import { IMG_PREFIX } from '@/lib/constants';

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
            const mailSent = await callNodeMailer({
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
      initial={{ opacity: 0, y: 50 }} // Initial state (hidden and off to the left)
      animate={{ opacity: 1, y: 0 }} // Animation state (visible and at the original position)
      transition={{ duration: 1 }}
    >
      <div className={`w-full aspect-[9/10] bg-[#F4F2DE] p-4`}>
        <div className="relative w-full h-4/5 bg-[#79AC78] rounded bg-gradient-to-b from-transparent to-[#00000080]">
          <div className="relative h-full w-full">
            <Image
              src={`${IMG_PREFIX}${event.imgSrc}`}
              alt={event.eventName}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="absolute bottom-2 left-2 text-3xl">
            <p className="text-3xl">{event.eventName}</p>
            <p className="text-sm">{event.category}</p>
          </div>
        </div>
        <div className="w-full flex flex-row justify-between p-2">
          <Link
            href={`/events/${event.eventId}`}
            className={`pixel-border px-3 mt-6 w-2/5 text-center ${
              event.category !== 'Tech event' ? 'w-full' : 'w-2/5'
            }`}
          >
            <button>View</button>
          </Link>

          {count <= 140 &&
            event.category === 'Tech event' &&
            (isRegistered ? (
              <button
                className="pixel-border px-3 mt-6 w-2/5 text-center opacity-50"
                disabled
              >
                Registered
              </button>
            ) : (
              <button
                className="pixel-border px-3 mt-6 w-2/5 text-center"
                onClick={() => {
                  if (window.confirm(`Register for ${event.eventName}?`)) {
                    handleRegistration();
                  }
                }}
              >
                {isLoading ? <Spinner /> : 'Register'}
              </button>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
