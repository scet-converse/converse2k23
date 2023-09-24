import React from 'react';
import Image from 'next/image';

import { AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai';
import photos from '@/lib/data/photos';
import { IMG_PREFIX } from '@/lib/constants';

function PersonCard({
  name,
  position,
  team,
  image,
  instagram,
  github,
}: {
  name: string;
  position?: string;
  team?: string;
  image?: string;
  instagram?: string;
  github?: string;
}) {
  return (
    <div className="relative flex flex-row-reverse w-[90%] h-[90%] m-auto aspect-[9/10] bg-[#213555] bg-gradient-to-br from-[#0F2027] to-[#2C5364] p-2 overflow-hidden">
      <div className="absolute top-0 left-0 w-[35%] h-full bg-gradient-to-b from-[#8e9eab] to-[#eef2f3]" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full">
        {photos[name] ? (
          <Image
            src={`${IMG_PREFIX}/people/trans/IMG_${photos[name].trim()}.png`}
            alt="Picture"
            fill
            className="object-contain scale-[1.6] md:scale-[1.7] translate-x-[3%] translate-y-[4%] md:translate-y-[3%]"
            placeholder="empty"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <Image
            src="/profile_placeholder.png"
            alt="Picture"
            fill
            className="object-contain scale-[2] md:scale-[2] translate-x-[0%] md:translate-x-[5%] translate-y-[0%]"
          />
        )}
      </div>
      <div className="w-[70%] h-full text-right z-[1] ">
        <p className="text-2xl md:text-3xl break-normal">{name}</p>
        <p className="text-xl mt-6 pl-3">{position}</p>
        <p className="text-xl mt-4 pl-3">{team}</p>
        <div className="absolute bottom-4 right-4 flex flex-col gap-4">
          {instagram && (
            <a href={`https://instagram.com/${instagram}`} target="_blank">
              <AiOutlineInstagram size="1.6rem" />
            </a>
          )}
          {github && (
            <a href={`https://github.com/${github}`} target="_blank">
              <AiOutlineGithub size="1.6rem" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default PersonCard;
