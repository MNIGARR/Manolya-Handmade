import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data';
import type { Product } from '../types';
import fullImage from '../assets/full.avif';

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
            <Link to="/shop" className="bg-manolya-purple text-white px-8 py-3 rounded-md hover:bg-purple-700 transition">
              Shop Collection
            </Link>
            <Link to="/about" className="bg-white text-manolya-purple px-8 py-3 rounded-md border border-gray-200 hover:border-gray-300 transition">
              Our Story
            </Link>
          </div>
        </div>

         <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 max-w-md mx-auto w-full">
          <img
            src={fullImage}
            alt="Manolya Handmade Collection"
            className="w-full h-auto object-cover"
          />
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
          <Link to="/shop" className="bg-manolya-purple text-white px-8 py-3 rounded-md hover:bg-purple-700 transition">
            View All Products
          </Link>
        </div>
      </section>
    </div>
  );
}