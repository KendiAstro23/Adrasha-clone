// src/components/BestSellers.js

import React from 'react';
import { Heart } from 'lucide-react';

const bestsellers = [
  { id: 1, name: 'Royal Amethyst Set', image: '/images/neck1.jpg' },
  { id: 2, name: 'Gold Kitenge Ring', image: '/images/ank2.jpg' },
  { id: 3, name: 'Classic Maasai Beads', image: '/images/comb3.jpg' },
  { id: 4, name: 'Ivory Coast Pendant', image: '/images/neck2.jpg' },
  { id: 5, name: 'Sapphire Twist Earrings', image: '/images/brace5.jpg' },
];

export default function BestSellers() {
  return (
    <section className="w-screen overflow-hidden bg-white py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Best Sellers</h2>
      <div className="flex flex-row w-full h-[90vh] gap-6">
        {/* Left - Largest Bestseller */}
        <div className="w-1/2 h-full relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src={bestsellers[0].image}
            alt={bestsellers[0].name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-3xl font-bold">{bestsellers[0].name}</h3>
            <button className="mt-2 px-5 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200">
              Shop Now
            </button>
          </div>
          <Heart className="absolute top-6 right-6 text-white w-6 h-6 cursor-pointer" />
        </div>

        {/* Right - Four Smaller Cards */}
        <div className="w-1/2 h-full flex flex-col gap-2"> {/* reduced vertical gap */}
        {/* Top two cards */}
        <div className="flex flex-1 gap-2">
          {bestsellers.slice(1, 3).map((item) => (
            <div
            key={item.id}
            className="relative w-1/2 h-full rounded-xl overflow-hidden shadow-md"
            >
              <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold text-lg">{item.name}</h4>
                </div>
                <Heart className="absolute top-4 right-4 text-white w-5 h-5 cursor-pointer" />
                </div>
              ))}
              </div>
              {/* Bottom two cards */}
              <div className="flex flex-1 gap-2">
                {bestsellers.slice(3).map((item) => (
                  <div
                  key={item.id}
                  className="relative w-1/2 h-full rounded-xl overflow-hidden shadow-md"
                  >
                    <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="font-semibold text-lg">{item.name}</h4>
                    </div>
                    <Heart className="absolute top-4 right-4 text-white w-5 h-5 cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  </div>
  </section>
  );
}
