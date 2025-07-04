import React from 'react';
import { useWishlist } from './CartContext';

const collections = [
  {
    id: 'neck1',
    name: 'Beaded Necklaces',
    image: '/images/neck1.jpg',
    description: 'Handcrafted Maasai beadwork in vibrant colors.',
    price: 45,
  },
  {
    id: 'ear1',
    name: 'Cowrie Shell Earrings',
    image: '/images/ear1.jpg',
    description: 'Symbolic cowrie shells, a mark of African heritage.',
    price: 30,
  },
  {
    id: 'brace1',
    name: 'Bridal Sets',
    image: '/images/brace1.jpg',
    description: 'Elegant sets for special occasions and weddings.',
    price: 120,
  },
  {
    id: 'comb1',
    name: 'Waist Beads',
    image: '/images/comb1.jpg',
    description: 'Traditional waist beads with cultural meaning.',
    price: 25,
  },
];

export default function FeaturedCollections() {
  const { addToWishlist } = useWishlist();
  return (
    <section id="collections" className="py-12 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-8 text-center">Featured Collections</h2>
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          {collections.map((col, idx) => (
            <div
              key={col.name}
              className="min-w-[260px] max-w-xs bg-white rounded-2xl shadow-lg flex-shrink-0 snap-center border-2 border-amber-100 hover:border-emerald-400 transition-all duration-300 group relative overflow-hidden"
            >
              <img
                src={col.image}
                alt={col.name}
                className="w-full h-48 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
              />
              {/* African motif overlay */}
              <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-r from-amber-200/80 to-emerald-100/60 z-10" style={{clipPath:'polygon(0 0,100% 0,100% 100%,0 70%)'}} />
              <div className="p-4 relative z-20 flex flex-col gap-2">
                <h3 className="text-xl font-serif font-bold text-amber-900 mb-1">{col.name}</h3>
                <p className="text-sm text-emerald-900 mb-2">{col.description}</p>
                <span className="text-lg font-bold text-emerald-700">${col.price}</span>
                <div className="flex gap-2 mt-2">
                  <button className="bg-emerald-600 text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-amber-600 transition-colors">Shop {col.name}</button>
                  <button onClick={() => addToWishlist(col)} className="bg-white border border-amber-300 text-amber-900 px-4 py-2 rounded-full font-semibold shadow hover:bg-amber-100 transition-colors flex items-center gap-1" title="Add to Wishlist">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.682l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>
                    Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 