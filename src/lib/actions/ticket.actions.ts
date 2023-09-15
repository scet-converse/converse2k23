'use server';
import prisma from '../prisma';
type PropType = {
  userId: string;
  eventId: string;
};

export const ticketAlreadyGenerated = async ({ userId, eventId }: PropType) => {
  const ticket = await prisma.ticket.findFirst({
    where: {
      AND: [
        {
          userId,
        },
        {
          eventId,
        },
      ],
    },
  });

  if (ticket) {
    return true;
  }
  return false;
};

export const generateTicket = async ({ userId, eventId }: PropType) => {
  const ticket = await prisma.ticket.create({
    data: {
      userId,
      eventId,
    },
  });

  return { status: 'ticket generated', ticket };
};
