import React from 'react';
import Image from 'next/image';

import { AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai';
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
    <div className="flex flex-col w-full h-full md:w-[90%] md:h-[90%] m-auto aspect-square bg-pink-500 px-10 py-4">
      <div className="w-full h-1/2 relative flex justify-center">
        <Image
          src={image ? image : `${IMG_PREFIX}/8bit_placeholder.png`}
          alt="Picture"
          fill
          objectFit="contain"
        />
      </div>
      <div className="flex flex-col items-center justify-between flex-1 text-center">
        <div className="flex-1 flex flex-col justify-center py-4">
          <p className="text-2xl text-yellow-300">{name}</p>
          <p className="text-lg mt-2">{position}</p>
        </div>
        {team && <p className="text-md">{team}</p>}
      </div>
      <div className="mt-2 my-auto flex flex-row justify-center items-center [&>*]:mx-2">
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
  );
}

export default PersonCard;
