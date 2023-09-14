import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import tvImage from '../../public/icons/tv.png';
// import tvImage from '../../public/icons/readyTv.png';

const Tv = () => {
  return (
    <div className="">
      <div className="relative">
        <Image src={tvImage} height={500} width={500} alt="tv" />
        <div className="absolute top-[109px] left-[27.3%] bg-black w-[145px] h-[30%] rounded-[20px] text-center flex items-center">
        </div>
      </div>
      {/* <div className="relative">
        <Image src={tvImage} height={500} width={500} alt="tv" />
        <div className="absolute top-[109px] left-[145px] bg-black w-[145px] h-[100px] rounded-[20px] text-center flex items-center">
          Click Here to register!
        </div>
      </div> */}
      <Link href="/events">
        {/* <Image src={tvImage} height={400} width={400} alt="tv" /> */}
      </Link>
    </div>
  );
};

export default Tv;
