import React from 'react'
import { UserButton, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';


function Header() {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Converse2K23</h1>
        <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  )
}

export default Header