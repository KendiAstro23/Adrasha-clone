import React from 'react';

const spotlights = [
  {
    title: 'Waist Beads',
    image: '/images/comb4.jpg',
    description: 'Waist beads are a symbol of femininity, spirituality, and sensuality in many African cultures. They are worn for rites of passage, body shaping, and as a sign of heritage.',
    fact: 'In Kenya, waist beads are often gifted to brides as a blessing for fertility and prosperity.'
  },
  {
    title: 'Adinkra Symbols',
    image: '/images/brace3.jpg',
    description: 'Adinkra symbols from West Africa represent concepts like strength, unity, and wisdom. These motifs are often incorporated into jewelry for their deep meanings.',
    fact: 'The "Gye Nyame" symbol means "except for God" and is a popular motif in African jewelry.'
  },
  {
    title: 'Fulani Gold Earrings',
    image: '/images/fulani_earrings.jpg',
    description: 'Fulani gold earrings are iconic pieces of jewelry worn by Fulani women in West Africa. Handcrafted from gold or bronze, they are known for their large, crescent-shaped design that represents beauty and cultural identity.',
    fact: 'Fulani women often pass down these earrings through generations as symbols of heritage and status.'
  },  
  {
    title: 'Cowrie Shells',
    image: '/images/ear4.jpg',
    description: 'Cowrie shells have been used as currency, jewelry, and spiritual tools across Africa. They symbolize wealth, fertility, and protection.',
    fact: 'Cowries are often sewn into Maasai beadwork and worn during ceremonies.'
  },
];

export default function CulturalSpotlight() {
  return (
    <section className="py-16 bg-emerald-100">
      <div className="max-w-8xl mx-auto px-6">
        <h2 className="text-4xl md:text-4xl font-serif font-bold text-amber-900 mb-10 text-center">Cultural Spotlight</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {spotlights.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-2 border-emerald-200 hover:border-amber-400 transition-all duration-300 group relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-28 h-28 object-cover rounded-full border-4 border-amber-200 mb-4 group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl font-serif font-bold text-emerald-900 mb-1">{item.title}</h3>
              <p className="text-sm text-emerald-900 mb-2">{item.description}</p>
              <div className="bg-amber-100 text-amber-900 text-xs rounded-lg px-3 py-2 mt-2 border-l-4 border-amber-400 font-semibold shadow-sm">{item.fact}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 