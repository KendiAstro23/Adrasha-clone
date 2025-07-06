import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <section className="bg-amber-50 text-amber-900">
      {/* Our Story Section */}
      <div className="flex items-center justify-center min-h-[70vh] px-6 text-center bg-amber-50">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-amber-900">Our Story</h1>
          <p className="text-lg md:text-xl text-emerald-800 leading-relaxed">
            Adrasha Jewelry was born from a desire to reclaim identity through artistry. What began as a single woman’s passion in the heart of Kenya quickly evolved into a movement—a celebration of ancestral craftsmanship and contemporary expression.
            </p>
            <p className="mt-6 text-lg md:text-xl text-emerald-800 leading-relaxed">
              Our founder, raised among women who traded beadwork and braided wisdom into everyday life, realized that beauty could be more than adornment—it could be a message, a memory, and a means of empowerment. She began crafting with intention: every shell, every bead, and every woven thread told a story passed down generations.
            </p>
            <p className="mt-6 text-lg md:text-xl text-emerald-800 leading-relaxed">
              Today, Adrasha is a collective of artisans across East Africa. We fuse traditional materials like cowrie shells, recycled brass, and Maasai beads with modern silhouettes. Each piece supports fair wages, sustainable sourcing, and cultural preservation—because when we wear our history with pride, we build a future rooted in purpose.
            </p>
            </div>
        </div>

      {/* Founder Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold font-serif mb-4">Our Founder</h2>
          <p className="mb-4 leading-relaxed text-lg">
            Amani Njeri, a self-taught artisan, founded Adrasha Jewelry to revive and protect ancestral design knowledge. Her work is inspired by the women she grew up watching—stringing beads, trading goods, and crafting symbols of beauty and strength.
          </p>
          <p className="leading-relaxed text-lg">
            Today, Amani leads a collective of artisans, sharing her vision globally while empowering others locally.
          </p>
        </div>
        <div className="relative">
          <img
            src="/images/fd5-removebg-preview.png"
            alt="Founder"
            className="rounded-3xl shadow-lg w-full h-auto object-cover"
          />
          <span className="absolute bottom-4 right-4 bg-white text-sm text-emerald-800 px-3 py-1 rounded-full shadow">
            Founder: Amani Njeri
          </span>
        </div>
      </div>

      {/* Core Designs Section */}
      <div className="bg-white py-20">
        <div className="max-w-8xl mx-auto px-7 text-center">
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-10 text-amber-900">Our Core Designs</h2>
          <div className="grid md:grid-cols-3 gap-9">
            {[
              {
                title: 'Cowrie Shells',
                image: '/images/ear4.jpg',
                description:
                  'Cowrie shells have long symbolized wealth, fertility, and spiritual protection across African communities.',
              },
              {
                title: 'Maasai Beadwork',
                image: '/images/neck1.jpg',
                description:
                  'Vibrant bead patterns reflect status, community, and identity. Each color tells a story.',
              },
              {
                title: 'Waist Beads',
                image: '/images/comb1.jpg',
                description:
                  'Worn with pride and power, waist beads represent femininity, healing, and rites of passage.',
              },
            ].map((design, idx) => (
              <div
                key={idx}
                className="bg-amber-50 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition"
              >
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-60 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-serif font-bold text-amber-900 mb-2">
                  {design.title}
                </h3>
                <p className="text-emerald-900 text-sm">{design.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-emerald-100 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4">
          Get 20% Off Your First Purchase
        </h2>
        <p className="text-lg text-emerald-900 mb-6">
          Join our community and receive early access to exclusive collections, limited drops, and artisan stories.
        </p>
        <Link
          to="/signup"
          className="bg-amber-600 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-emerald-600 transition"
        >
          Sign Up & Save
        </Link>
      </div>
    </section>
  );
}
