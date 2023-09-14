import React from 'react';

type PropType = { sentences: string[] };

const Marquee = ({ sentences }: PropType) => {
  return (
    <div id="marquee" className='whitespace-nowrap overflow-x-auto overflow-y-hidden'>
    {/* <h1 className='text-2xl inline-block mr-[30px]'>Welcome to the 2023 edition of Converse! <span className='px-[12px] py-2 bg-[#FE00D4] rounded-[15px] text-slate-950'>CONVERSE</span> !</h1> */}
    <h1 className='text-2xl inline-block mr-[30px]'>WELCOME TO 2023 EDITION OF <span className='px-[12px] py-2 bg-[#FE00D4] rounded-[15px] text-slate-950'>CONVERSE</span> !</h1>
    <h1 className='text-2xl inline-block mr-[30px]'>WELCOME TO 2023 EDITION OF <span className='px-[12px] py-2 bg-[#FE00D4] rounded-[15px] text-slate-950'>CONVERSE</span> !</h1>
    <h1 className='text-2xl inline-block mr-[30px]'>WELCOME TO 2023 EDITION OF <span className='px-[12px] py-2 bg-[#FE00D4] rounded-[15px] text-slate-950'>CONVERSE</span> !</h1>
    {/* <h1 className='text-2xl inline-block mr-[30px]'>HELLO STUDENTS WELCOME TO <span className='px-[12px] py-2 bg-[#FE00D4] rounded-[15px] text-slate-950'>CONVERSE</span> !</h1> */}

</div>
  );
};

export default Marquee;