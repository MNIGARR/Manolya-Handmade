import { Link } from 'react-router-dom';
import type { Product } from '../types';

interface Props {
  product: Product;
  onAddToCart: (product: Product) => void;
  isFavourite?: boolean;
  onToggleFavourite?: (id: number) => void;
}

const HeartIcon = ({ filled }: { filled: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={filled ? 'currentColor' : 'none'}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    />
  </svg>
);

export default function ProductCard({ product, onAddToCart, isFavourite = false, onToggleFavourite }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group flex flex-col hover:shadow-md transition">
      <div className="overflow-hidden relative">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
        {onToggleFavourite && (
          <button
            onClick={() => onToggleFavourite(product.id)}
            className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition ${
              isFavourite
                ? 'bg-manolya-purple text-white'
                : 'bg-white text-gray-400 hover:text-manolya-purple'
            }`}
            aria-label={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
          >
            <HeartIcon filled={isFavourite} />
          </button>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-lg font-semibold text-manolya-purple mb-2 hover:underline">{product.name}</h3>
        </Link>
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