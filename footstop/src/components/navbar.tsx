"use client"
import Link from 'next/link';
import React, { useState } from "react";
import { Menu, X, Search } from 'lucide-react';
import Profile from "@/components/profsettings";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/'); // Track active page

  return (
   <nav className="sticky top-0 z-50 w-full max-w-7xl mx-auto bg-white/30 backdrop-blur-md border border-white/20 rounded-b-3xl px-4 py-3 shadow-lg">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="bg-black text-white font-bold text-lg px-6 py-2 rounded-full hover:opacity-90 transition duration-300 ease-in-out hover:scale-105 hover:bg-red-800"
        >
          Footstop
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 ml-8">
          <li className="relative group">
            <Link
              href="/shop"
              className={`text-black ${activeLink === '/shop' ? 'font-semibold' : ''}`}
              onClick={() => setActiveLink('/shop')}
            >
              Shop
              <span
                className={`rounded-md absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-red-800 w-0 group-hover:w-full transition-all duration-300 ease-in-out`}
              />
            </Link>
          </li>
          <li className="relative group">
            <Link
              href="/brand"
              className={`text-black ${activeLink === '/brand' ? 'font-semibold' : ''}`}
              onClick={() => setActiveLink('/brand')}
            >
              Brand
              <span
                className={`rounded-md absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-red-800 w-0 group-hover:w-full transition-all duration-300 ease-in-out`}
              />
            </Link>
          </li>
          <li className="relative group">
            <Link
              href="/onsale"
              className={`text-black ${activeLink === '/onsale' ? 'font-semibold' : ''}`}
              onClick={() => setActiveLink('/onsale')}
            >
              Onsale
              <span
                className={`rounded-md absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-red-800 w-0 group-hover:w-full transition-all duration-300 ease-in-out`}
              />
            </Link>
          </li>
          <li className="relative group">
            <Link
              href="#new-arrivals"
              className={`text-black ${activeLink === '/new' ? 'font-semibold' : ''}`}
              onClick={() => setActiveLink('#new-arrivals')}
            >
              New Arrivals
              <span
                className={`rounded-md absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-red-800 w-0 group-hover:w-full transition-all duration-300 ease-in-out`}
              />
            </Link>
          </li>
        </ul>

        {/* Desktop Search + Profile */}
        <div className="hidden md:flex items-center gap-4 ml-auto">
          <div className="group flex items-center bg-white border rounded-full overflow-hidden transition-all duration-300 ease-in-out">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-1 text-sm text-black focus:outline-none"
            />
            <button className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 translate-x-2 transition-all duration-300 ease-in-out bg-black text-white px-2 py-2">
              <Search size={16} />
            </button>
          </div>
         {/*} <Login />*/} 
          <Profile />
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 animate-slide-down">
          <ul className="flex flex-col gap-3">
            <li><Link href="/shop" className="block text-black hover:underline">Shop</Link></li>
            <li><Link href="/brand" className="block text-black hover:underline">Brand</Link></li>
            <li><Link href="/onsale" className="block text-black hover:underline">Onsale</Link></li>
            <li><Link href="/new" className="block text-black hover:underline">New Arrivals</Link></li>
          </ul>
          <div className="flex mt-4 gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="text-black border px-3 py-2 rounded-md w-full"
            />
            <button className="bg-black text-white px-3 rounded-md">
              <Search size={16} />
            </button>
          </div>
          <div className="mt-4">
            <Profile />
          </div>
        </div>
      )}
    </nav>
  );
}
