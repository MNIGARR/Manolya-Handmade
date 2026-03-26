import type { CartItem, User } from '../types';

interface Props {
  cartItems: CartItem[];
  currentUser: User | null;
}

export default function Checkout({ cartItems, currentUser }: Props) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 4.99 : 0;
  const total = subtotal + shipping;

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          <h1 className="text-3xl font-bold text-manolya-purple mb-2">Checkout</h1>
          <p className="text-gray-600 mb-8">Complete your details and we’ll prepare your handmade order.</p>

          <form className="grid md:grid-cols-2 gap-5">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                defaultValue={currentUser?.name || ''}
                placeholder="Jane Doe"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-manolya-purple/30 focus:border-manolya-purple outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                defaultValue={currentUser?.email || ''}
                placeholder="jane@email.com"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-manolya-purple/30 focus:border-manolya-purple outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input
                type="text"
                placeholder="Street address"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-manolya-purple/30 focus:border-manolya-purple outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input type="text" placeholder="City" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-manolya-purple/30 focus:border-manolya-purple outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
              <input type="text" placeholder="ZIP" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-manolya-purple/30 focus:border-manolya-purple outline-none" />
            </div>
            <div className="md:col-span-2">
              <button
                type="button"
                className="w-full mt-2 bg-manolya-purple text-white py-3 rounded-lg hover:bg-purple-700 transition font-semibold"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>

        <aside className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-fit">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Order Summary</h2>

          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty. Add items before checkout.</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center gap-3">
                  <img src={item.imageUrl} alt={item.name} className="w-14 h-14 object-cover rounded-md" />
                  <div className="flex-grow min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">{item.name}</p>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-semibold text-manolya-purple">${(item.quantity * item.price).toFixed(2)}</p>
                </div>
              ))}

              <div className="border-t pt-4 space-y-2 text-sm">
                <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between text-gray-600"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
                <div className="flex justify-between font-bold text-gray-900 text-base"><span>Total</span><span>${total.toFixed(2)}</span></div>
              </div>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}