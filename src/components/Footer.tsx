import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="w-full mx-auto my-0 p-4 pt-10 md:px-[10%] bg-gradient-to-b from-transparent  ">
      <div className="flex flex-col justify-center items-center mb-4">
        <div className="flex gap-4 mb-4">
          <Link
            href={'https://www.instagram.com/converse_2k23/'}
            target="_blank"
          >
            <AiOutlineInstagram size={'1.8rem'} />
          </Link>
          <Link
            href={'https://github.com/scet-converse/converse2k23'}
            target="_blank"
          >
            <AiFillGithub size={'1.8rem'} />
          </Link>
        </div>
        © Converse 2023 - All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
