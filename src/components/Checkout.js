import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

const paymentMethods = [
  { label: 'M-Pesa', value: 'mpesa' },
  { label: 'PayPal', value: 'paypal' },
  { label: 'Visa', value: 'visa' },
  { label: 'MasterCard', value: 'mastercard' },
];

export default function Checkout() {
  const { cart } = useContext(CartContext);
  const [selected, setSelected] = useState(paymentMethods[0].value);
  const [complete, setComplete] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = (e) => {
    e.preventDefault();
    setComplete(true);
  };

  if (complete) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center bg-emerald-50 rounded-xl shadow mt-12">
        <h2 className="text-3xl font-serif font-bold text-emerald-900 mb-4">Thank you for your purchase!</h2>
        <p className="text-amber-900 mb-4">Your order has been received and is being processed. You will receive a confirmation email soon.</p>
        <div className="text-emerald-700 font-semibold">Total Paid: <span className="text-amber-900">${total.toFixed(2)}</span></div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-serif font-bold text-amber-900 mb-6">Checkout</h2>
      {cart.length === 0 ? (
        <div className="bg-amber-50 text-emerald-900 rounded-lg px-6 py-8 text-center shadow">Your cart is empty.</div>
      ) : (
        <form onSubmit={handleCheckout} className="flex flex-col gap-6 bg-white rounded-xl shadow p-8 border border-amber-100">
          <div className="flex flex-col gap-4">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4 items-center border-b border-amber-100 pb-4">
                <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-lg border-2 border-amber-200" />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-emerald-900">{item.name}</h3>
                  <p className="text-amber-900">${item.price} x {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-2">
            <h3 className="text-xl font-bold text-emerald-900">Total:</h3>
            <span className="text-2xl font-bold text-amber-900">${total.toFixed(2)}</span>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-emerald-900 font-semibold mb-1">Payment Method</label>
            <select
              value={selected}
              onChange={e => setSelected(e.target.value)}
              className="px-4 py-3 rounded-full border-2 border-amber-200 focus:border-emerald-400 focus:outline-none text-amber-900 bg-amber-50"
            >
              {paymentMethods.map((m) => (
                <option key={m.value} value={m.value}>{m.label}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="bg-emerald-600 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full shadow transition-colors mt-4">Complete Purchase</button>
        </form>
      )}
    </div>
  );
}
