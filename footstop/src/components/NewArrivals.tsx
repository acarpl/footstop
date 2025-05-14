'use client';

import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const productsList = {
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 1,
    },
  },
};

const productItem = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const NEW_ARRIVALS = [
  { name: 'Nike Air Max', price: 'Rp 2.000.000', image: 'nike-grey.png' },
  { name: 'Adidas Ultra Boost', price: 'Rp 1.800.000', image: 'adidas-white.png' },
  { name: 'Converse 70s', price: 'Rp 1.600.000', image: 'converse70.png' },
  { name: 'Puma Rider', price: 'Rp 1.500.000', image: 'puma-rider.jpg' },
];

export default function NewArrivals() {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: false, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    } else {
      controls.start('initial'); // reset ketika keluar viewport
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      variants={productsList}
      initial="initial"
      animate={controls}
      className="text-gray-700 body-font py-12 px-6"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {NEW_ARRIVALS.map((item, idx) => (
          <motion.div
            key={idx}
            className="border p-4 rounded-xl bg-gray-50"
            variants={productItem}
          >
            <Image
              src={`/images/${item.image}`}
              alt={item.name}
              width={300}
              height={300}
              className="mb-4 center"
            />
            <div className="font-semibold">{item.name}</div>
            <div className="text-sm text-gray-600">{item.price}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
