// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { WishlistModal } from './Wishlist';

export default function Header() {
  const [wishlistOpen, setWishlistOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-amber-100 via-emerald-100 to-amber-50 shadow-md sticky top-0 z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo/Brand */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl md:text-3xl font-serif font-bold text-amber-900 tracking-tight drop-shadow-sm">Adrasha</span>
          <span className="hidden md:inline text-xs font-semibold text-emerald-700 bg-amber-200 rounded px-2 py-1 ml-2">Jewelry</span>
        </Link>

        {/* Navigation */}
        <nav className="flex gap-4 md:gap-8 items-center">
          <Link to="/" className="text-amber-900 font-medium hover:text-emerald-700 transition-colors">Home</Link>
          <Link to="/collections" className="text-amber-900 font-medium hover:text-emerald-700 transition-colors">Collections</Link>
          <Link to="/shop" className="text-amber-900 font-medium hover:text-emerald-700 transition-colors">Shop</Link>
          <Link to="/about" className="text-amber-900 font-medium hover:text-emerald-700 transition-colors">About Us</Link>

          {/* Optional: Wishlist Modal Trigger (can be removed if no longer needed) */}
          <button onClick={() => setWishlistOpen(true)} className="relative group p-1" title="Open Wishlist Modal">
            <svg className="w-7 h-7 text-amber-900 group-hover:text-emerald-700 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.682l-7.682-7.682a4.5 4.5 0 010-6.364z" />
            </svg>
          </button>

          <Link to="/cart" className="relative group">
            <svg className="w-7 h-7 text-amber-900 group-hover:text-emerald-700 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 0 0 7.5 19h9a2 2 0 0 0 1.85-1.3L21 13M7 13V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v7" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs rounded-full px-1.5 py-0.5 font-bold shadow">0</span>
          </Link>
        </nav>
      </div>

      {/* Modal can be removed if not used */}
      <WishlistModal open={wishlistOpen} onClose={() => setWishlistOpen(false)} />
    </header>
  );
}
