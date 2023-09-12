import React from 'react';
import Image from 'next/image';
import tvImage from '../../public/icons/tv.png';

const TvTimer = () => {
  return (
    <div className=' w-full flex items-center justify-center'>
      <div className="w-[1000px] h-full bg-slate-800">
        <Image src={tvImage} width={1000}  alt="tv" />
      </div>
    </div>
  );
};

export default TvTimer;
