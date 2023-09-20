'use client';

import React, { useEffect, useState } from 'react';
import events from '@/lib/data/events';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import ReactMarkdown from 'react-markdown';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
});

import {
  callNodeMailer,
  generateTicket,
  howManyRegisteredForThis,
  ticketAlreadyGenerated,
} from '@/lib/actions/ticket.actions';
import { errorToast, successToast } from '@/components/ui/Toast';
import { ToastContainer } from 'react-toastify';
import Spinner from '@/components/ui/Spinner';
import Link from 'next/link';
import { getUserById } from '@/lib/actions/user.actions';
import { CLOSE_DATE, FEST_COUNT } from '@/lib/constants';

const SingleEventPage = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const router = useRouter();
  const user = useUser();
  const userId = user.user?.id;
  const event: any = events.find((event) => event.eventId === params.slug);
  const [isLoading, setLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [count, setCount] = useState(140);

  useEffect(() => {
    const gettingCountAndCheckingRegistration = async () => {
      if (userId && event) {
        setCount(await howManyRegisteredForThis(event.eventId));
        setIsRegistered(
          await ticketAlreadyGenerated({ userId, eventId: event.eventId })
        );
      }
    };
    gettingCountAndCheckingRegistration();
  });
  if (!event) {
    router.push('/events');
    return null;
  }

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
            successToast('Event Registeration successful');
            const mailSent = await callNodeMailer({
              mailTo: userMail,
              userName: userFromDB?.name,
              event,
            });
            if (mailSent) {
              successToast('Check Your Mail');
            }
          }
        }
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full min-h-screen max-w-1200 mx-auto my-0 py-6">
      <h1 className="md:text-3xl mb-3 text-xl">
        <Link href="/">Home </Link> {'>'} <Link href="/events">Events </Link>{' '}
        {'>'} {event?.eventName}
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="w-full h-max md:sticky relative top-10 left-0 flex flex-col pb-8">
          <div className="mb-4">
            <img
              src={
                'https://converse2k22.vercel.app/assets/posters/Logo%20Hunt.png'
              }
              alt="event poster"
              className="rounded-sm"
            />
          </div>
          {(() => {
            if (count > FEST_COUNT) {
              return (
                <button
                  className="PixellButton w-full min-w-full md:text-lg text-base uppercase opacity-50"
                  disabled
                >
                  Full
                </button>
              );
            }

            if (
              event.category === 'Tech event' &&
              Date.parse(CLOSE_DATE) - Date.now() <= 0
            ) {
              return (
                <button
                  className="PixellButton w-full min-w-full md:text-lg text-base uppercase opacity-50"
                  disabled
                >
                  Closed
                </button>
              );
            }

            if (isRegistered) {
              return (
                <button
                  className="PixellButton w-full min-w-full md:text-lg text-base uppercase opacity-50"
                  disabled
                >
                  Registered
                </button>
              );
            }

            if (event.category === 'Tech event') {
              return (
                <button
                  className="PixellButton w-full min-w-full md:text-lg text-base uppercase"
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
        </div>

        <div className="md:mt-0 md:col-span-2 mt-4 w-full h-full">
          <h1 className="md:text-4xl text-2xl text-[#e2e202] font-bold">
            {event.eventName}
          </h1>

          <div className="mt-6" />

          <h3 className="md:text-2xl text-lg text-[#de8e0c]">Description</h3>

          <div className="mt-2" />

          <ReactMarkdown className={montserrat.className}>
            {event.description}
          </ReactMarkdown>

          <div className="mt-4" />

          {event.facultyCoordinators && (
            <h3 className="md:text-2xl text-lg text-[#de8e0c]">
              Faculty Coordinators
            </h3>
          )}

          {event.facultyCoordinators &&
            event.facultyCoordinators.map(
              (
                coordinator: { id?: string; name: string; number?: string },
                index: number
              ) => (
                <p
                  key={index}
                  className={`${montserrat.className} md:text-base text-sm mt-2`}
                >
                  {coordinator.name}
                </p>
              )
            )}

          <div className="mt-4" />

          <h3 className="md:text-2xl text-lg text-[#de8e0c]">Event Heads</h3>

          {event.eventHeads.map(
            (
              head: { id?: string; name: string; number?: string },
              index: number
            ) => (
              <p
                key={index}
                className={`${montserrat.className} md:text-base text-sm mt-2`}
              >
                {head.name}&nbsp;-&nbsp;
                <a href={`tel:${head.number}`}>{head.number}</a>
              </p>
            )
          )}

          <div className="mt-4" />

          <h3 className="md:text-2xl text-lg text-[#de8e0c]">
            Event Volunteers
          </h3>

          {event.eventVolunteers.map(
            (
              volunteer: { id?: string; name: string; number?: string },
              index: number
            ) => (
              <p
                key={index}
                className={`${montserrat.className} md:text-base text-sm mt-2`}
              >
                {volunteer.name}
              </p>
            )
          )}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SingleEventPage;
