import Footer from '@/components/Footer';
import OnboardForm from '@/components/OnboardForm';
import Modal from '@/components/ui/Modal';
import { getUserById } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import { User } from '@prisma/client';
import React from 'react';

async function Layout({ children }: any) {
  const user = await currentUser();
  let isOnboard = false;
  let userInfo: User | null = null;

  if (user) {
    userInfo = await getUserById(user.id);

    if (userInfo && userInfo?.onboarded) isOnboard = true;
  }

  return (
    <div>
      {user && (
        <Modal open={!isOnboard}>
          <OnboardForm
            id={user.id}
            email={user.emailAddresses[0].emailAddress}
          />
        </Modal>
      )}
      <div className="px-4 md:px-[10%]">
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
