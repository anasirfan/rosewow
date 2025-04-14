'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate average rating
  const averageRating = product.reviews.length > 0
    ? product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length
    : 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="product-card bg-white rounded-lg overflow-hidden shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/products/${product.id}`}>
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={isHovered && product.images.length > 1 ? product.images[1] : product.images[0]}
            alt={product.name}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-500 ease-in-out"
          />
          {product.stock < 10 && product.stock > 0 && (
            <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
              Low Stock
            </div>
          )}
          {product.stock === 0 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              Out of Stock
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
            {product.name}
          </h3>
          <span className="text-rose-500 font-bold">${product.price.toFixed(2)}</span>
        </div>
        
        <div className="flex items-center mb-3">
          <div className="flex mr-2">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                className={i < Math.round(averageRating) ? "text-yellow-400" : "text-gray-300"} 
                size={14}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">
            ({product.reviews.length} {product.reviews.length === 1 ? 'review' : 'reviews'})
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description.split('.')[0]}.
        </p>
        
        <div className="flex space-x-2 mb-4">
          {product.variants.slice(0, 3).map(variant => (
            <div 
              key={variant.id}
              className="w-5 h-5 rounded-full border border-gray-300"
              style={{ backgroundColor: variant.color }}
              title={variant.name}
            />
          ))}
          {product.variants.length > 3 && (
            <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-500">
              +{product.variants.length - 3}
            </div>
          )}
        </div>
        
        <Link href={`/products/${product.id}`} className="btn-primary w-full py-2 rounded-full text-center block text-sm">
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
