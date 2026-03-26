import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data';
import type { Product } from '../types';

export default function Home({ onAddToCart }: { onAddToCart: (product: Product) => void }) {
  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-purple-100 text-manolya-purple px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span>✨</span> Handcrafted with Love
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-manolya-purple leading-tight mb-6">
            Unique Beaded Jewelry for Your Style
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-lg">
            Each piece is lovingly handmade with premium beads and materials. Discover one-of-a-kind accessories that express your personality.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/shop" className="bg-manolya-purple text-white px-8 py-3 rounded-md hover:bg-purple-700 transition">Shop Collection</Link>
            <Link to="/about" className="bg-white text-manolya-purple px-8 py-3 rounded-md border border-gray-200 hover:border-gray-300 transition">Our Story</Link>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-md mx-auto w-full">
          <div className="text-center mb-6">
            <img src="https://via.placeholder.com/80" alt="Instagram Profile" className="rounded-full mx-auto mb-4 border-2 border-manolya-purple p-0.5" />
            <h2 className="font-bold text-lg">manolya_handmade_</h2>
            <p className="text-gray-500 text-sm">@manolya_handmade_</p>
          </div>
          <button className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold mb-6 hover:bg-gray-200 transition">Message</button>
          <p className="text-sm text-gray-700 leading-relaxed text-center">
            ✨Sevinci almaq olmur amma aksesuar alaraq<br />ozunu sevindire bilersen✨
          </p>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-manolya-purple mb-4">Featured Collection</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {products.slice(0, 3).map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
        <div className="text-center">
          <Link to="/shop" className="bg-manolya-purple text-white px-8 py-3 rounded-md hover:bg-purple-700 transition">View All Products</Link>
        </div>
      </section>
    </div>
  );
}