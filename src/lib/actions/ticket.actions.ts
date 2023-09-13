'use server';
import prisma from '../prisma';
type PropType = {
  userId: string;
  eventId: string;
};

export const generateTicket = async ({ userId, eventId }: PropType) => {
  return await prisma.ticket.create({
    data: {
      userId,
      eventId,
    },
  });
};
