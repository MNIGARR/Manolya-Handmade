import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data';
import type { Product } from '../types';

interface Props {
  favouriteIds: number[];
  onToggleFavourite: (id: number) => void;
  onAddToCart: (product: Product) => void;
}

export default function Favourites({ favouriteIds, onToggleFavourite, onAddToCart }: Props) {
  const favouriteProducts = products.filter(p => favouriteIds.includes(p.id));

  return (
    <section className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-manolya-purple mb-2">My Favourites</h1>
      <p className="text-gray-600 mb-10">Your handpicked collection of beloved pieces.</p>

      {favouriteProducts.length === 0 ? (
        <div className="text-center py-24">
          <div className="text-7xl mb-6">🤍</div>
          <h2 className="text-2xl font-bold text-gray-700 mb-3">No favourites yet</h2>
          <p className="text-gray-500 mb-8">Browse our shop and tap the heart on pieces you love!</p>
          <Link
            to="/shop"
            className="inline-block bg-manolya-purple text-white px-8 py-3 rounded-xl hover:bg-manolya-purple-dark transition font-semibold shadow-sm"
          >
            Browse Shop
          </Link>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favouriteProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              isFavourite={true}
              onToggleFavourite={onToggleFavourite}
            />
          ))}
        </div>
      )}
    </section>
  );
}