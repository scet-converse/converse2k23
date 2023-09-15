"use client";
import React from "react";
import Image from "next/image";
import {
  generateTicket,
  ticketAlreadyGenerated,
} from "@/lib/actions/ticket.actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { successToast, errorToast } from "./ui/Toast";

type PropType = {
  userId: string | null;
  event: {
    eventId: string;
    eventName: string;
    imgSrc: string;
    category: string;
  };
};

const EventCard = ({ userId, event }: PropType) => {
  const router = useRouter();

  const handleRegistration = async () => {
    try {
      if (!userId) {
        router.push("/sign-in");
      } else {
        let ticketCheck = await ticketAlreadyGenerated({
          userId,
          eventId: event.eventId,
        });
        if (ticketCheck) {
          errorToast("you have already registered for this event");
        } else {
          const res = await generateTicket({ userId, eventId: event.eventId });
          if (res.status) {
            successToast("event registeraton successfull");
          }
        }
      }
    } catch (err) {}
  };

  return (
    <div className="grid-cols-12  md:max-w-sm xl:w-[23rem]  bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 mt-4">
      <div className="col-span-12 px-2 pt-2 text-[#46cf31f] text-black">
        {event.category}
      </div>
      <div className="grid justify-center h-[15rem] mt-2 col-span-12">
        <Image src={event.imgSrc} alt="events" width={240} height={240} />
      </div>
      <div className="grid justify-center items-center col-span-12 text-black text-[1.75rem]">
        {event.eventName}
      </div>
      <div className="col-span-12 grid gap-8 grid-cols-12  justify-center mt-8 mb-8">
        <div className="col-span-6 grid justify-end">
          <Link href={`events/${event.eventId}`}>
            <button className="pixel-border px-4 text-black">View</button>
          </Link>
        </div>
        <div className="col-span-6 grid justify-start text-black">
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
