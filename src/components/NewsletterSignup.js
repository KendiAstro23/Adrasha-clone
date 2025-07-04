import React, { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4">Be the First to Discover Limited Drops</h2>
        <p className="text-emerald-900 mb-6">Sign up for our newsletter and get <span className="font-bold text-amber-700">10% off</span> your first order!</p>
        {submitted ? (
          <div className="bg-emerald-100 text-emerald-900 rounded-lg px-6 py-4 font-semibold shadow mb-4 animate-fadeInUp">Thank you for subscribing! Check your inbox for your discount code.</div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full sm:w-auto px-4 py-3 rounded-full border-2 border-amber-200 focus:border-emerald-400 focus:outline-none text-amber-900 bg-white shadow"
            />
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full shadow transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
        <div className="mt-4 text-xs text-emerald-700">We respect your privacy. Unsubscribe at any time.</div>
      </div>
    </section>
  );
} 