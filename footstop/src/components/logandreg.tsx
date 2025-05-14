export default function Button_L_n_R() {
  return (
    <div className="flex items-center gap-3">
      <a
        href="/login"
        className="bg-black text-white text-center px-4 py-2 rounded hover:bg-red-800 transition"
      >
        Log-in
      </a>
      <a
        href="/register"
        className="bg-gray-400 text-black text-center px-4 py-2 rounded hover:bg-black hover:text-white transition"
      >
        Register
      </a>
    </div>
  );
}
