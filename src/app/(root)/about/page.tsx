import { HOD_NAME, IMG_PREFIX } from '@/lib/constants';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <div className="flex flex-col w-full min-h-screen max-w-1200 mx-auto my-0 py-6">
      <h1 className="text-3xl mb-3">
        <Link href="/">Home </Link> {'>'} About
      </h1>
      <p>
        Don't know about <span className="text-pink-600">CONVERSE</span> ? ,
        here you go.
      </p>

      <h1 className="mt-8 md:text-4xl text-xl text-center text-amber-400 font-extrabold ">
        🚀 Experience the Future at Converse 2K23 -{' '}
        <br className="hidden md:flex" /> Where Innovation Meets Inspiration! 🛸
      </h1>
      <div className="grid grid-cols-12 md:gap-9 gap-4 mt-4 items-center justify-center">
        <div className="col-span-12 h-full md:h-3/4 items-start justify-center my-4 flex overflow-hidden">
          <video autoPlay loop muted>
            <source src={`${IMG_PREFIX}/spacecraft.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-span-12 text-base grid gap-5 ">
          <p>
            Prepare yourselves for an exhilarating journey into the realms of
            technology and creativity as the Information Technology & Artificial
            Intelligence and Data Science departments of Sarvajanik College of
            Engineering and Technology proudly present Converse 2K23, set to
            unfold on the 29th and 30th of September, 2023, under the dynamic
            banner of Kshitij.
          </p>

          <h2 className="md:text-xl text-lg text-green-500">
            🤖 A Fusion of Tech and Artistry
          </h2>
          <p>
            Converse 2K23 is not your run-of-the-mill technical festival; it's a
            captivating fusion of cutting-edge technology and boundless
            creativity. With a dazzling array of 7 technical and 7 non-technical
            events, this festival promises to be a playground for the brightest
            minds and the most innovative souls. Dive headfirst into the world
            of IT, or let your creativity soar in non-technical domains like
            art, sports, and entrepreneurship.
          </p>
          <h2 className="md:text-xl text-lg text-green-500">
            🤖 Ignite Your Passion
          </h2>
          <p>
            Whether you're a coding wizard, a debugging maestro, an aspiring
            entrepreneur, or simply someone who loves to explore new horizons,
            Converse 2K23 has something for everyone. Engage in intense coding
            competitions, professional grade mock interviews, or pitch your
            groundbreaking startup idea to an expert panel. On the flip side,
            showcase your artistic flair through acting, video-gaming, and a
            host of cultural events that will captivate your senses.
          </p>

          <h2 className="md:text-xl text-lg text-green-500">
            🤖 Why Converse 2K23?
          </h2>
          <p>
            Converse 2K23 isn't just a festival; it's an opportunity to connect
            with like-minded individuals, learn from industry experts, and chart
            your course into the future of technology and innovation. So, mark
            your calendars and join us for an unforgettable experience that will
            leave you inspired, informed, and exhilarated. The future is here,
            and it's happening at Converse 2K23!
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-[#E135A8]">
            H.O.D : {HOD_NAME}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default page;
