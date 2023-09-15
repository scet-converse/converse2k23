import { HOD_NAME } from '@/lib/constants';
import Image from 'next/image';
import React from 'react';
import data from '@/lib/data/about'

const page = () => {
  return (
    <div className="flex flex-col items-center  w-full min-h-screen max-w-1200 mx-auto my-0 p-4 md:pt-20">
      <h1 className="mt-8 text-4xl font-extrabold">About Us</h1>
      <div className="grid grid-cols-12 md:gap-9 gap-7  mt-20 items-center justify-center">
        <div className="col-span-12 h-full items-center justify-center flex md:col-span-6 overflow-hidden">
          {/* <Image src={tv} width={500} height={500} alt='image'/> */}
          <video autoPlay loop muted>
            <source src="/spacecraft.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-span-12 md:col-span-6 text-lg grid gap-5 ">
          {data.map((para) => <p>{para}</p> )}
          <h2 className="text-xl md:text-2xl font-bold text-[#E135A8]">
            H.O.D : {HOD_NAME}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default page;