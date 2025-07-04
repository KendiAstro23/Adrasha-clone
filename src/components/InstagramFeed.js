import React from 'react';

const instagramPosts = [
  { id: 1, image: '/images/neck5.jpg', alt: 'Customer wearing beaded necklace' },
  { id: 2, image: '/images/ear5.jpg', alt: 'Customer with cowrie shell earrings' },
  { id: 3, image: '/images/brace5.jpg', alt: 'Bridal set in use' },
  { id: 4, image: '/images/comb5.jpg', alt: 'Waist beads on model' },
  { id: 5, image: '/images/afgo5.jpg', alt: 'Ivory pendant styled' },
  { id: 6, image: '/images/ank5.jpg', alt: 'Ankara print bracelet on wrist' },
];

export default function InstagramFeed() {
  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-8 text-center">#AdrashaJewelry on Instagram</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {instagramPosts.map((post) => (
            <div key={post.id} className="overflow-hidden rounded-xl shadow group">
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="https://instagram.com/adrashajewelry"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-600 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full shadow transition-colors text-lg"
          >
            Follow @adrashajewelry
          </a>
        </div>
      </div>
    </section>
  );
} 