'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  return (
    <main className="bg-white text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 shadow">
        <div className="text-xl font-bold text-blue-600">Foot.Stop</div>
        <ul className="hidden md:flex gap-6">
          <li><a href="#" className="hover:underline">Shop</a></li>
          <li><a href="#" className="hover:underline">Our Story</a></li>
          <li><a href="#" className="hover:underline">Look Book</a></li>
          <li><a href="#" className="hover:underline">Brands</a></li>
        </ul>
        <div className="flex items-center gap-4">
          <input type="text" placeholder="Search..." className="border px-3 py-1 rounded-md"/>
          <button className="text-blue-600">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 items-center px-6 py-12 bg-gray-50">
        <div>
          <h1 className="text-3xl font-bold mb-4">FIND SHOES THAT MATCHES YOUR STYLE</h1>
          <p className="mb-4">Explore a wide range of exclusively crafted sneakers tailored to your personality.</p>
          <button className="bg-black text-white px-6 py-2 rounded">Shop Now</button>
          <div className="flex mt-6 gap-6 text-gray-600 text-sm">
            <div><strong>50+</strong><br/>BRANDS</div>
            <div><strong>1,000+</strong><br/>PRODUCTS</div>
            <div><strong>10,000+</strong><br/>CUSTOMERS</div>
          </div>
        </div>
        <div className="flex justify-center mt-8 md:mt-0">
          <Image src="/images/shoe-hero.jpg" alt="Shoe Hero" width={400} height={500} className="rounded-xl" />
        </div>
      </section>

      {/* Brand Strip */}
      <div className="flex justify-center gap-8 py-6 bg-white border-t border-b">
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
          {/* …slide lainnya */}
        </Swiper>
      </section>

      {/* Newsletter */}
      <section className="bg-black text-white py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
        <div className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input type="email" placeholder="Enter your email address" className="text-black p-2 rounded w-full" />
          <button className="bg-blue-600 px-6 py-2 rounded">Subscribe</button>
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
  );
}
