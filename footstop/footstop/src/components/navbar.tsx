// components/Navbar.jsx
import Link from 'next/link';
import React, { useState } from "react";
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="text-xl px-5 font-bold text-black">Foot.Stop</div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10">
          <li><a href="#" className="text-black hover:underline">Shop</a></li>
          <li><a href="#" className="text-black hover:underline">Our Story</a></li>
          <li><a href="#" className="text-black hover:underline">Look Book</a></li>
          <li><a href="#" className="text-black hover:underline">Brands</a></li>
        </ul>

        {/* Search & Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <input type="text" placeholder="Search..." className="text-black border px-3 py-1 rounded-md" />
          <a href="/login" className="bg-black text-white px-6 py-2 rounded hover:bg-red-800 transition">Log-in</a>
          <a href="/register" className="bg-gray-400 text-black px-6 py-2 rounded hover:bg-black hover:text-white transition">Register</a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <ul className="flex flex-col gap-2">
            <li><a href="#" className="block text-black hover:underline">Shop</a></li>
            <li><a href="#" className="block text-black hover:underline">Our Story</a></li>
            <li><a href="#" className="block text-black hover:underline">Look Book</a></li>
            <li><a href="#" className="block text-black hover:underline">Brands</a></li>
          </ul>
          <div className="flex flex-col gap-2 mt-4">
            <input type="text" placeholder="Search..." className="text-black border px-3 py-2 rounded-md" />
            <a href="/login" className="bg-black text-white text-center py-2 rounded hover:bg-red-800 transition">Log-in</a>
            <a href="/register" className="bg-gray-400 text-black text-center py-2 rounded hover:bg-black hover:text-white transition">Register</a>
          </div>
        </div>
      )}
    </nav>
  );
}
