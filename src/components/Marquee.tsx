import React from 'react';
import { motion } from 'framer-motion';

type PropType = { sentences: string[] };

const marqueeVariants = {
  animate: {
    x: ['100%', '-100%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 10,
        ease: 'linear',
      },
    },
  },
};

const Marquee = ({ sentences }: PropType) => {
  return (
    <div className="relative w-screen max-w-full h-auto overflow-hidden">
      <motion.div
        className="whitespace-nowrap flex items-center justify-start gap-4"
        variants={marqueeVariants}
        animate="animate"
      >
        {sentences &&
          sentences.map((sentence, index) => (
            <h1 className="md:text-lg" key={index}>
              {sentence}
            </h1>
          ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
