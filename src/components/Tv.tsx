import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import tvImage from '../../public/icons/tv.png';
// import tvImage from '../../public/icons/readyTv.png';

const Tv = () => {
  return (
    <div className="">
      {/* <div className="relative">
        <Image src={tvImage} height={500} width={500} alt="tv" />
        <div className="absolute top-[109px] left-[27.3%] bg-black w-[145px] h-[100px] rounded-[20px] text-center flex items-center">
        </div>
      </div> */}
      <div className="relative">
        <Image src={tvImage} height={500} width={500} alt="tv" />
        <div className="absolute xl:top-[109px] xl:left-[145px] bg-black xl:w-[145px] xl:h-[100px] max-lg:left-[128px] max-lg:top-[97px] max-lg:w-[130px] max-lg:h-[87px]  rounded-[20px] text-center flex items-center">
          <Image src='https://64.media.tumblr.com/f543385e1fbd25aed328ac8a844f9a7e/7eea8c7b66524f53-9d/s640x960/c4e2aa19796e7d3d754d21fb04b3bf82409aa2d8.gif' width={545} height={500} alt=''/>
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
