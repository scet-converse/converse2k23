import Footer from '@/components/Footer';
import React from 'react';

function Layout({ children }: any) {
  return (
    <div>
      <div className="px-4 md:px-[10%]">
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
