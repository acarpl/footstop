'use client';

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const BRANDS = ["nike", "jordan", "adidas", "crocs", "puma", "converse", "onitsuka"];

const NEW_ARRIVALS = [
  { name: "Converse 1970 - Black", price: "Rp 1.700.000", image: "converse70.png" },
  { name: "Nike BWSR90 - Grey", price: "Rp 610.000", image: "nike-grey.png" },
  { name: "Adidas OZW - White", price: "Rp 1.350.000", image: "adidas-white.png" },
  { name: "Original Tape - Black", price: "Rp 1.090.000", image: "original-black.png" }
];

const STYLES = [
  { name: "Casual", image: "casual.png" },
  { name: "Formal", image: "formal.png" },
  { name: "Party", image: "party.png" },
  { name: "Gym", image: "gym.png" }
];

const TESTIMONIALS = ["Aghea Simarmata", "Budi Setiono", "Alif", "Baskaara", "Zarput", "Aisyah"];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-gray-800 font-sans">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 items-center px-6 pt-6 pb-0 bg-gray-50">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">FIND SHOES THAT MATCHES YOUR STYLE</h1>
            <p className="mb-4">Explore a wide range of exclusively crafted sneakers tailored to your personality.</p>
            <a href="" className="bg-black text-white px-6 py-2 rounded">Shop Now</a>
            <div className="flex mt-6 gap-6 text-gray-600 text-sm">
              <div><strong>7</strong><br />BRANDS</div>
              <div><strong>1,000+</strong><br />PRODUCTS</div>
              <div><strong>10,000+</strong><br />CUSTOMERS</div>
            </div>
          </div>
          <div className="relative h-[500px] w-full overflow-hidden">
            <Image src="/images/shoe-hero.png" alt="Shoe Hero" fill className="object-bottom object-cover" />
          </div>
        </section>

        {/* Brand Strip */}
        <div className="flex justify-center gap-10 py-6 bg-black border-t border-b overflow-x-auto px-4">
          {BRANDS.map((brand, i) => (
            <Image key={i} src={`/images/${brand}.png`} alt={brand} width={70} height={50} />
          ))}
        </div>

        {/* New Arrivals */}
        <section className="py-12 px-6">
          <h2 className="text-2xl font-bold mb-6 text-center">NEW ARRIVALS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {NEW_ARRIVALS.map((item, idx) => (
              <div key={idx} className="border p-4 rounded-xl bg-gray-50">
                <Image src={`/images/${item.image}`} alt={item.name} width={300} height={300} className="mb-4 center" />
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-gray-600">{item.price}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="/dashboard" className="border px-6 py-2 rounded">View All</a>
          </div>
        </section>

        {/* Browse By Style */}
        <section className="py-12 px-6 bg-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-center">BROWSE BY DRESS STYLE</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {STYLES.map((style, idx) => (
              <div key={idx} className="text-center">
                <Image src={`/images/styles/${style.image}`} alt={style.name} width={200} height={200} className="rounded-xl mb-2" />
                <div className="font-semibold">{style.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-6 py-12 bg-white text-center">
          <h2 className="text-2xl font-bold mb-6">OUR HAPPY CUSTOMERS</h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 5000 }}
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="max-w-6xl mx-auto"
          >
            {TESTIMONIALS.map((name, i) => (
              <SwiperSlide key={i} className="p-4 bg-gray-50 rounded shadow">
                <p className="text-sm mb-2">"Review dari {name}!"</p>
                <strong>{name}</strong><br />
                <span className="text-xs text-gray-500">⭐ 5.0</span>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Newsletter */}
        <section className="bg-black text-white py-12 px-6 text-center rounded">
          <h2 className="text-2xl font-bold mb-4">STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>
          <div className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
            <input type="email" placeholder="Enter your email address" className="text-black bg-white p-2 rounded w-full" />
            <button className="bg-red-600 px-6 py-2 rounded">Subscribe</button>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
