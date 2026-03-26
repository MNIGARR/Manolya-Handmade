import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 text-sm text-gray-700">
      {/* Main footer grid */}
      <div className="container mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h4 className="font-bold text-lg mb-3 text-manolya-purple">Manolya Handmade</h4>
          <p className="leading-relaxed text-gray-500 max-w-xs">
            Each piece is lovingly handcrafted with care and attention to detail.
            Our beaded jewelry brings a touch of elegance to your everyday style.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-base mb-4 text-gray-900">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-manolya-purple transition">Home</Link></li>
            <li><Link to="/shop" className="hover:text-manolya-purple transition">Shop</Link></li>
            <li><Link to="/about" className="hover:text-manolya-purple transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-manolya-purple transition">Contact</Link></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-semibold text-base mb-4 text-gray-900">Connect</h4>
          <ul className="space-y-2">
            <li>
              <a href="https://www.instagram.com/manolya_handmade_" target="_blank" rel="noopener noreferrer" className="hover:text-manolya-purple transition flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.265.07 1.645.07 4.851s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.265.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.413 2.105 8.795 2.163 12 2.163zm0-2.163C8.756 0 8.332.013 7.052.072 5.197.157 3.355.673 1.992 2.037.628 3.4.113 5.242.028 7.097-.031 8.376 0 8.8 0 12s.013 3.624.072 4.904c.085 1.854.6 3.696 1.964 5.06 1.363 1.363 3.205 1.879 5.06 1.964C8.376 23.987 8.8 24 12 24s3.624-.013 4.904-.072c1.854-.085 3.696-.6 5.06-1.964 1.363-1.363 1.879-3.205 1.964-5.06.059-1.28.072-1.704.072-4.904s-.013-3.624-.072-4.904c-.085-1.854-.6-3.696-1.964-5.06C20.6.672 18.758.157 16.904.072 15.624.013 15.2 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                @manolya_handmade_
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-base mb-4 text-gray-900">Stay Updated</h4>
          <p className="text-gray-500 mb-3 leading-relaxed">Get notified about new collections and special offers.</p>
          <form onSubmit={e => e.preventDefault()} className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-manolya-purple"
            />
            <button
              type="submit"
              className="bg-manolya-purple text-white px-4 py-2 rounded-md text-sm hover:bg-purple-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-gray-400 text-xs">
          <span>© 2026 Manolya Handmade. All rights reserved.</span>
          <span>Handcrafted with love ✨</span>
        </div>
      </div>
    </footer>
  );
}