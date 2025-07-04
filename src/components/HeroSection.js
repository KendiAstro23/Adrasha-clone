import React from 'react';

const heroBg = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80'; // Replace with a culturally relevant image or video

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image */}
      <img
        src={heroBg}
        alt="Adrasha Jewelry Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
      />
      {/* Earth-tone Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/80 via-amber-200/40 to-emerald-100/60 z-10" />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 animate-fadeInUp">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-amber-50 drop-shadow-lg mb-4">
          Wear Your Heritage
        </h1>
        <p className="text-lg md:text-2xl text-amber-100 mb-8 max-w-xl">
          Authentic African jewelry handcrafted by Kenyan artisans. Celebrate culture, elegance, and tradition.
        </p>
        <div className="flex gap-4">
          <a href="#collections" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-300">
            Shop Now
          </a>
          <a href="#our-story" className="bg-white/80 hover:bg-white text-amber-900 font-semibold py-3 px-8 rounded-full shadow-lg border border-amber-300 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-300">
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
} 