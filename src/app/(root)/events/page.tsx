import EventCard from '@/components/EventCard';
import React from 'react';
import events from '@/lib/data/events';
import { SignOutButton, SignedIn, currentUser } from '@clerk/nextjs';
import { ToastContainer } from 'react-toastify';
import Link from 'next/link';
import { getRegisteredEvents } from '@/lib/actions/ticket.actions';

const Events = async () => {
  const user = await currentUser();
  const regEvents = await getRegisteredEvents(user?.id);

  return (
    <div className="flex flex-col w-full min-h-[90vh] mx-auto mt-8">
      <div className="flex flex-row justify-between md:items-center">
        <div>
          <h1 className="text-3xl mb-3">
            <Link href="/">Home </Link> {'>'} Events
          </h1>
          <p>Register here for all the Awesome events</p>
        </div>
        <div className="w-2/5 md:w-[10%] h-min flex mt-2 md:mt-0 items-center justify-center text-sm">
          <SignedIn>
            <SignOutButton />
          </SignedIn>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-1200 mx-auto my-0 py-4 gap-4">
        {events.map((event, index) => (
          <div>
            <EventCard
              key={index}
              userId={user ? user.id : null}
              event={event}
              isReg={regEvents.includes(event.eventId)}
            />
          </div>
        ))}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Events;
