import ProductCard from '../components/ProductCard';
import { products } from '../data';
import type { Product } from '../types';

export default function Shop({ onAddToCart }: { onAddToCart: (product: Product) => void }) {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-manolya-purple mb-4 text-center">All Products</h1>
      <p className="text-gray-600 text-center mb-12">Browse our complete collection of handmade beaded jewelry.</p>
      
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}