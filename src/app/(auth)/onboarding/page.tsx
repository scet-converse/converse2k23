import OnboardForm from '@/components/OnboardForm';
import { getUserById } from '@/lib/actions/user.actions';
import { WithUserProp, currentUser } from '@clerk/nextjs';
import { User } from '@prisma/client';
import { redirect } from 'next/navigation';

export default async function Page() {
  const user = (await currentUser()) as WithUserProp['user'] | null;

  if (!user) redirect('/sign-in');

  const userInfo: User | null = await getUserById(user.id);

  if (userInfo?.onboarded) redirect('/');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <OnboardForm id={user.id} email={user.emailAddresses[0].emailAddress} />
    </main>
  );
}
