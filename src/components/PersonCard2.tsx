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
    <div className="relative flex flex-row-reverse w-full h-full md:w-[90%] md:h-[90%] m-auto aspect-[9/10] bg-[#213555] p-4  overflow-hidden">
      <div className="absolute top-0 left-0 w-2/5 h-full bg-[#F0F0F0]" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full ">
        {photos[name] && (
          <Image
            // src={image ? image : `${IMG_PREFIX}/8bit_placeholder.png`}
            src={`${IMG_PREFIX}/people/trans/IMG_${photos[name].trim()}.png`}
            alt="Picture"
            fill
            style={{
              objectFit: 'contain',
              scale: 1.7,
              transform: 'translate(3%,3%)',
            }}
            loading="lazy"
          />
        )}
      </div>
      <div className="w-3/5 h-full text-right">
        <p className="text-3xl">{name}</p>
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
