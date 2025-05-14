// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import PageWrapper from "@/components/PageWrapper";
import InitialTransition from '@/components/InitialTransition';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FootStop",
  description: "Explore a wide range of crafted sneakers tailored to your personality.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {/* Animasi pembuka satu kali */}
        <InitialTransition />

        {/* Navbar tetap di luar animasi per halaman */}
        <Navbar />

        {/* Bungkus semua halaman dengan animasi transisi antar halaman */}
        <PageWrapper>
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}