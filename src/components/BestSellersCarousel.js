import React, { useState } from 'react';
import { useWishlist } from './CartContext';

const bestSellers = [
  {
    id: 1,
    name: 'Maasai Beaded Necklace',
    image: '/images/neck2.jpg',
    price: 45,
    description: 'Handcrafted with vibrant Maasai beads.',
  },
  {
    id: 2,
    name: 'Cowrie Shell Earrings',
    image: '/images/ear3.jpg',
    price: 30,
    description: 'Symbolic cowrie shells, a mark of African heritage.',
  },
  {
    id: 3,
    name: 'Bridal Set',
    image: '/images/brace3.jpg',
    price: 120,
    description: 'Elegant set for special occasions.',
  },
  {
    id: 4,
    name: 'Gold Waist Beads',
    image: '/images/comb2.jpg',
    price: 25,
    description: 'Traditional waist beads with gold accents.',
  },
  {
    id: 5,
    name: 'Ivory Pendant',
    image: '/images/afgo2.jpg',
    price: 60,
    description: 'Classic pendant with ivory tones.',
  },
  {
    id: 6,
    name: 'Ankara Print Bracelet',
    image: '/images/ank3.jpg',
    price: 20,
    description: 'Colorful bracelet with Ankara print.',
  },
  {
    id: 7,
    name: 'Terracotta Choker',
    image: '/images/neck4.jpg',
    price: 35,
    description: 'Earthy terracotta choker necklace.',
  },
  {
    id: 8,
    name: 'Adinkra Symbol Ring',
    image: '/images/brace5.jpg',
    price: 28,
    description: 'Ring featuring traditional Adinkra symbols.',
  },
];

export default function BestSellersCarousel() {
  const [start, setStart] = useState(0);
  const visible = 4;
  const total = bestSellers.length;
  const { addToWishlist } = useWishlist();

  const next = () => setStart((s) => (s + visible) % total);
  const prev = () => setStart((s) => (s - visible + total) % total);

  const displayed = [
    ...bestSellers.slice(start, start + visible),
    ...(start + visible > total ? bestSellers.slice(0, (start + visible) % total) : []),
  ];

  return (
    <section className="py-16 bg-amber-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-8 text-center">Best Sellers</h2>
        <div className="relative">
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 bg-amber-600 text-white rounded-full p-2 shadow hover:bg-emerald-600 z-10"><span className="text-2xl">&#8249;</span></button>
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory justify-center">
            {displayed.map((item) => (
              <div key={item.id} className="min-w-[260px] max-w-xs bg-white rounded-2xl shadow-lg flex-shrink-0 snap-center border-2 border-amber-200 hover:border-emerald-400 transition-all duration-300 group relative overflow-hidden flex flex-col">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300" />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-amber-900 mb-1">{item.name}</h3>
                    <p className="text-sm text-emerald-900 mb-2">{item.description}</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-bold text-emerald-700">${item.price}</span>
                    <div className="flex gap-2">
                      <button className="bg-amber-500 hover:bg-amber-600 text-white rounded-full p-2 shadow transition-colors" title="Quick View">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      </button>
                      <button onClick={() => addToWishlist(item)} className="bg-white border border-amber-300 text-amber-900 rounded-full p-2 shadow hover:bg-amber-100 transition-colors" title="Add to Wishlist">
                        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.682l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>
                      </button>
                      <button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-2 shadow transition-colors" title="Add to Wishlist">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.682l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>
                      </button>
                      <button className="bg-amber-700 hover:bg-amber-800 text-white rounded-full p-2 shadow transition-colors" title="Add to Cart">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 007.5 19h9a2 2 0 001.85-1.3L21 13M7 13V6a1 1 0 011-1h9a1 1 0 011 1v7" /></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 bg-amber-600 text-white rounded-full p-2 shadow hover:bg-emerald-600 z-10"><span className="text-2xl">&#8250;</span></button>
        </div>
      </div>
    </section>
  );
} 