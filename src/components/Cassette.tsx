import { IMG_PREFIX } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Cassette({
  title,
  image = '1',
  link = '',
  isActive = false,
  handleHover,
}: {
  title: string;
  image: string;
  link: string;
  isActive: boolean;
  handleHover: Function;
}) {
  const colors = [
    'bg-[#F0F0F0]',
    'bg-[#7091F5]',
    'bg-[#F7D060]',
    'bg-[#96C291]',
    'bg-[#FF9B82]',
    'bg-[#BC7AF9]',
  ];
  const bgColor = colors[(Number(image) - 1) % colors.length];
  const styles = {
    body: `w-full aspect-[16/10] px-[5%] ${bgColor} rounded-md relative flex flex-col-reverse items-center cursor-pointer ${
      isActive ? 'bounce' : ''
    }`,
    label: 'w-full h-[65%] mb-5 bg-orange-300 rounded-md relative',
    pin1: 'w-[90%] h-5 absolute top-[100%] left-[50%] translate-x-[-50%] z-[-1] hover:z-[-1] bg-[#FF6D60]',
  };

  return (
    <Link
      href={`/teams/${link}`}
      className={styles.body}
      onMouseEnter={() => {
        handleHover(Number(image) - 1);
      }}
    >
      <div className={styles.label}>
        <Image
          src={`${IMG_PREFIX}/teams/gif_${(Number(image) % 12) + 1}.gif`}
          alt="cassette_banner"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          priority={false}
          className="rounded-md object-[50%_40%]"
          loading="lazy"
        />
      </div>
      <h3 className="self-start text-2xl mb-2 text-black">{title}</h3>

      <div className={styles.pin1}></div>
    </Link>
  );
}

export default Cassette;
