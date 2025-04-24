'use client';

import Navbar from "../components/navbar"; // atau "@/components/Navbar" kalau kamu pakai alias
import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
          <button className="bg-black text-white px-6 py-2 rounded">Shop Now</button>
          <div className="flex mt-6 gap-6 text-gray-600 text-sm">
            <div><strong>50+</strong><br/>BRANDS</div>
            <div><strong>1,000+</strong><br/>PRODUCTS</div>
            <div><strong>10,000+</strong><br/>CUSTOMERS</div>
          </div>
        </div>
                  {/*image hero*/}
    <div className="relative h-[500px] md:h-[500px] w-full overflow-hidden">
  <Image
    src="/images/shoe-hero.png"
    alt="Shoe Hero"
    fill
    className="object-bottom object-cover"
  />
</div>

      </section>

      {/* Brand Strip */}
      <div className="flex justify-center gap-8 py-6 bg-black border-t border-b">
        {["nike", "jordan", "crocs", "puma", "nb", "original"]?.map((brand, index) => (
          <Image key={index} src={`/images/brands/${brand}.png`} alt={brand} width={50} height={30} />
        ))}
      </div>

      {/* New Arrivals */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">NEW ARRIVALS</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { name: "Converse 1970 - Black", price: "Rp 1.700.000", image: "converse.png" },
            { name: "Nike BWSR90 - Grey", price: "Rp 610.000", image: "nike-grey.png" },
            { name: "Adidas OZW - White", price: "Rp 1.350.000", image: "adidas-white.png" },
            { name: "Original Tape - Black", price: "Rp 1.090.000", image: "original-black.png" }
          ].map((item, idx) => (
            <div key={idx} className="border p-4 rounded-xl bg-gray-50">
              <Image src={`/images/products/${item.image}`} alt={item.name} width={300} height={200} className="mb-4" />
              <div className="font-semibold">{item.name}</div>
              <div className="text-sm text-gray-600">{item.price}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button className="border px-6 py-2 rounded">View All</button>
        </div>
      </section>

      {/* Browse By Style */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-center">BROWSE BY dress STYLE</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { name: "Casual", image: "casual.png" },
            { name: "Formal", image: "formal.png" },
            { name: "Party", image: "party.png" },
            { name: "Gym", image: "gym.png" }
          ].map((style, idx) => (
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
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-6xl mx-auto"
        >
          <SwiperSlide className="p-4 bg-gray-50 rounded shadow">
            <p className="text-sm mb-2">"Kualitasnya luar biasa! Nyaman dan stylish!"</p>
            <strong>Aghea Simarmata</strong><br/>
            <span className="text-xs text-gray-500">⭐ 5.0</span>
          </SwiperSlide>
          <SwiperSlide className="p-4 bg-gray-50 rounded shadow">
            <p className="text-sm mb-2">"Mantap Bagus Bangeeeeetttt!"</p>
            <strong>Budi Setiono</strong><br/>
            <span className="text-xs text-gray-500">⭐ 5.0</span>
          </SwiperSlide>
          <SwiperSlide className="p-4 bg-gray-50 rounded shadow">
            <p className="text-sm mb-2">"Mantap!"</p>
            <strong>Alif</strong><br/>
            <span className="text-xs text-gray-500">⭐ 5.0</span>
          </SwiperSlide>
          <SwiperSlide className="p-4 bg-gray-50 rounded shadow">
            <p className="text-sm mb-2">"Luar Biasa Fast Respond"</p>
            <strong>Aghea Simarmata</strong><br/>
            <span className="text-xs text-gray-500">⭐ 5.0</span>
          </SwiperSlide>
          <SwiperSlide className="p-4 bg-gray-50 rounded shadow">
            <p className="text-sm mb-2">"Banyak Banget pilihanya sesuai expetasi!"</p>
            <strong>Zarput</strong><br/>
            <span className="text-xs text-gray-500">⭐ 5.0</span>
          </SwiperSlide>
          <SwiperSlide className="p-4 bg-gray-50 rounded shadow">
            <p className="text-sm mb-2">"Karyawanya Ganteng Bangeeeeetttt"</p>
            <strong>Aisyah</strong><br/>
            <span className="text-xs text-gray-500">⭐ 5.0</span>
          </SwiperSlide>
          {/* …slide lainnya */}
        </Swiper>
      </section>

      {/* Newsletter */}
      <section className="bg-black text-white py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>
        <div className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input type="email" placeholder="Enter your email address" className="text-black bg-white p-2 rounded w-full" />
          <button className="bg-red-600 px-6 py-2 rounded">Subscribe</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 mt-12">
        <div className="grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="text-lg font-bold mb-2">Foot.Stop</div>
            <p>Step into your story.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Help</h4>
            <ul>
              <li>Customer Service</li>
              <li>Order Status</li>
              <li>FAQ</li>
              <li>Return Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <ul>
              <li>Email: support@footstop.com</li>
              <li>Phone: +62 812-3456-7890</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-8">&copy; 2025 Foot.Stop. All rights reserved.</div>
      </footer>
    </main>
    </>
  );
}
