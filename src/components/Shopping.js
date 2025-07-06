// src/ShoppingPage.jsx
import React, { useEffect, useState } from 'react';
import sanityClient from '../sanityClient';
import { useCart, useWishlist } from './CartContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ShoppingPage = () => {
  const [items, setItems] = useState([]);
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "jewelry"]{
        _id,
        name,
        description,
        price,
        category,
        featured,
        onSale,
        "imageUrl": images[0].asset->url
      }`)
      .then((data) => setItems(data))
      .catch(console.error);
  }, []);

  const handleProtectedAction = (action, item) => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      action(item);
    }
  };

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-10 text-center text-amber-900">All Products</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(item => (
            <div key={item._id} className="bg-amber-50 shadow rounded-2xl overflow-hidden p-4 flex flex-col items-center">
              <img src={item.imageUrl} alt={item.name} className="h-64 w-full object-cover rounded-lg" />
              <h2 className="mt-4 text-xl font-serif font-bold text-amber-800">{item.name}</h2>
              <p className="text-emerald-900 text-sm my-2">{item.description}</p>
              <div className="flex gap-4 mt-auto">
                <button
                  onClick={() => handleProtectedAction(addToCart, item)}
                  className="px-4 py-2 bg-emerald-600 text-white rounded-full font-semibold hover:bg-amber-600"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleProtectedAction(addToWishlist, item)}
                  className="px-4 py-2 bg-white border border-amber-300 text-amber-900 rounded-full font-semibold hover:bg-amber-100"
                >
                  Save
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShoppingPage;
