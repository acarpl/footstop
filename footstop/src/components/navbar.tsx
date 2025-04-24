// components/Navbar.jsx
//npm install lucide-react
import Link from 'next/link';
import React from "react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="text-xl px-5 font-bold text-black">Foot.Stop</div>
        <ul className="hidden md:flex gap-10">
          <li><a href="#" className="text-black hover:underline">Shop</a></li>
          <li><a href="#" className="text-black hover:underline">Our Story</a></li>
          <li><a href="#" className="text-black hover:underline">Look Book</a></li>
          <li><a href="#" className="text-black hover:underline">Brands</a></li>
        </ul>
        <div className="flex items-center gap-4">
          <input type="text" placeholder="Search..." className="text-black border px-3 py-1 rounded-md" />
          <div className="flex items-center gap-4">

          <a href="/login" className="bg-black text-white px-6 py-2 rounded hover:bg-red-800 transition">Log-in</a>

          <a href="/register" className="bg-gray-400 text-black px-6 py-2 rounded hover:bg-black hover:text-white transition">Register</a>
</div>

        </div>
      </div>
    </nav>
  );
}
