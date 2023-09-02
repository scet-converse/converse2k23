import { getUserById } from '@/lib/actions/user.actions';
import { WithUserProp, currentUser } from '@clerk/nextjs';
import { User } from '@prisma/client';
import { redirect } from 'next/navigation';

export default async function Page() {
  const user = (await currentUser()) as WithUserProp['user'] | null;

  if (!user) return null;

  const userInfo: User | null = await getUserById(user.id);

  if (userInfo?.onboarded) redirect('/');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="bg-[#191919]">
        <h1>Onboarding</h1>
      </div>
    </main>
  );
}