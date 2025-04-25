//login page
'use client';

import { Home } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
    return (
      <main className="h-screen flex items-center justify-center relative">
        {/* Background Blur */}
        <div
      className="absolute inset-0 bg-cover bg-center filter blur-sm z-0"
      style={{ backgroundImage: `url('/images/bg-shoes.jpg')` }} // bg image blur
      />
   {/* Ikon Home */}
        <Link href="/" className="absolute top-4 right-4 z-10">
          <Home className="w-8 h-8 text-white hover:text-blue-400 transition" />
      </Link>
  
        {/* Card */}
        <div className="relative z-10 bg-white rounded-2xl shadow-lg flex w-full max-w-4xl overflow-hidden">
          {/* Left - Image */}
          <div className="w-1/2 hidden md:block">
            <Image
              src="/images/products/converse.jpg" // Gambar samping login
              alt="Shoes"
              width={500}
              height={500}
              className="object-cover h-full w-full"
            />
          </div>
  
          {/* Right - Form */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-5xl font-bold text-black text-center mb-6">FOOTSTOP</h2>
            <input
              type="text"
              placeholder="Nomor Telephone"
              className="text-black border bg-gray-300 rounded-md p-2 mb-4 w-full"
            />
            <input
              type="password"
              placeholder="Password"
              className="border text-black bg-gray-300 rounded-md p-2 mb-4 w-full"
            />
            <button className="bg-black text-white py-2 rounded-md w-full cursor-not-allowed">
              Login
            </button>
            <p className="text-black text-sm text-center mt-4">
              Belum punya akun?{' '}
              <a href="/register" className="text-blue-600 underline">
                daftar sekarang!
              </a>
            </p>
          </div>
        </div>
      </main>
    );
  }