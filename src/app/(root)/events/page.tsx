import EventCard from "@/components/EventCard";
import React from "react";

import { data } from "@/lib/data/eventData";
import { currentUser } from "@clerk/nextjs";

const Events = async () => {
  const user = await currentUser();
  return (
    <>
      <div className="grid grid-cols-12 w-full  max-w-1200 mx-auto my-0 p-4">
        {data.map((event) => (
          <div className="grid justify-center col-span-12 md:col-span-6 lg:col-span-4 ">
            <EventCard
              title={event.eventName}
              imgSrc={event.imgSrc}
              userId={user?.id}
              eventId={event.eventId}
              eventName={event.eventName}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Events;
