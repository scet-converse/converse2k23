"use client";
import React, { use } from "react";
import Image from "next/image";
import { generateTicket } from "@/lib/actions/ticket.actions";
import Link from "next/link";
type PropType = {
  title: string;
  imgSrc: string;
  userId?: string;
  eventId: string;
  eventName: string;
};

const EventCard = ({ imgSrc, title, userId, eventId, eventName }: PropType) => {
  const handleRegistration = async () => {
    console.log("hello i am here");
    console.log(userId);
    try {
      if (userId) {
        const res = await generateTicket({ userId, eventId, eventName });
        console.log(res);
      }
    } catch (err) {}
  };

  return (
    <div className="grid-cols-12 max-w-sm  border-2  border-slate-500 mt-2">
      <div className="grid justify-center items-center col-span-12">
        <Image src={imgSrc} alt="hi" width={240} height={240} />
      </div>
      <div className="grid justify-center items-center col-span-12">
        {title}
      </div>
      <div className="col-span-12 grid gap-8 grid-cols-12  justify-center mt-8 mb-8">
        <div className="col-span-6 grid justify-end">
          <Link href={`events/${eventName}`}>
            <button className="pixel-border px-4">View</button>
          </Link>
        </div>
        <div className="col-span-6 grid justify-start">
          <button onClick={handleRegistration} className="pixel-border px-4">
            Register
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default EventCard;
