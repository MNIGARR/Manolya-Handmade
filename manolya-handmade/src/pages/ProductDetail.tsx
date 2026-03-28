import { useParams, Link } from 'react-router-dom';
import { products } from '../data';
import type { Product } from '../types';

interface Props {
  onAddToCart: (product: Product) => void;
  favouriteIds: number[];
  onToggleFavourite: (id: number) => void;
}

const HeartIcon = ({ filled }: { filled: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={filled ? 'currentColor' : 'none'}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    />
  </svg>
);

export default function ProductDetail({ onAddToCart, favouriteIds, onToggleFavourite }: Props) {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-4">Product not found</h1>
        <Link to="/shop" className="text-manolya-purple hover:underline font-medium">
          ← Back to Shop
        </Link>
      </div>
    );
  }

  const isFavourite = favouriteIds.includes(product.id);

  return (
    <section className="container mx-auto px-6 py-12">
      {/* Back link */}
      <Link
        to="/shop"
        className="inline-flex items-center gap-2 text-manolya-purple hover:underline font-medium mb-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        Back to Shop
      </Link>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Product Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <span className="inline-block text-sm font-semibold text-manolya-purple bg-[#F8E6EE] px-3 py-1 rounded-full w-fit mb-4">
            {product.category}
          </span>

          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{product.name}</h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">{product.description}</p>

          <p className="text-4xl font-black text-manolya-purple mb-8">${product.price.toFixed(2)}</p>

          <div className="flex gap-3">
            <button
              onClick={() => onAddToCart(product)}
              className="flex-1 bg-manolya-purple text-white py-3.5 px-6 rounded-xl hover:bg-manolya-purple-dark transition font-semibold text-lg shadow-sm"
            >
              Add to Cart
            </button>
            <button
              onClick={() => onToggleFavourite(product.id)}
              className={`w-14 h-14 flex items-center justify-center rounded-xl border-2 transition ${
                isFavourite
                  ? 'border-manolya-purple bg-[#F8E6EE] text-manolya-purple'
                  : 'border-gray-200 text-gray-400 hover:border-manolya-purple hover:text-manolya-purple'
              }`}
              aria-label={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
            >
              <HeartIcon filled={isFavourite} />
            </button>
          </div>

          {/* Product highlights */}
          <div className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <span className="text-2xl">✋</span>
              <span>Handcrafted with love</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <span className="text-2xl">🚚</span>
              <span>Ships worldwide</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <span className="text-2xl">🎁</span>
              <span>Gift-ready packaging</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <span className="text-2xl">✨</span>
              <span>One-of-a-kind piece</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}