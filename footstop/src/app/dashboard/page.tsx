"use client";
import { useEffect } from "react";

export default function DashboardPage() {
  useEffect(() => {
    document.body.classList.add("bg-white");
    return () => {
      document.body.classList.remove("bg-white"); // agar rapi saat keluar dari page
    };
  }, []);

  return (
    <div className="bg-white min-h-screen p-6">
      <h2 className="text-xl text-black font-bold">Dashboard Admin</h2>
    </div>
  );
}
