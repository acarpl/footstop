"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Tombol toggle hanya terlihat di layar kecil */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-5 left-5 z-50 p-2 bg-black text-white rounded-lg"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:static z-40 top-0 left-0 h-full w-64 bg-black text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6 space-y-6">
          {/* Tombol close di mobile */}
          <div className="flex justify-between md:hidden">
            <h2 className="text-2xl font-bold">Footstop</h2>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu */}
          <div>
            <h2 className="text-2xl font-bold hidden md:block">Footstop</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">All Product</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Category</h3>
            <ul className="ml-2 border-l border-white/50 pl-3 space-y-2">
              <li><a href="#" className="hover:text-white">Sports</a></li>
              <li><a href="#" className="hover:text-white">Casual</a></li>
              <li><a href="#" className="hover:text-white">Safety Boots</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Brands</h3>
            <ul className="ml-2 pl-3 space-y-2">
              <li><a href="#" className="hover:text-white">Nike</a></li>
              <li><a href="#" className="hover:text-white">Adidas</a></li>
              <li><a href="#" className="hover:text-white">Converse</a></li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}
