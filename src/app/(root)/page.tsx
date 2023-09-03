import { UserButton, currentUser } from '@clerk/nextjs';
import Image from 'next/image';
import { getUserById } from '@/lib/actions/user.actions';
import { User } from '@prisma/client';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import Modal from '@/components/ui/Modal';
import OnboardForm from '@/components/OnboardForm';

export default async function Home() {
  const user = await currentUser();

  if (user) {
    const userInfo: User | null = await getUserById(user.id);

    // if (!userInfo?.onboarded) redirect('/');
    // TODO: Open popup
  }

  return (
    <main className="min-h-screen p-7">
      {user ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <Link href="/sign-in">Sign In</Link>
      )}

      <Modal>
        <OnboardForm id="" email="" />
      </Modal>
    </main>
  );
}
