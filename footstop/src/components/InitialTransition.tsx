// components/InitialTransition.tsx
'use client';

import { motion } from 'framer-motion';

const blackBox = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.25,
      when: "afterChildren",
    },
  },
};

<motion.svg variants={textContainer} className="absolute z-50 flex"></motion.svg>

const textSlide = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

<motion.rect
  variants={textSlide}
  className="w-full h-full text-gray-600 fill-current"
/>

export default function InitialTransition() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
      <motion.div
  className="absolute z-50 flex items-center justify-center w-full bg-black"
  initial="initial"
  animate="animate"
  variants={blackBox}
  onAnimationStart={() => document.body.classList.add("overflow-hidden")}
  onAnimationComplete={() =>
    document.body.classList.remove("overflow-hidden")
  }
> 

        <motion.svg
          variants={textContainer}
          className="absolute z-50 w-full h-full flex"
          viewBox="0 0 750 800"
        >
          <defs>
            <pattern
              id="pattern"
              patternUnits="userSpaceOnUse"
              width={750}
              height={800}
              className="text-white"
            >
              <rect className="w-full h-full fill-current" />
              <motion.rect
                variants={textSlide}
                className="w-full h-full text-gray-600 fill-current"
              />
            </pattern>
          </defs>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-4xl font-bold"
            style={{ fill: 'url(#pattern)' }}
          >
            Footstop
          </text>
        </motion.svg>
      </motion.div>
    </div>
  );
}
