import {
  FACULTY_COORDINATORS,
  HOD_DESIGNATION,
  HOD_NAME,
  STUDENT_COORDINATORS,
  WEB_HEADS,
} from '@/lib/constants';
import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="bg-neutral-900 w-full mx-auto my-0 p-4 pt-10 md:px-[10%] bg-gradient-to-b from-transparent">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <h1 className="text-xl mb-2 text-secondary">{HOD_DESIGNATION}</h1>

          <p>{HOD_NAME}</p>
        </div>

        <div className="col-span-12 md:col-span-3">
          <h1 className="text-xl mb-2 text-secondary">Faculty Coordinators</h1>

          {FACULTY_COORDINATORS.map((coordinator) => (
            <p>{coordinator}</p>
          ))}
        </div>

        <div className="col-span-12 md:col-span-3">
          <h1 className="text-xl mb-2 text-secondary">Student Coordinators</h1>

          {STUDENT_COORDINATORS.map((coordinator) => (
            <p>{coordinator.name}</p>
          ))}
        </div>

        <div className="col-span-12 md:col-span-3">
          <h1 className="text-xl mb-2 text-secondary">Graphics and Web Heads</h1>

          {WEB_HEADS.map((head) => (
            <p>{head}</p>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-8 mb-6">
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
        <p className="text-sm md:text-lg">
          © Converse 2023 - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
