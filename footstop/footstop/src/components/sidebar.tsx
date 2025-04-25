export default function Sidebar() {
    return (
      <aside className="w-64 hidden md:block bg-b shadow h-full p-4">
        <h2 className="text-xl text font-bold mb-4">Menu</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:underline">Dashboard</a></li>
          <li><a href="#" className="hover:underline">Orders</a></li>
          <li><a href="#" className="hover:underline">Products</a></li>
          <li><a href="#" className="hover:underline">Customers</a></li>
          <li><a href="#" className="hover:underline">Reports</a></li>
        </ul>
      </aside>
    );
  }
  