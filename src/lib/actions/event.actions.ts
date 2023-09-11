'use server';

import prisma from '../prisma';

type EventData = {
  userId: string;
  eventId: string;
};

export async function checkTicket({ userId, eventId }: EventData) {
  const ticket = await prisma.ticket.findFirst({
    where: {
      AND: [
        {
          eventId,
        },
        {
          userId,
        },
      ],
    },
  });

  return ticket;
}

export async function getTicket({ userId, eventId }: EventData) {
  return await prisma.ticket.create({
    data: {
      eventId,
      userId,
    },
  });
}
