import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-serif font-bold text-amber-900 mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="bg-amber-50 text-emerald-900 rounded-lg px-6 py-8 text-center shadow">Your cart is empty.</div>
      ) : (
        <div className="flex flex-col gap-6">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4 items-center bg-white rounded-xl shadow p-4 border border-amber-100">
              <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-lg border-2 border-amber-200" />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-emerald-900">{item.name}</h3>
                <p className="text-amber-900">${item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <label htmlFor={`qty-${item.id}`} className="text-xs text-emerald-700">Qty:</label>
                  <input
                    id={`qty-${item.id}`}
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                    className="w-16 px-2 py-1 rounded border border-amber-200 focus:border-emerald-400 focus:outline-none text-amber-900 bg-amber-50"
                  />
                  <button onClick={() => removeFromCart(item.id)} className="ml-4 bg-amber-600 hover:bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold">Remove</button>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center mt-6 bg-amber-100 rounded-lg px-6 py-4 shadow">
            <h3 className="text-xl font-bold text-emerald-900">Total:</h3>
            <span className="text-2xl font-bold text-amber-900">${total.toFixed(2)}</span>
          </div>
          <div className="flex gap-4 justify-end mt-4">
            <button onClick={() => navigate('/')} className="bg-white border border-amber-300 text-amber-900 px-6 py-2 rounded-full font-semibold hover:bg-amber-50">Continue Shopping</button>
            <button onClick={() => navigate('/checkout')} className="bg-emerald-600 hover:bg-amber-600 text-white px-8 py-2 rounded-full font-semibold shadow">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}
