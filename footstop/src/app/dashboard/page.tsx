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
    <h2 className="text-2xl text-black font-bold mb-6">Dashboard Admin</h2>


<div className="flex gap-4 mb-6">
  <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
    Tambah
  </button>
</div>
  {/* Tabel User */}
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border rounded-lg">
      <thead className="bg-gray-100">
        <tr>
          <th className="py-3 px-6 text-left text-xs font-semibold text-gray-700 uppercase">User</th>
          <th className="py-3 px-6 text-left text-xs font-semibold text-gray-700 uppercase">Username</th>
          <th className="py-3 px-6 text-left text-xs font-semibold text-gray-700 uppercase">Email</th>
          <th className="py-3 px-6 text-center text-xs font-semibold text-gray-700 uppercase">Aksi</th>
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3].map((item, index) => (
          <tr key={index} className="border-b hover:bg-gray-50">
            <td className="py-4 px-6 flex items-center gap-4">
              <img src="/images/avatar-default.png" alt="Avatar" className="w-10 h-10 rounded-full object-cover" />
              <span className="font-medium text-gray-900">Nama User {item}</span>
            </td>
            <td className="py-4 px-6 text-gray-700">@username{item}</td>
            <td className="py-4 px-6 text-gray-700">email{item}@example.com</td>
            <td className="py-4 px-6 flex justify-center gap-2">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                Detail
              </button>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                Hapus
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
  );
}
