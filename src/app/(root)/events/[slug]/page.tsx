'use client';

import React from 'react';
import events from '@/lib/data/events';
import { useRouter } from 'next/navigation';

const SingleEventPage = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const router = useRouter();

  const event = events.find((event) => event.eventId === params.slug);

  if (!event) {
    router.push('/events');
    return null;
  }

  const handleRegistration = async () => {
    try {
      // if (!userId) {
      //   router.push('/sign-in');
      // } else {
      //   const res = await generateTicket({ userId, eventId: event.eventId });
      // }
    } catch (err) {}
  };

  return (
    <div className="w-full max-w-1200 min-h-screen mx-auto my-0 grid grid-cols-12 p-4 gap-8">
      <div className="md:col-span-5 col-span-12 w-full h-max md:sticky relative top-4 left-0 flex flex-col">
        <div className="mb-4">
          <img
            src={
              'https://converse2k22.vercel.app/assets/posters/Logo%20Hunt.png'
            }
            alt="event poster"
            className="rounded-sm"
          />
        </div>

        <div className="mt-4 w-full">
          <button
            onClick={handleRegistration}
            className="pixel-border px-4 w-full"
          >
            Participate
          </button>
        </div>
      </div>

      <div className="md:col-span-7 md:mt-0 mt-4 col-span-12 w-full h-full">
        <h1 className="text-4xl text-[#e2e202] font-bold">{event.eventName}</h1>

        <div className="mt-6" />

        <h3 className="text-2xl text-[#de8e0c]">Description</h3>

        <div className="mt-2" />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          placeat aspernatur laudantium vero, asperiores adipisci molestiae
          nesciunt modi dicta labore.
        </p>

        <div className="mt-4" />

        <h3 className="text-2xl text-[#de8e0c]">Faculty Coordinators</h3>

        {event.facultyCoordinators.map((coordinator, index) => (
          <div className="mt-2 flex" key={index}>
            <p>{coordinator.name}</p>
          </div>
        ))}

        <div className="mt-4" />

        <h3 className="text-2xl text-[#de8e0c]">Event Heads</h3>

        {event.eventHeads.map((head, index) => (
          <p className="mt-2" key={index}>
            {head.name} - {head.number}
          </p>
        ))}

        <div className="mt-4" />

        <h3 className="text-2xl text-[#de8e0c]">Event Volunteers</h3>

        {event.eventVolunteers.map((volunteer, index) => (
          <p className="mt-2 flex" key={index}>
            {volunteer.name} -<a href=""></a>
            {volunteer.number}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SingleEventPage;
