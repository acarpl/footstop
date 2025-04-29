'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <main className="h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative p-10 bg-white rounded-2xl shadow-2xl overflow-hidden w-80 h-48 flex flex-col justify-center items-center"
      >
        {/* Shimmer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />

        {/* Loading Content */}
        <div className="relative z-10 text-center">
          <div className="w-12 h-12 border-4 border-dashed border-gray-400 rounded-full animate-spin mb-4 mx-auto" />
          <p className="text-gray-600 font-semibold text-lg">Sedang Memuat...</p>
        </div>
      </motion.div>

      {/* Tambahkan animasi shimmer */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 2s infinite linear;
        }
      `}</style>
    </main>
  );
}
