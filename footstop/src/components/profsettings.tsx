import { ShoppingCart, User,LogOut } from 'lucide-react';
import Link from 'next/link';
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Tutup dropdown jika klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-3">
      {/* Shopping Cart */}
      <div className="relative">
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
        <Link href="/profile">
          <ShoppingCart className="w-8 h-8 text-black hover:text-red-600 transition duration-300 ease-in-out hover:scale-105" />
        </Link>
      </div>

      {/* User Profile Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <User className="w-8 h-8 text-black hover:text-red-600 transition duration-300 ease-in-out hover:scale-105" />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
            <div className="flex items-center p-4 border-b">
              <Image
                src="/profile.jpg" // Ganti sesuai path kamu
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex flex-col ml-3">
              <div className="ml-3 font-medium">Admin</div>
              <div className="text-sm ml-3 text-gray-600">Rp 0</div>
              </div>
            </div>
            <ul className="py-2">
              <li>
                <Link href="/account" className="block px-4 py-2 hover:bg-gray-100">
                  Account Profile
                </Link>
              </li>
              <li>
                <Link href="/settings" className="block px-4 py-2 hover:bg-gray-100">
                  Settings
                </Link>
              </li>
              <li>
                <Link href="/orders" className="block px-4 py-2 hover:bg-gray-100">
                  Order List
                </Link>
                <Link
      href="/logout"
      className="group flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition rounded"
    >
      <LogOut className="w-6 h-6 text-black group-hover:text-red-500 transition" />
      <span
        className="transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 text-sm text-black"
      >
        Logout
      </span>
    </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
