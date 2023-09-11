import React from "react";

type PropType = { sentences: string[] };

const Marquee = ({ sentences }: PropType) => {
  return (
    <div
      className={`text-md md:text-2xl text-[#FE00D4] h-[3.5vw] overflow-hidden relative`}
    >
      <div className="block w-[200%] absolute overflow-hidden animate-[marquee_12s_linear_infinite]">
        {sentences &&
          sentences.map((sentence, index) => (
            <span className="float w-1/2" key={index}>
              {sentence}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Marquee;
