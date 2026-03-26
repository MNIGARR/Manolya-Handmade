import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { CartItem } from '../types';

interface Props {
  cartItems: CartItem[];
  onClearCart: () => void;
}

type Step = 'shipping' | 'payment' | 'success';

const FREE_SHIPPING_THRESHOLD = 50;
const STANDARD_SHIPPING_COST = 5.99;
const CARD_NUMBER_MAX_DIGITS = 16;
const CARD_NUMBER_MAX_LENGTH_FORMATTED = 19; // 16 digits + 3 spaces
const EXPIRY_DATE_MAX_LENGTH = 5; // MM/YY
const CVV_MAX_LENGTH = 4;

export default function Checkout({ cartItems, onClearCart }: Props) {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>('shipping');

  const [shipping, setShipping] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', postalCode: '', country: '',
  });

  const [payment, setPayment] = useState({
    cardName: '', cardNumber: '', expiry: '', cvv: '',
  });

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = subtotal > FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_COST;
  const total = subtotal + shippingCost;

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClearCart();
    setStep('success');
  };

  // Redirect to shop if cart is empty and we are NOT on the success screen
  if (cartItems.length === 0 && step !== 'success') {
    return (
      <div className="container mx-auto px-6 py-24 text-center max-w-md">
        <div className="text-6xl mb-6">🛒</div>
        <h2 className="text-2xl font-bold text-manolya-purple mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Add some products before checking out.</p>
        <Link to="/shop" className="bg-manolya-purple text-white px-8 py-3 rounded-md hover:bg-purple-700 transition">
          Go to Shop
        </Link>
      </div>
    );
  }

  /* ── SUCCESS SCREEN ─────────────────────────────────────────── */
  if (step === 'success') {
    return (
      <div className="container mx-auto px-6 py-24 flex flex-col items-center text-center max-w-lg">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-manolya-purple mb-4">Order Placed! 🎉</h1>
        <p className="text-gray-600 mb-2">Thank you for your purchase, <strong>{shipping.firstName}</strong>!</p>
        <p className="text-gray-500 text-sm mb-8">
          A confirmation will be sent to <strong>{shipping.email}</strong>. Your handmade items are on their way!
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button onClick={() => navigate('/shop')} className="bg-manolya-purple text-white px-8 py-3 rounded-md hover:bg-purple-700 transition">
            Continue Shopping
          </button>
          <button onClick={() => navigate('/')} className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md hover:border-gray-400 transition">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12 max-w-6xl">
      <h1 className="text-3xl font-bold text-manolya-purple mb-8">Checkout</h1>

      {/* Step indicator */}
      <div className="flex items-center gap-4 mb-10">
        {(['shipping', 'payment'] as const).map((s, idx) => (
          <div key={s} className="flex items-center gap-2">
            {idx > 0 && <div className={`h-px w-12 ${step === 'payment' ? 'bg-manolya-purple' : 'bg-gray-200'}`} />}
            <div className={`flex items-center gap-2 text-sm font-medium ${step === s ? 'text-manolya-purple' : 'text-gray-400'}`}>
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step === s ? 'bg-manolya-purple text-white' : (step === 'payment' && s === 'shipping' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500')}`}>
                {step === 'payment' && s === 'shipping' ? '✓' : idx + 1}
              </span>
              <span className="hidden sm:inline capitalize">{s}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-10 items-start">

        {/* ── LEFT: Form ─────────────────────────────────────────────── */}
        <div className="lg:col-span-2">

          {/* Shipping Form */}
          {step === 'shipping' && (
            <form onSubmit={handleShippingSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 flex flex-col gap-5">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Shipping Information</h2>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" required value={shipping.firstName} onChange={e => setShipping(s => ({ ...s, firstName: e.target.value }))} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-manolya-purple outline-none" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" required value={shipping.lastName} onChange={e => setShipping(s => ({ ...s, lastName: e.target.value }))} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-manolya-purple outline-none" placeholder="Doe" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" required value={shipping.email} onChange={e => setShipping(s => ({ ...s, email: e.target.value }))} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-manolya-purple outline-none" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" value={shipping.phone} onChange={e => setShipping(s => ({ ...s, phone: e.target.value }))} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-manolya-purple outline-none" placeholder="+1 555 000 0000" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                <input type="text" required value={shipping.address} onChange={e => setShipping(s => ({ ...s, address: e.target.value }))} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-manolya-purple outline-none" placeholder="123 Main Street, Apt 4B" />
              </div>

              <div className="grid sm:grid-cols-3 gap-5">
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                  <input type="text" required value={shipping.postalCode} onChange={e => setShipping(s => ({ ...s, postalCode: e.target.value }))} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-manolya-purple outline-none" placeholder="10001" />
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input type="text" required value={shipping.city} onChange={e => setShipping(s => ({ ...s, city: e.target.value }))} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-manolya-purple outline-none" placeholder="New York" />
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                  <input type="text" required value={shipping.country} onChange={e => setShipping(s => ({ ...s, country: e.target.value }))} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-manolya-purple outline-none" placeholder="United States" />
                </div>
              </div>

              <button type="submit" className="bg-manolya-purple text-white py-3 rounded-md hover:bg-purple-700 transition font-medium mt-2">
                Continue to Payment →
              </button>
            </form>
          )}

          {/* Payment Form */}
          {step === 'payment' && (
            <form onSubmit={handlePaymentSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 flex flex-col gap-5">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Payment Details</h2>
              <p className="text-xs text-gray-400 -mt-3">This is a demo store — no real payment is processed.</p>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
                <input type="text" required value={payment.cardName} onChange={e => setPayment(p => ({ ...p, cardName: e.target.value }))} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-manolya-purple outline-none" placeholder="Jane Doe" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                <input
                  type="text"
                  required
                  maxLength={CARD_NUMBER_MAX_LENGTH_FORMATTED}
                  value={payment.cardNumber}
                  onChange={e => {
                    const digits = e.target.value.replace(/\D/g, '').slice(0, CARD_NUMBER_MAX_DIGITS);
                    const formatted = digits.replace(/(.{4})/g, '$1 ').trim();
                    setPayment(p => ({ ...p, cardNumber: formatted }));
                  }}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-manolya-purple outline-none font-mono tracking-widest"
                  placeholder="1234 5678 9012 3456"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                  <input
                    type="text"
                    required
                    maxLength={EXPIRY_DATE_MAX_LENGTH}
                    value={payment.expiry}
                    onChange={e => {
                      const val = e.target.value.replace(/[^0-9/]/g, '');
                      setPayment(p => ({ ...p, expiry: val }));
                    }}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-manolya-purple outline-none"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                  <input
                    type="text"
                    required
                    maxLength={CVV_MAX_LENGTH}
                    value={payment.cvv}
                    onChange={e => setPayment(p => ({ ...p, cvv: e.target.value.replace(/\D/g, '').slice(0, CVV_MAX_LENGTH) }))}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-manolya-purple outline-none"
                    placeholder="123"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <button type="button" onClick={() => setStep('shipping')} className="order-2 sm:order-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-md hover:border-gray-400 transition font-medium">
                  ← Back
                </button>
                <button type="submit" className="order-1 sm:order-2 flex-1 bg-manolya-purple text-white py-3 rounded-md hover:bg-purple-700 transition font-medium">
                  Place Order · ${total.toFixed(2)}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* ── RIGHT: Order Summary ──────────────────────────────────── */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
          <h2 className="text-lg font-bold text-gray-900 mb-5">Order Summary</h2>

          <div className="flex flex-col gap-4 mb-5">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center gap-3">
                <div className="relative flex-shrink-0">
                  <img src={item.imageUrl} alt={item.name} className="w-14 h-14 object-cover rounded-md" />
                  <span className="absolute -top-1.5 -right-1.5 bg-manolya-purple text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex-grow min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">{item.name}</p>
                  <p className="text-xs text-gray-500">${item.price.toFixed(2)} each</p>
                </div>
                <span className="text-sm font-semibold text-gray-800 flex-shrink-0">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-4 flex flex-col gap-2 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>{shippingCost === 0 ? <span className="text-green-600 font-medium">Free</span> : `$${shippingCost.toFixed(2)}`}</span>
            </div>
            {shippingCost > 0 && (
              <p className="text-xs text-gray-400">Free shipping on orders over ${FREE_SHIPPING_THRESHOLD}</p>
            )}
            <div className="flex justify-between font-bold text-base text-gray-900 border-t border-gray-100 pt-3 mt-1">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
