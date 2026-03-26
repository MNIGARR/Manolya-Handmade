import type { Product } from '../types';

interface Props {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group flex flex-col hover:shadow-md transition">
      <div className="overflow-hidden">
        <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-manolya-purple mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-6 flex-grow">{product.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <button 
            onClick={() => onAddToCart(product)}
            className="bg-manolya-purple text-white px-4 py-2 rounded-md hover:bg-purple-700 transition shadow-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}