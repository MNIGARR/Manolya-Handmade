import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import type { User } from '../types';
import logoImage from '../assets/manolya-horizontal-logo.png';

interface Props {
  cartCount: number;
  onOpenCart: () => void;
  currentUser: User | null;
  onLogout: () => void;
}

const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600 hover:text-manolya-purple transition">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.119-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
  </svg>
);

export default function Navbar({ cartCount, onOpenCart, currentUser, onLogout }: Props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) =>
    location.pathname === path ? 'text-manolya-purple font-bold' : 'hover:text-manolya-purple transition';

  const handleLogout = () => {
    onLogout();
    navigate('/');
    setMenuOpen(false);
  };

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img src={logoImage} alt="Manolya Handmade logo" className="h-9 w-auto max-w-[150px] object-contain" />
        </Link>
        

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-gray-700">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/shop" className={isActive('/shop')}>Shop</Link>
          <Link to="/about" className={isActive('/about')}>About</Link>
          <Link to="/contact" className={isActive('/contact')}>Contact</Link>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-4">
          {/* Cart Icon */}
          <button
            type="button"
            className="relative cursor-pointer"
            onClick={onOpenCart}
            aria-label="Open cart"
          >
            <CartIcon />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-manolya-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>

          {/* Auth: show name + logout if logged in, else Sign In link */}
          {currentUser ? (
            <div className="flex items-center gap-3 ml-2">
              <span className="text-manolya-purple font-semibold">
                Hi, {currentUser.name.split(' ')[0]}
              </span>
              <button
                onClick={handleLogout}
                className="border border-manolya-purple text-manolya-purple px-4 py-2 rounded-md hover:bg-manolya-purple hover:text-white transition text-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="bg-manolya-purple text-white px-5 py-2 rounded-md hover:bg-purple-700 transition ml-2">
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile: Cart + Hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            className="relative cursor-pointer"
            onClick={onOpenCart}
            aria-label="Open cart"
          >
            <CartIcon />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-manolya-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-4 flex flex-col gap-1 text-gray-700">
          <Link to="/" className={`py-2.5 border-b border-gray-50 ${isActive('/')}`} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/shop" className={`py-2.5 border-b border-gray-50 ${isActive('/shop')}`} onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link to="/about" className={`py-2.5 border-b border-gray-50 ${isActive('/about')}`} onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className={`py-2.5 border-b border-gray-50 ${isActive('/contact')}`} onClick={() => setMenuOpen(false)}>Contact</Link>
          <div className="pt-3">
            {currentUser ? (
              <div className="flex items-center justify-between">
                <span className="text-manolya-purple font-semibold">Hi, {currentUser.name.split(' ')[0]}</span>
                <button onClick={handleLogout} className="border border-manolya-purple text-manolya-purple px-4 py-2 rounded-md hover:bg-manolya-purple hover:text-white transition text-sm">
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="block bg-manolya-purple text-white px-5 py-2.5 rounded-md hover:bg-purple-700 transition text-center font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}