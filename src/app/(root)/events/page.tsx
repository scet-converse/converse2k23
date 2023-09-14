import EventCard from '@/components/EventCard';
import React from 'react';

import events from '@/lib/data/events';
import { currentUser } from '@clerk/nextjs';

const Events = async () => {
  const user = await currentUser();

  return (
    <>
      <div className="grid grid-cols-12 w-full  max-w-1200 mx-auto my-0 p-4">
        {events.map((event, index) => (
          <div className="grid justify-center col-span-12 md:col-span-6 lg:col-span-4 ">
            <EventCard
              key={index}
              userId={user ? user.id : null}
              event={event}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Events;
