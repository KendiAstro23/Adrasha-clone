import React, { useState } from 'react';
import { useWishlist, useCart } from './CartContext';
import { Link } from 'react-router-dom';

const allItems = [
  {
    id: 'ear1',
    category: 'earrings',
    name: 'Cowrie Shell Earrings',
    image: '/images/ear1.jpg',
    description: 'Cowries in elegant gold-plated hoops.',
    motif: '/images/ear4.jpg',
  },
  {
    id: 'ear2',
    category: 'earrings',
    name: 'Tribal Drop Earrings',
    image: '/images/ear2.jpg',
    description: 'Hand-beaded with Ndebele patterns.',
    motif: '/images/ear4.jpg',
  },
  {
    id: 'ear3',
    category: 'earrings',
    name: 'Circle Cowries',
    image: '/images/ear3.jpg',
    description: 'Inspired by coastal Swahili jewelry.',
    motif: '/images/ear4.jpg',
  },
  {
    id: 'neck1',
    category: 'necklaces',
    name: 'Beaded Choker',
    image: '/images/neck1.jpg',
    description: 'Bold Maasai red bead choker.',
    motif: '/images/comb4.jpg',
  },
  {
    id: 'neck2',
    category: 'necklaces',
    name: 'Zulu Rainbow',
    image: '/images/neck2.jpg',
    description: 'Multicolor Zulu-style necklace.',
    motif: '/images/comb4.jpg',
  },
  {
    id: 'waist1',
    category: 'waistbeads',
    name: 'Golden Waist Beads',
    image: '/images/comb1.jpg',
    description: 'Delicate and symbolic.',
    motif: '/images/afgo4.jpg',
  },
  {
    id: 'waist2',
    category: 'waistbeads',
    name: 'Ceremonial Beads',
    image: '/images/comb2.jpg',
    description: 'Used in initiation rituals.',
    motif: '/images/afgo4.jpg',
  },
];

const categories = [...new Set(allItems.map((item) => item.category))];

export default function CollectionsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart();

  const grouped = categories.map((cat) => ({
    name: cat,
    items: allItems.filter((item) => item.category === cat),
  }));

  return (
    <section className="py-24 bg-amber-50 min-h-screen">
      <div className="max-w-9xl mx-auto px-8">
        <h1 className="text-6xl font-serif font-bold text-amber-900 text-center mb-12">Shop by Collection</h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2 rounded-full font-semibold border transition ${
              activeCategory === 'all'
                ? 'bg-emerald-600 text-white'
                : 'bg-white border-amber-300 text-amber-900 hover:bg-amber-100'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold border transition ${
                activeCategory === cat
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white border-amber-300 text-amber-900 hover:bg-amber-100'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Grouped by Category */}
        {grouped
          .filter((group) => activeCategory === 'all' || group.name === activeCategory)
          .map((group) => (
            <div key={group.name} className="mb-20">
              <h2 className="text-3xl font-serif font-bold text-amber-900 capitalize mb-6">
                {group.name.replace('-', ' ')}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {group.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white shadow-md rounded-2xl border border-amber-100 hover:border-emerald-400 transition-all duration-300 group relative overflow-hidden h-[500px] flex flex-col"
                  >
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-64 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
                      />
                      <img
                        src={item.motif}
                        alt="motif"
                        className="absolute top-0 right-0 w-14 h-14 opacity-20 pointer-events-none mix-blend-multiply"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-serif font-bold text-amber-900 mb-1">{item.name}</h3>
                        <p className="text-sm text-emerald-900">{item.description}</p>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Link
                          to={`/collections/${item.category}`}
                          className="bg-emerald-600 text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-amber-600 transition-colors"
                        >
                          Shop Now
                        </Link>
                        <button
                          onClick={() => addToWishlist(item)}
                          className="bg-white border border-amber-300 text-amber-900 px-4 py-2 rounded-full font-semibold shadow hover:bg-amber-100 transition-colors"
                        >
                          Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
