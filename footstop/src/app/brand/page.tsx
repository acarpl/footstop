'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { motion } from "framer-motion"; // Pastikan framer-motion diimport
import Image from "next/image";

export default function Home() {
  const products = [
    {
      name: "NIKE",
      image: "/images/nike.png",
    },
    {
      name: "ADDIDAS",
      image: "/images/adidas.png",
    },
    {
      name: "CONVERSE",
      image: "/images/converse.png",
    },
  ];

  return (
    <>
      <div className="flex min-h-screen">
        {/*<Sidebar />*/}
        <main className="flex-1 bg-gray-100 p-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.3 } },
            }}
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md text-center transform transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-600 hover:text-white"
                initial={{ opacity: 0, y: 20 }} // Animasi saat muncul
                animate={{ opacity: 1, y: 0 }}    // Animasi saat elemen terlihat
                transition={{
                  duration: 0.7,
                  delay: index * 0.3, // Menambahkan delay per produk
                }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </main>
      </div>
    </>
  );
}
