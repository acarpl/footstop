'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link' ; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import motion from Framer Motion

export default function Home() {
  const products = [
    {
      name: "Converse 70s - Black",
      price: "Rp 1.700.000",
      rating: 5,
      image: "/images/converse70.png",
    },
    {
      name: "Nike Jordan - Limited",
      price: "Rp 1.770.000",
      rating: 4,
      image: "/images/nikejordan - limited1.jpeg",
    },
    {
      name: "Converse 70s - White",
      price: "Rp 1.770.000",
      rating: 4,
      image: "/images/converse70-white.png",
    },
  ];

  return (
    <>
      <div className="flex min-h-screen">
        {/* <Sidebar /> */}

        <main className="flex-1 bg-gray-100 p-6 overflow-hidden">
          {/* Swiper Banner Section */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            navigation
            className="mb-8 rounded-xl overflow-hidden shadow-lg h-[300px] md:h-[400px]"
          >
            <SwiperSlide className="relative h-full">
              <Image
                src="/images/bestseller.jpg"
                alt="Best Seller"
                fill
                className="object-cover"
              />
              <div className="absolute top-8 left-8 bg-black/60 text-white px-6 py-3 rounded-xl shadow-md backdrop-blur-sm z-10">
                <h2 className="text-xl md:text-3xl font-semibold">🔥 Best Seller</h2>
              </div>
            </SwiperSlide>

            <SwiperSlide className="relative h-full">
              <Image
                src="/images/newproduct.jpg"
                alt="New Arrival"
                fill
                className="object-cover"
              />
              <div className="absolute top-8 left-8 bg-black/60 text-white px-6 py-3 rounded-xl shadow-md backdrop-blur-sm z-10">
                <h2 className="text-xl md:text-3xl font-semibold">🆕 New Arrivals</h2>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Product List */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
            }}
          >
  {products.map((product, index) => (
    <motion.div
      key={index}
      className="bg-white p-4 rounded-lg shadow-md text-center transform transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-600 hover:text-white"
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <Link href={`/product?id=${product.id}`}>
        <div className="cursor-pointer">
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <div className="flex justify-center mb-2">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>{i < product.rating ? "⭐" : "☆"}</span>
            ))}
          </div>
          <p className="text-gray-700">{product.price}</p>
        </div>
      </Link>
    </motion.div>
  ))}
</motion.div>
        </main>
      </div>
    </>
  );
}
