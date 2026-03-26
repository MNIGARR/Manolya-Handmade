import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import type { Product, CartItem, User } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  // Restore logged-in user from localStorage on first render (lazy initializer avoids useEffect setState)
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('manolya_user');
    if (saved) {
      try { return JSON.parse(saved) as User; } catch { /* ignore malformed localStorage value */ }
    }
    return null;
  });

  // Add a product to the cart (or increment its quantity)
  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  // Remove an item completely from the cart
  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Increment or decrement quantity; removes item when it reaches 0
  const handleUpdateQuantity = (id: number, delta: number) => {
    setCartItems(prev =>
      prev
        .map(item => item.id === id ? { ...item, quantity: item.quantity + delta } : item)
        .filter(item => item.quantity > 0)
    );
  };

  // Empty the entire cart (called after a successful checkout)
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Called by Login and Register pages after a successful auth action
  const handleLogin = (user: User) => {
    setCurrentUser(user);
    localStorage.setItem('manolya_user', JSON.stringify(user));
  };

  // Called by the Navbar logout button
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('manolya_user');
  };

  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-[#FDF4FF]/30">
        <Navbar
          cartCount={totalCartCount}
          onOpenCart={() => setIsCartOpen(true)}
          currentUser={currentUser}
          onLogout={handleLogout}
        />

        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onRemove={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
        />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
            <Route path="/shop" element={<Shop onAddToCart={handleAddToCart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register onLogin={handleLogin} />} />
            <Route path="/checkout" element={<Checkout cartItems={cartItems} onClearCart={handleClearCart} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}