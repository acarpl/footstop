// loading.tsx
'use client';

import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
// "npm install framer-motion"

export default function Loading() {
  return (
    <main className="h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col items-center"
      >
        <Loader2 className="w-14 h-14 animate-spin text-black" />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-6 text-black text-xl font-semibold drop-shadow-lg"
        >
          Memuat Halaman...
        </motion.p>
      </motion.div>
    </main>
  );
}
