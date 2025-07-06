import React from 'react';
// import './App.css';
import { Routes, Route } from 'react-router-dom'; // No need for BrowserRouter here
import Header from './components/Header';
import Shopping from './components/Shopping'
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import FeaturedCollections from './components/FeaturedCollections';
import ArtisanStorytelling from './components/ArtisanStorytelling';
import BestSellersCarousel from './components/BestSellersCarousel';
import CulturalSpotlight from './components/CulturalSpotlight';
import NewsletterSignup from './components/NewsletterSignup';
import InstagramFeed from './components/InstagramFeed';
import WishlistPage from './components/Wishlist';
import CollectionsPage from './components/CollectionsPage';
import AboutUs from './components/AboutUs';


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <FeaturedCollections />
              <ArtisanStorytelling />
              <BestSellersCarousel />
              <CulturalSpotlight />
              <NewsletterSignup />
              <InstagramFeed />
            </>
          }
        />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/shop" element={<Shopping />} />
        <Route path="/about" element={<AboutUs />} />

      </Routes>
      <Footer />
    </>
  );
};

export default App;
