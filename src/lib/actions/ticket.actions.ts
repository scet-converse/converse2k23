'use server';
import {} from 'fs';
import prisma from '../prisma';
import nodeMailer from 'nodemailer';
type PropType = {
  userId: string;
  eventId: string;
  eventName: string;
  userMail: string;
  userEnrollment: string;
};

type ticketProps = {
  mailTo?: string;
  userName?: string;
  event: {
    eventName: string;
  };
};

export const howManyRegisteredForThis = async (eventId: string) => {
  const count = await prisma.ticket.count({
    where: {
      eventId: eventId, // Replace with the event ID you receive from the frontend
    },
  });
  return count;
};

export const getRegisteredEvents = async (userId: string | undefined) => {
  if (!userId) {
    return [];
  }

  const events = await prisma.ticket.findMany({
    where: { userId: userId },
    select: { eventId: true },
  });

  const registered = events.map((e) => e.eventId);
  return registered;
};

export const ticketAlreadyGenerated = async ({
  userId,
  eventId,
}: {
  userId: string;
  eventId: string;
}) => {
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

export const generateTicket = async ({
  userId,
  eventId,
  userMail,
  eventName,
  userEnrollment,
}: PropType) => {
  const ticket = await prisma.ticket.create({
    data: {
      userId,
      eventId,
      userMail,
      eventName,
      userEnrollment,
    },
  });

  return { status: 'ticket generated', ticket };
};

const transporter = nodeMailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.NODE_MAILER_MAIL_ID,
    pass: process.env.NODE_MAILER_PASSWORD,
  },
});

let imageData: string;

export const gettingTheImageData = (imageUrl: string) => {
  imageData = imageUrl;
};

const htmlContent = `
  
`;

export const callNodeMailer = ({ mailTo, event, userName }: ticketProps) => {
  let res = { status: '' };
  const mailOptions = {
    from: process.env.NODE_MAILER_MAIL_ID,
    to: mailTo,
    subject: `Successful registration for ${event.eventName}`,
    html: `<h3>Dear ${userName},</h3> \
      <h3>You have successfully registered for ${event.eventName}</h3> \
      <p>Hope to see you soon</p>
      <a href="https://converse2k23.tech">Team Converse</a>
    `,
    attachments: [
      {
        filename: 'ticket.png',
        // content: `/tickets/${event.eventName}.png`,
        href: 'https://drive.google.com/file/d/1-Ufrx46zQ7ds6axJU1_SiLnzaJenFiPa/view?usp=share_link',
        // encoding: 'base64',
      },
    ],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status = 'Error while sending email';
    } else {
      console.log('Email sent:', info.response);
      res.status = 'Success! A ticket has been emailed to you';
    }
  });

  return res;
};

// content: Buffer.from(imageData.split(',')[1], 'base64'),
