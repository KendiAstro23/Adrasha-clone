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
    <section className="py-24 bg-amber-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-serif font-bold text-amber-900 mb-6 leading-tight">
          Be the First to Discover Limited Drops
        </h2>
        <p className="text-lg text-emerald-900 mb-10 max-w-2xl mx-auto">
          Sign up for our newsletter and get{' '}
          <span className="font-bold text-amber-700">10% off</span> your first order!
        </p>

        {submitted ? (
          <div className="bg-emerald-100 text-emerald-900 text-lg rounded-xl px-8 py-6 font-medium shadow-lg mb-6 animate-fadeInUp">
            Thank you for subscribing! Check your inbox for your discount code.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full sm:w-[400px] px-6 py-4 text-lg rounded-full border-2 border-amber-300 focus:border-emerald-500 focus:outline-none text-amber-900 bg-white shadow-lg"
            />
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-amber-600 text-white text-lg font-semibold px-10 py-4 rounded-full shadow-lg transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        )}

        <div className="mt-6 text-sm text-emerald-700 opacity-80">
          We respect your privacy. Unsubscribe at any time.
        </div>
      </div>
    </section>
  );
}
