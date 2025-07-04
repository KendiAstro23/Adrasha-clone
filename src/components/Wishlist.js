import React from 'react';
import { useWishlist, useCart } from './CartContext';

export function WishlistModal({ open, onClose }) {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-amber-900 hover:text-emerald-600 text-2xl">&times;</button>
        <h2 className="text-2xl font-serif font-bold text-amber-900 mb-4">Your Wishlist</h2>
        {wishlist.length === 0 ? (
          <div className="text-emerald-900">Your wishlist is empty.</div>
        ) : (
          <div className="flex flex-col gap-4">
            {wishlist.map((item) => (
              <div key={item.id} className="flex gap-4 items-center border-b border-amber-100 pb-2">
                <img src={item.imageUrl || item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg border-2 border-amber-200" />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-emerald-900">{item.name}</h3>
                  <p className="text-amber-900">${item.price}</p>
                </div>
                <button onClick={() => addToCart(item)} className="bg-emerald-600 hover:bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold mr-2">Add to Cart</button>
                <button onClick={() => removeFromWishlist(item.id)} className="bg-amber-600 hover:bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold">Remove</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-serif font-bold text-amber-900 mb-6">Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <div className="bg-amber-50 text-emerald-900 rounded-lg px-6 py-8 text-center shadow">Your wishlist is empty.</div>
      ) : (
        <div className="flex flex-col gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="flex gap-4 items-center bg-white rounded-xl shadow p-4 border border-amber-100">
              <img src={item.imageUrl || item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg border-2 border-amber-200" />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-emerald-900">{item.name}</h3>
                <p className="text-amber-900">${item.price}</p>
              </div>
              <button onClick={() => addToCart(item)} className="bg-emerald-600 hover:bg-amber-600 text-white px-4 py-2 rounded-full font-semibold mr-2">Add to Cart</button>
              <button onClick={() => removeFromWishlist(item.id)} className="bg-amber-600 hover:bg-emerald-600 text-white px-4 py-2 rounded-full font-semibold">Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 