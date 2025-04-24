// components/Navbar.jsx
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

  <button className="bg-black text-white px-4 py-1.5 rounded-md hover:opacity-90 transition">
    Login
  </button>

  <button className="bg-gray-200 text-black px-4 py-1.5 rounded-md hover:bg-gray-300 transition">
    Register
  </button>
</div>

        </div>
      </div>
    </nav>
  );
}
