import React from 'react';
// import './App.css';
import { Routes, Route } from 'react-router-dom'; // No need for BrowserRouter here
import Header from './components/Header';
import ProductGallery from './components/ProductGallery';
import SimilarProducts from './components/SimilarProducts';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Chat from './components/Chat';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import FeaturedCollections from './components/FeaturedCollections';
import ArtisanStorytelling from './components/ArtisanStorytelling';
import BestSellersCarousel from './components/BestSellersCarousel';
import CulturalSpotlight from './components/CulturalSpotlight';
import NewsletterSignup from './components/NewsletterSignup';
import InstagramFeed from './components/InstagramFeed';
import WishlistPage from './components/Wishlist';

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturedCollections />
      <ArtisanStorytelling />
      <BestSellersCarousel />
      <CulturalSpotlight />
      <NewsletterSignup />
      <InstagramFeed />
      <Footer />
      <div className="main-content">
        <Routes>
          {/* Default route for the dashboard */}
          <Route path="/" element={<ProductGallery />} />
          {/* Route for product details */}
          <Route path="/products/:id" element={<ProductDetail />} />
          {/* Route for similar products */}
          <Route path="/similar-products/:id" element={<SimilarProducts />} />
          {/* Route for cart */}
          <Route path="/cart" element={<Cart />} />
          {/* Route for checkout */}
          <Route path="/checkout" element={<Checkout />} />
          {/* Route for chat */}
          <Route path="/chat" element={<Chat />} />
          {/* Route for wishlist */}
          <Route path="/wishlist" element={<WishlistPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
