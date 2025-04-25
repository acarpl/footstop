export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 mt-12">
    <div className="grid md:grid-cols-4 gap-6 text-sm">
      <div>
        <div className="text-lg font-bold mb-2">Foot.Stop</div>
        <p>Step into your story.</p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Company</h4>
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Help</h4>
        <ul>
          <li>Customer Service</li>
          <li>Order Status</li>
          <li>FAQ</li>
          <li>Return Policy</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Contact</h4>
        <ul>
          <li>Email: support@footstop.com</li>
          <li>Phone: +62 812-3456-7890</li>
          <li>Jakarta, Indonesia</li>
        </ul>
      </div>
    </div>
    <div className="text-center text-xs text-gray-400 mt-8">&copy; 2025 Foot.Stop. All rights reserved.</div>
  </footer>
  );
}
