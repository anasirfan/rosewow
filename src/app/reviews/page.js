'use client';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaStar, FaFilter, FaTimes } from 'react-icons/fa';

export default function ReviewsPage() {
  const products = useSelector((state) => state.products.products);
  
  // Collect all reviews from all products
  const allReviews = products.flatMap(product => 
    product.reviews.map(review => ({
      ...review,
      productId: product.id,
      productName: product.name,
      productImage: product.images[0]
    }))
  );
  
  const [filteredReviews, setFilteredReviews] = useState(allReviews);
  const [filters, setFilters] = useState({
    rating: 0,
    sortBy: 'newest',
    productId: ''
  });
  
  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    
    // Apply filters
    let result = [...allReviews];
    
    // Filter by rating
    if (newFilters.rating > 0) {
      result = result.filter(review => review.rating >= newFilters.rating);
    }
    
    // Filter by product
    if (newFilters.productId) {
      result = result.filter(review => review.productId === newFilters.productId);
    }
    
    // Apply sorting
    switch (newFilters.sortBy) {
      case 'newest':
        result.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'oldest':
        result.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'highest':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'lowest':
        result.sort((a, b) => a.rating - b.rating);
        break;
      default:
        break;
    }
    
    setFilteredReviews(result);
  };
  
  const clearFilters = () => {
    setFilters({
      rating: 0,
      sortBy: 'newest',
      productId: ''
    });
    setFilteredReviews(allReviews);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-center text-gray-800"
      >
        Customer Reviews
      </motion.h1>
      
      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <h2 className="text-xl font-semibold flex items-center">
            <FaFilter className="mr-2 text-rose-500" />
            Filter Reviews
          </h2>
          
          {(filters.rating > 0 || filters.productId) && (
            <button
              onClick={clearFilters}
              className="text-rose-500 hover:text-rose-700 flex items-center"
            >
              <FaTimes className="mr-1" />
              Clear Filters
            </button>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Rating Filter */}
          <div>
            <label className="block mb-2 font-medium">Rating</label>
            <div className="flex flex-wrap gap-2">
              {[0, 5, 4, 3, 2, 1].map((rating) => (
                <button
                  key={rating}
                  onClick={() => handleFilterChange('rating', rating)}
                  className={`px-3 py-1 rounded-full ${
                    filters.rating === rating 
                      ? 'bg-rose-500 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {rating === 0 ? (
                    'All Ratings'
                  ) : (
                    <div className="flex items-center">
                      {rating}
                      <FaStar className="ml-1 text-yellow-400" size={12} />
                      {rating === 5 ? ' only' : ' & up'}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Filter */}
          <div>
            <label htmlFor="productFilter" className="block mb-2 font-medium">Product</label>
            <select
              id="productFilter"
              value={filters.productId}
              onChange={(e) => handleFilterChange('productId', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
            >
              <option value="">All Products</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>
          
          {/* Sort Filter */}
          <div>
            <label htmlFor="sortFilter" className="block mb-2 font-medium">Sort By</label>
            <select
              id="sortFilter"
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="highest">Highest Rating</option>
              <option value="lowest">Lowest Rating</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Reviews List */}
      <div className="space-y-6">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((review) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <Link href={`/products/${review.productId}`}>
                    <div className="flex items-center">
                      <div className="relative h-16 w-16 mr-4">
                        <Image 
                          src={review.productImage} 
                          alt={review.productName} 
                          fill
                          style={{ objectFit: 'cover' }}
                          className="rounded-md"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">{review.productName}</h3>
                        <p className="text-sm text-rose-500">View Product</p>
                      </div>
                    </div>
                  </Link>
                </div>
                
                <div className="md:w-3/4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">{review.user}</h3>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i} 
                            className={i < review.rating ? "text-yellow-400" : "text-gray-300"} 
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">No reviews found</h3>
            <p className="text-gray-600">Try adjusting your filters</p>
          </div>
        )}
      </div>
      
      {/* Write a Review CTA */}
      <div className="mt-12 bg-rose-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Love Our Products?</h2>
        <p className="text-gray-700 mb-6">Share your experience and help others find their perfect lip care.</p>
        <Link 
          href="/products" 
          className="btn-primary px-6 py-3 rounded-full inline-block"
        >
          Write a Review
        </Link>
      </div>
    </div>
  );
}
