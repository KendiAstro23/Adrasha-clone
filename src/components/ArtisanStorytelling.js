import React from 'react';

const artisans = [
  {
    name: 'Amina Njeri',
    photo: '/images/ank2.jpg',
    quote: 'Each bead tells a story of our heritage. I love sharing my culture through my craft.',
    role: 'Beadwork Specialist, Nairobi',
  },
  {
    name: 'Mwangi Otieno',
    photo: '/images/brace2.jpg',
    quote: 'Jewelry is more than adornment—it is a symbol of pride and tradition.',
    role: 'Metal Artisan, Kisumu',
  },
  {
    name: 'Fatuma Wambui',
    photo: '/images/ear2.jpg',
    quote: 'I learned from my mother and now teach my daughters. Our art lives on.',
    role: 'Cowrie Shell Designer, Mombasa',
  },
];

export default function ArtisanStorytelling() {
  return (
    <section id="our-story" className="py-16 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-10 text-center">Meet the Artisans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {artisans.map((artisan) => (
            <div key={artisan.name} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-2 border-emerald-100 hover:border-amber-400 transition-all duration-300 group relative overflow-hidden">
              <img
                src={artisan.photo}
                alt={artisan.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-amber-200 mb-4 group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl font-serif font-bold text-emerald-900 mb-1">{artisan.name}</h3>
              <span className="text-xs text-amber-700 mb-2 font-semibold">{artisan.role}</span>
              <blockquote className="italic text-emerald-800 bg-amber-50 rounded-lg px-4 py-2 mt-2 mb-2 border-l-4 border-amber-400">“{artisan.quote}”</blockquote>
            </div>
          ))}
        </div>
        {/* Optional: Video carousel or embedded video */}
        <div className="mt-12 flex flex-col items-center">
          <video className="rounded-xl shadow-lg w-full max-w-2xl" controls poster="/images/neck1.jpg">
            <source src="/videos/artisans.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <span className="text-xs text-emerald-700 mt-2">Meet the Makers: Adrasha's Story</span>
        </div>
      </div>
    </section>
  );
} 