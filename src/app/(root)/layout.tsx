import React from 'react';

function Layout({ children }: any) {
  return (
    <div className="px-4 md:px-[10%]">
      <div>{children}</div>
      <p>Footer</p>
    </div>
  );
}

export default Layout;
