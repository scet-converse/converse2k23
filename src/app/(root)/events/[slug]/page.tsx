import React from 'react';
import events from '@/lib/data/events';
import { currentUser } from '@clerk/nextjs';
import ReactMarkdown from 'react-markdown';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
});

import {
  getAllEventCounts,
  getRegisteredEvents,
} from '@/lib/actions/ticket.actions';
import { ToastContainer } from 'react-toastify';
import Link from 'next/link';
import Image from 'next/image';
import RegisterButton from '@/components/RegisterButton';

const SingleEventPage = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const user = await currentUser();
  const regEvents = await getRegisteredEvents(user?.id);
  const counts = await getAllEventCounts();
  const event: any = events.find((event) => event.eventId === params.slug);

  return (
    <div className="w-full min-h-screen max-w-1200 mx-auto my-0 py-6">
      <h1 className="md:text-3xl mb-3 text-xl">
        <Link href="/">Home </Link> {'>'} <Link href="/events">Events </Link>{' '}
        {'>'} {event?.eventName}
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="w-full h-max md:sticky relative top-10 left-0 flex flex-col pb-8">
          <div className="mb-4">
            <div className="relative h-[60vh] w-full">
              <Image
                src={
                  event.poster ||
                  'https://converse2k22.vercel.app/assets/posters/Logo%20Hunt.png'
                }
                alt="event poster"
                fill
                className="rounded-sm"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>

          <RegisterButton
            userId={user ? user.id : null}
            count={counts[event.eventId] || 0}
            event={event}
            isSlug
            isReg={regEvents.includes(event.eventId)}
          />
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
