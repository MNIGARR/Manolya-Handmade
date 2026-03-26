import { Link, useLocation } from 'react-router-dom';

interface Props {
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navbar({ cartCount, onOpenCart }: Props) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path ? "text-manolya-purple font-bold" : "hover:text-manolya-purple transition";

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
            <img src="https://via.placeholder.com/40" alt="Logo" />
          </div>
          <span className="text-xl font-semibold text-manolya-purple">Manolya Handmade</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6 text-gray-700">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/shop" className={isActive('/shop')}>Shop</Link>
          <Link to="/about" className={isActive('/about')}>About</Link>
          <Link to="/contact" className={isActive('/contact')}>Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <div className="relative cursor-pointer" onClick={onOpenCart}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600 hover:text-manolya-purple transition">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.119-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-manolya-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </div>
          {/* Login Button */}
          <Link to="/login" className="bg-manolya-purple text-white px-5 py-2 rounded-md hover:bg-purple-700 transition ml-2">
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
}