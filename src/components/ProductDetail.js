import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart, useWishlist } from '../components/CartContext';
import { fetchProductById } from './api';

const initialReviews = [
  { name: 'Wanjiku M.', text: 'Absolutely stunning! The beadwork is so detailed and meaningful.' },
  { name: 'Ayo O.', text: 'I love the cultural story behind each piece. Fast shipping too!' },
];

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [confirmation, setConfirmation] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [reviews, setReviews] = useState(initialReviews);
  const [reviewName, setReviewName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [reviewSuccess, setReviewSuccess] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  useEffect(() => {
    fetchProductById(id)
      .then((data) => {
        setProduct(data);
        setError(null);
      })
      .catch(() => {
        setError('Product not found or server error');
      });
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setSuccessMessage('Your product has been successfully added to the cart!');
    setConfirmation(true);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!reviewName.trim() || !reviewText.trim()) return;
    setReviews([...reviews, { name: reviewName, text: reviewText }]);
    setReviewName('');
    setReviewText('');
    setReviewSuccess(true);
    setTimeout(() => setReviewSuccess(false), 2000);
  };

  if (error) return <div className="text-center text-red-600 py-8">{error}</div>;
  if (!product) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-start">
      {/* Image with zoom */}
      <div className="relative group">
        <img
          src={product.imageUrl || '/images/default.jpg'}
          alt={product.name}
          className="w-full h-96 object-cover rounded-2xl shadow-lg border-4 border-amber-100 group-hover:scale-105 transition-transform duration-300 cursor-zoom-in"
        />
        {/* Cultural info overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-amber-900/80 to-transparent text-amber-50 p-4 rounded-b-2xl text-xs font-serif">
          {product.culturalInfo || 'Handcrafted by Kenyan artisans, inspired by African heritage.'}
        </div>
      </div>
      {/* Details */}
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-serif font-bold text-amber-900">{product.name}</h2>
        <p className="text-lg text-emerald-900">{product.description || 'No description available'}</p>
        <div className="flex gap-2 items-center">
          <span className="text-2xl font-bold text-emerald-700">${product.price}</span>
          <span className="text-xs text-amber-700 bg-amber-100 rounded px-2 py-1 ml-2">{product.materials || 'N/A'}</span>
        </div>
        <div className="text-xs text-amber-900">Made On: {product.madeOn || 'N/A'} | Best For: {product.bestFor || 'N/A'}</div>
        <div className="flex gap-3 mt-4">
          <button
            onClick={handleAddToCart}
            className="bg-emerald-600 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full shadow transition-colors w-full md:w-auto"
          >
            Add to Cart
          </button>
          <button
            onClick={() => addToWishlist(product)}
            className="bg-white border border-amber-300 text-amber-900 font-semibold px-8 py-3 rounded-full shadow hover:bg-amber-100 transition-colors w-full md:w-auto"
          >
            Add to Wishlist
          </button>
        </div>
        {confirmation && (
          <div className="bg-emerald-100 text-emerald-900 rounded-lg px-6 py-4 font-semibold shadow mb-4 animate-fadeInUp mt-4 flex flex-col gap-2">
            <p>{successMessage}</p>
            <div className="flex gap-2 justify-center">
              <button onClick={() => navigate('/cart')} className="bg-amber-600 hover:bg-emerald-600 text-white px-4 py-2 rounded-full">Go to Cart</button>
              <button onClick={() => setConfirmation(false)} className="bg-white border border-amber-300 text-amber-900 px-4 py-2 rounded-full">Continue Shopping</button>
            </div>
          </div>
        )}
        {/* Reviews */}
        <div className="mt-6">
          <h3 className="text-lg font-bold text-amber-900 mb-2">Customer Reviews</h3>
          <div className="flex flex-col gap-2 mb-4">
            {reviews.map((r, i) => (
              <div key={i} className="bg-amber-50 border-l-4 border-emerald-400 rounded px-4 py-2 text-emerald-900 text-sm">
                <span className="font-semibold">{r.name}:</span> {r.text}
              </div>
            ))}
          </div>
          {/* Review Submission Form */}
          <form onSubmit={handleReviewSubmit} className="flex flex-col gap-2 bg-white border border-amber-100 rounded-lg p-4 shadow">
            <h4 className="text-md font-bold text-emerald-900 mb-1">Leave a Review</h4>
            <input
              type="text"
              value={reviewName}
              onChange={e => setReviewName(e.target.value)}
              placeholder="Your Name"
              className="px-4 py-2 rounded-full border-2 border-amber-200 focus:border-emerald-400 focus:outline-none text-amber-900 bg-amber-50"
              required
            />
            <textarea
              value={reviewText}
              onChange={e => setReviewText(e.target.value)}
              placeholder="Your Review"
              className="px-4 py-2 rounded-lg border-2 border-amber-200 focus:border-emerald-400 focus:outline-none text-amber-900 bg-amber-50 resize-none"
              rows={3}
              required
            />
            <button type="submit" className="bg-emerald-600 hover:bg-amber-600 text-white font-semibold px-6 py-2 rounded-full shadow mt-2">Submit Review</button>
            {reviewSuccess && <div className="text-emerald-700 text-xs mt-1">Thank you for your review!</div>}
          </form>
        </div>
      </div>
    </div>
  );
}
