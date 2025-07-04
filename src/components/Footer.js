// src/components/Footer.js
import React from 'react';

const socialLinks = [
  { href: 'https://instagram.com/adrashajewelry', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
  ), label: 'Instagram' },
  { href: 'https://facebook.com', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a4 4 0 0 0-4 4v3H7v4h4v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z"/></svg>
  ), label: 'Facebook' },
  { href: 'https://twitter.com', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1s-4.18 1.64-6.29 2.34A4.48 4.48 0 0 0 3 6.29c0 .35.04.7.1 1.03A12.94 12.94 0 0 1 1.67 2.15s-.4 1.18-.4 2.36c0 2.18 1.11 4.1 2.8 5.23A4.48 4.48 0 0 1 2 8.57v.05a4.48 4.48 0 0 0 3.6 4.4 4.52 4.52 0 0 1-2 .08 4.48 4.48 0 0 0 4.19 3.12A9 9 0 0 1 1 19.54a12.94 12.94 0 0 0 7 2.05c8.29 0 12.84-6.87 12.84-12.84 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 23 3z"/></svg>
  ), label: 'Twitter' },
];

const paymentIcons = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/M-PESA_LOGO-01.svg', alt: 'M-Pesa', className: 'h-7' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg', alt: 'PayPal', className: 'h-7' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg', alt: 'Visa', className: 'h-7' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/MasterCard_Logo.svg', alt: 'MasterCard', className: 'h-7' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-amber-900 via-amber-700 to-emerald-900 text-amber-50 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Navigation */}
        <nav className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-lg font-semibold">
          <a href="#collections" className="hover:text-amber-200 transition-colors">Shop</a>
          <a href="#our-story" className="hover:text-amber-200 transition-colors">About</a>
          <a href="#" className="hover:text-amber-200 transition-colors">Contact</a>
          <a href="#" className="hover:text-amber-200 transition-colors">FAQ</a>
        </nav>
        {/* Social Icons */}
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="hover:text-amber-200 transition-colors">
              {link.icon}
            </a>
          ))}
        </div>
        {/* Payment Icons */}
        <div className="flex gap-3 items-center">
          {paymentIcons.map((icon) => (
            <img key={icon.alt} src={icon.src} alt={icon.alt} className={icon.className + ' bg-white rounded shadow p-1'} />
          ))}
        </div>
      </div>
      <div className="text-center text-xs text-amber-200 mt-6">&copy; {new Date().getFullYear()} Adrasha Jewelry. All rights reserved.</div>
    </footer>
  );
}
