import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IMG_PREFIX } from "@/lib/constants";
import RegisterButton from "./RegisterButton";

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
};

const EventCard = ({ userId, event, isReg, count }: PropType) => {
  return (
    <div className={`w-full aspect-[9/10] bg-[#F4F2DE] p-4`}>
      <div className="relative w-full h-4/5 bg-[#79AC78] rounded bg-gradient-to-b from-transparent to-[#00000080]">
        <div className="relative h-full w-full">
          <Image
            src={`${IMG_PREFIX}${event.imgSrc}`}
            alt={event.eventName}
            fill
            style={{ objectFit: "cover" }}
            loading="lazy"
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
          className={`pixel-border px-3 mt-6 w-2/5 text-center md:text-lg text-base ${
            event.category !== "Tech event" ? "w-full" : "w-2/5"
          }`}
        >
          <button>View</button>
        </Link>
        <RegisterButton
          event={event}
          userId={userId}
          count={count}
          isReg={isReg}
        />
      </div>
    </div>
  );
};

export default EventCard;
