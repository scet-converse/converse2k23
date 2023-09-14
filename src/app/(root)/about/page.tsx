import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <div className="flex flex-col items-center  w-full min-h-screen max-w-1200 mx-auto my-0 p-4 md:pt-20 ">
      <h1 className="mt-8 text-4xl font-extrabold">About Us</h1>
      <div className="grid grid-cols-12 gap-9 mt-20 items-center justify-center">
        <div className="col-span-12 h-full items-center justify-center flex md:col-span-6 overflow-hidden">
          {/* <Image src={tv} width={500} height={500} alt='image'/> */}
          <video autoPlay loop muted>
            <source src="/spacecraft.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-span-12 md:col-span-6 text-lg grid gap-5 ">
          <p>
            Converse2k22 is a technical fest organised by the Department of
            Information Technology at Sarvajanik College of Engineering and
            Technology in Surat under the banner of Kshitij 2022.
          </p>
          <p>
            It will take place on September 30th and 1st October 2022, between 9
            AM and 4 PM. There are two faculty conveners, six student
            coordinators, and nine event faculty heads on the team.
          </p>
          <p>
            It includes five technical and three non-technical events. This
            event assists students in discovering their areas of interest and in
            developing their overall personality, management, and communication
            skills.
          </p>
          <h2 className="text-2xl font-bold text-[#E135A8]">
            H.O.D Dr. Mita Parekh
          </h2>
        </div>
      </div>
    </div>
  );
};

export default page;
