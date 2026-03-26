import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-8 bg-gradient-to-b from-white to-manolya-soft-purple border-t border-manolya-purple/10 text-sm text-gray-700">
      <div className="container mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 max-w-xl">
          <h4 className="font-semibold text-xl mb-3 text-manolya-purple">Manolya Handmade</h4>
          <p className="leading-relaxed text-gray-600">
            Each piece is lovingly handcrafted with care and attention to detail. From delicate bracelets to bold statement sets,
            our beaded jewelry is made to add elegance to your everyday style.
          </p>
          <p className="mt-4 text-gray-500">Handmade in small batches • Designed with love • Shipped with care</p>

        </div>

        <div>
          <h4 className="font-semibold text-base mb-4 text-gray-900">Quick Links</h4>
          <div className="space-y-2">
            <Link to="/shop" className="block hover:text-manolya-purple transition">Shop</Link>
            <Link to="/about" className="block hover:text-manolya-purple transition">About Us</Link>
            <Link to="/contact" className="block hover:text-manolya-purple transition">Contact</Link>
            <Link to="/checkout" className="block hover:text-manolya-purple transition">Checkout</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-base mb-4 text-gray-900">Connect</h4>
          <a href="#" className="inline-flex items-center px-3 py-2 rounded-full bg-white border border-manolya-purple/20 hover:border-manolya-purple hover:text-manolya-purple transition shadow-sm">
            @manolya_handmade_
          </a>
        </div>
      </div>

      <div className="container mx-auto px-6 py-5 border-t border-manolya-purple/10 text-center text-gray-500">
              © 2026 Manolya Handmade. All rights reserved. Handcrafted with love ✨
      </div>
    </footer>
  );
}