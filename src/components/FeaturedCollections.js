import React from 'react';
import { motion } from 'framer-motion';
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
  {
    id: 'hair1',
    name: 'Hair Accessories',
    image: '/images/hair1.jpg',
    description: 'Beautiful beaded hair ornaments.',
    price: 20,
  },
  {
    id: 'ankle1',
    name: 'Anklets',
    image: '/images/ankle1.jpg',
    description: 'Delicate African-inspired anklets.',
    price: 18,
  },
];

export default function FeaturedCollections() {
  const { addToWishlist } = useWishlist();

  return (
    <section id="collections" className="bg-amber-50 w-full py-12 overflow-hidden">
      <h2 className="text-4xl font-serif font-bold text-center text-amber-900 mb-10">
        Featured Collections
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex w-[200%] gap-6"
          animate={{ x: ['0%', '-50%', '0%'] }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        >
          {[...collections, ...collections].map((col, index) => (
            <div
              key={`${col.id}-${index}`}
              className="w-[33.3333vw] flex-shrink-0"
            >
              <div className="bg-white rounded-2xl shadow-xl border border-amber-200 overflow-hidden mx-2 h-full flex flex-col group">
                <img
                  src={col.image}
                  alt={col.name}
                  className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-amber-900">{col.name}</h3>
                    <p className="text-sm text-emerald-800 mt-1">{col.description}</p>
                  </div>
                  <div className="mt-3 text-emerald-700 font-semibold text-lg">${col.price}</div>
                  <div className="flex gap-3 mt-4">
                    <button
                      className="bg-emerald-600 hover:bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition"
                      onClick={() => window.location.href = `/collections/${col.id}`}
                    >
                      Shop {col.name}
                    </button>
                    <button
                      onClick={() => addToWishlist(col)}
                      className="border border-amber-400 text-amber-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-amber-100 transition flex items-center gap-1"
                    >
                      ❤️ Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
