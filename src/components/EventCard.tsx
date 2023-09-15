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
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, x: -100 }} // Initial state (hidden and off to the left)
      animate={{ opacity: 1, x: 0 }} // Animation state (visible and at the original position)
      transition={{ duration: 2 }} // Animation duration
    >
      <div
        className={`grid-cols-12  md:max-w-[18.5rem] lg:max-w-sm xl:w-[23rem] ${
          event.eventId === "1" ||
          event.eventId === "3" ||
          event.eventId === "5" ||
          event.eventId === "7"
            ? "bg-[#BB86FC]"
            : "bg-[#3700B3]"
        }  text-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:border-2 mt-4`}
      >
        <div className="col-span-12 px-2 pt-2 text-[#46cf31f] text-white">
          {event.category}
        </div>
        <div className="grid justify-center items-center h-[15rem] mt-2 col-span-12">
          <Image src={event.imgSrc} alt="events" width={240} height={240} />
        </div>
        <div className="grid justify-center items-center col-span-12 text-white text-[1.75rem]">
          {event.eventName}
        </div>
        <div className="col-span-12 grid gap-8 grid-cols-12  justify-center mt-8 mb-8">
          <div className="col-span-6 grid justify-end">
            <Link href={`events/${event.eventId}`}>
              <button className="pixel-border px-4 text-white">View</button>
            </Link>
          </div>
          <div className="col-span-6 grid justify-start text-white">
            <button onClick={handleRegistration} className="pixel-border px-4">
              Participate
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </motion.div>
  );
};

export default EventCard;
