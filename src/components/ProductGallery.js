// src/components/ProductGallery.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from './CartContext';

const allProducts = [
  {
    id: 1,
    name: 'Elegant Necklace',
    description: 'A stunning necklace for every occasion.',
    image: '/images/neck1.jpg',
    link: '/products/necklaces',
    material: 'Gold',
    collection: 'Necklaces',
    price: 200,
  },
  {
    id: 2,
    name: 'Gold Earrings',
    description: 'Elegant gold earrings with a modern touch.',
    image: '/images/ear1.jpg',
    link: '/products/earrings',
    material: 'Gold',
    collection: 'Earrings',
    price: 150,
  },
  {
    id: 3,
    name: 'Silver Bracelet',
    description: 'A timeless silver bracelet.',
    image: '/images/comb1.jpg',
    link: '/products/bracelets',
    material: 'Silver',
    collection: 'Bracelets',
    price: 100,
  },
  {
    id: 4,
    name: 'Diamond Ring',
    description: 'A sparkling diamond ring for special moments.',
    image: '/images/brace1.jpg',
    link: '/products/rings',
    material: 'Diamond',
    collection: 'Rings',
    price: 500,
  },
  {
    id: 5,
    name: 'Pearl Necklace',
    description: 'Classic pearl necklace with elegance.',
    image: '/images/afgo1.jpg',
    link: '/products/necklaces',
    material: 'Pearl',
    collection: 'Necklaces',
    price: 180,
  },
  {
    id: 6,
    name: 'Silver Earrings',
    description: 'Chic silver earrings for everyday wear.',
    image: '/images/ank1.jpg',
    link: '/products/earrings',
    material: 'Silver',
    collection: 'Earrings',
    price: 120,
  },
];

const materials = ['All', ...Array.from(new Set(allProducts.map(p => p.material)))];
const collections = ['All', ...Array.from(new Set(allProducts.map(p => p.collection)))];
const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: 'Under $150', min: 0, max: 150 },
  { label: '$150 - $300', min: 150, max: 300 },
  { label: 'Above $300', min: 300, max: Infinity },
];

const ProductGallery = () => {
  const { addToWishlist } = useWishlist();
  const [material, setMaterial] = useState('All');
  const [collection, setCollection] = useState('All');
  const [price, setPrice] = useState('All');

  const filtered = allProducts.filter(p =>
    (material === 'All' || p.material === material) &&
    (collection === 'All' || p.collection === collection) &&
    (() => {
      const range = priceRanges.find(r => r.label === price) || priceRanges[0];
      return p.price >= range.min && p.price < range.max;
    })()
  );

  return (
    <section className="py-12 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-8 text-center">Shop All Products</h1>
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center items-center bg-white rounded-xl shadow p-4 border border-amber-100">
          <div>
            <label className="block text-xs text-emerald-900 font-semibold mb-1">Material</label>
            <select value={material} onChange={e => setMaterial(e.target.value)} className="px-4 py-2 rounded-full border-2 border-amber-200 focus:border-emerald-400 focus:outline-none text-amber-900 bg-amber-50">
              {materials.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs text-emerald-900 font-semibold mb-1">Collection</label>
            <select value={collection} onChange={e => setCollection(e.target.value)} className="px-4 py-2 rounded-full border-2 border-amber-200 focus:border-emerald-400 focus:outline-none text-amber-900 bg-amber-50">
              {collections.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs text-emerald-900 font-semibold mb-1">Price</label>
            <select value={price} onChange={e => setPrice(e.target.value)} className="px-4 py-2 rounded-full border-2 border-amber-200 focus:border-emerald-400 focus:outline-none text-amber-900 bg-amber-50">
              {priceRanges.map(r => <option key={r.label} value={r.label}>{r.label}</option>)}
            </select>
          </div>
        </div>
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filtered.map(product => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg border-2 border-amber-100 hover:border-emerald-400 transition-all duration-300 group relative overflow-hidden flex flex-col">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300" />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-serif font-bold text-amber-900 mb-1">{product.name}</h2>
                  <p className="text-sm text-emerald-900 mb-2">{product.description}</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg font-bold text-emerald-700">${product.price}</span>
                  <div className="flex gap-2">
                    <Link to={`/products/${product.id}`} className="bg-emerald-600 hover:bg-amber-600 text-white rounded-full px-4 py-2 font-semibold shadow transition-colors">View</Link>
                    <button onClick={() => addToWishlist(product)} className="bg-white border border-amber-300 text-amber-900 rounded-full px-4 py-2 font-semibold shadow hover:bg-amber-100 transition-colors flex items-center gap-1" title="Add to Wishlist">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.682l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>
                      Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
