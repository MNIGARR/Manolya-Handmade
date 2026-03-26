import ProductCard from '../components/ProductCard';
import { products } from '../data';
import type { Product } from '../types';
import { useState, useMemo } from 'react';

const ALL_CATEGORY = 'All';

export default function Shop({ onAddToCart }: { onAddToCart: (product: Product) => void }) {

    const categories = useMemo(
    () => [ALL_CATEGORY, ...Array.from(new Set(products.map(p => p.category)))],
    []
  );
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORY);

  const filteredProducts = selectedCategory === ALL_CATEGORY
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-manolya-purple mb-4 text-center">All Products</h1>
       <p className="text-gray-600 text-center mb-8">Browse our complete collection of handmade beaded jewelry.</p>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition border ${
              selectedCategory === category
                ? 'bg-manolya-purple text-white border-manolya-purple'
                : 'bg-white text-gray-700 border-gray-200 hover:border-manolya-purple hover:text-manolya-purple'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 py-16">No products found in this category.</p>
      )}
    </div>
  );
}