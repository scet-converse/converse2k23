'use server';
import prisma from '../prisma';
type PropType = {
  userId: string;
  eventId: string;
  eventName: string;
};

export const generateTicket = async ({
  userId,
  eventId,
  eventName,
}: PropType) => {
  return await prisma.ticket.create({
    data: {
      userId,
      eventId,
      eventName,
    },
  });
};
