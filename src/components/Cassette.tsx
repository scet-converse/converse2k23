import Image from 'next/image';
import React from 'react';

function Cassette({ title = 'Graphics and Web' }: any) {
  return (
    <div className={styles.body}>
      <div className={styles.label}>
        <Image
          src={'/pulp_fiction.gif'}
          alt="cassette_banner"
          fill
          objectFit="cover"
          className="rounded-md object-center"
        />
      </div>
      <h3 className="self-start text-2xl mb-2 text-black">{title}</h3>

      {/* <div className={styles.pin2}></div> */}
      <div className={styles.pin1}></div>
    </div>
  );
}

const styles = {
  body: `w-full aspect-[16/10] px-[5%] bg-[#F7D060] rounded-md relative \
  flex flex-col-reverse items-center bounce cursor-pointer`,
  label: 'w-full h-[65%] mb-5 bg-orange-300 rounded-md relative',
  pin1: 'w-[90%] h-5 absolute top-[100%] left-[50%] translate-x-[-50%] z-[-1] hover:z-[-1] bg-[#FF6D60]',
  pin2: 'w-[90%] h-6 absolute top-[100%] left-[51%] translate-x-[-50%] z-[-1] hover:z-[-1] bg-green-300',
};

export default Cassette;
