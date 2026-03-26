import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16 text-sm text-gray-700">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <h4 className="font-semibold text-lg mb-4 text-manolya-purple">Manolya Handmade</h4>
          <p className='leading-relaxed'>Each piece is lovingly handcrafted with care and attention to detail. Our beaded jewelry brings a touch of elegance to your everyday style.</p>
        </div>
        <div>
          <h4 className="font-semibold text-base mb-4 text-gray-900">Quick Links</h4>
          <Link to="/shop" className="block mb-2 hover:text-manolya-purple transition">Shop</Link>
          <Link to="/about" className="block mb-2 hover:text-manolya-purple transition">About Us</Link>
          <Link to="/contact" className="block mb-2 hover:text-manolya-purple transition">Contact</Link>
        </div>
        <div>
          <h4 className="font-semibold text-base mb-4 text-gray-900">Connect</h4>
          <a href="#" className="block mb-2 hover:text-manolya-purple transition">@manolya_handmade_</a>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-gray-100 text-center text-gray-500">
        © 2026 Manolya Handmade. All rights reserved. Handcrafted with love ✨
      </div>
    </footer>
  );
}