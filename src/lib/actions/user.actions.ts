'use server';

import prisma from '../prisma';

export async function getUserById(id: string) {
  return await prisma.user.findUnique({
    where: {
      id,
    },
  });
}

export async function createUser({
  id,
  email,
  name,
  mobile,
  enroll,
  college,
  branch,
  year,
}: {
  id: string;
  email: string;
  name: string;
  mobile: string;
  enroll: string;
  college: string;
  branch: string;
  year: number;
}) {
  return await prisma.user.create({
    data: {
      id,
      email,
      name,
      mobile,
      enroll,
      college,
      branch,
      year,
      onboarded: true,
    },
  });
}

export async function searchUser({ email }: { email: string }) {
  return await prisma.user.findFirst({
    where: {
      AND: [{ email }, { onboarded: true }],
    },
    select: {
      id: true,
      email: true,
      name: true,
      enroll: true,
      // mobile: true,
    },
  });
}
