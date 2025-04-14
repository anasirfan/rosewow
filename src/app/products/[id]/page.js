'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaStar, FaArrowLeft, FaCheck } from 'react-icons/fa';
import { addToCart } from '../../../redux/slices/cartSlice';

export default function ProductDetail() {
  const params = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const product = products.find(p => p.id === params.id);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link href="/products" className="text-rose-500 hover:underline">
          Return to products
        </Link>
      </div>
    );
  }
  
  // Calculate average rating
  const averageRating = product.reviews.length > 0
    ? product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length
    : 0;
  
  const handleAddToCart = () => {
    if (product.stock > 0 && selectedVariant?.inStock) {
      dispatch(addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        variantId: selectedVariant.id,
        variantName: selectedVariant.name,
        variantColor: selectedVariant.color,
        quantity: quantity
      }));
    }
  };
  
  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/products" className="inline-flex items-center text-rose-500 hover:text-rose-600 mb-6">
        <FaArrowLeft className="mr-2" />
        Back to Products
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative h-96 w-full mb-4 rounded-lg overflow-hidden"
          >
            <Image 
              src={product.images[selectedImage]} 
              alt={product.name} 
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
              priority
            />
          </motion.div>
          
          <div className="flex space-x-4">
            {product.images.map((image, index) => (
              <div 
                key={index}
                className={`relative h-20 w-20 cursor-pointer rounded-md overflow-hidden border-2 ${
                  selectedImage === index ? 'border-rose-500' : 'border-transparent'
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image 
                  src={image} 
                  alt={`${product.name} - view ${index + 1}`} 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-2 text-gray-800"
          >
            {product.name}
          </motion.h1>
          
          <div className="flex items-center mb-4">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <FaStar 
                  key={i} 
                  className={i < Math.round(averageRating) ? "text-yellow-400" : "text-gray-300"} 
                />
              ))}
            </div>
            <Link href="#reviews" className="text-sm text-gray-500 hover:underline">
              {product.reviews.length} {product.reviews.length === 1 ? 'review' : 'reviews'}
            </Link>
          </div>
          
          <div className="text-2xl font-bold text-rose-600 mb-6">
            ${product.price.toFixed(2)}
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Variants</h3>
            <div className="flex flex-wrap gap-3 mb-4">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  disabled={!variant.inStock}
                  className={`relative w-12 h-12 rounded-full border-2 ${
                    selectedVariant?.id === variant.id 
                      ? 'border-rose-500' 
                      : 'border-gray-300'
                  } ${!variant.inStock ? 'opacity-50 cursor-not-allowed' : ''}`}
                  style={{ backgroundColor: variant.color }}
                  title={variant.name}
                >
                  {selectedVariant?.id === variant.id && (
                    <span className="absolute inset-0 flex items-center justify-center text-white">
                      <FaCheck size={12} />
                    </span>
                  )}
                </button>
              ))}
            </div>
            <p className="text-gray-700">
              Selected: <span className="font-medium">{selectedVariant?.name}</span>
              {!selectedVariant?.inStock && <span className="text-red-500 ml-2">(Out of Stock)</span>}
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Quantity</h3>
            <div className="flex items-center">
              <button 
                onClick={decrementQuantity} 
                className="w-10 h-10 bg-gray-100 rounded-l-lg flex items-center justify-center hover:bg-gray-200"
                disabled={quantity <= 1}
              >
                -
              </button>
              <input 
                type="number" 
                value={quantity} 
                onChange={(e) => setQuantity(Math.min(Math.max(1, parseInt(e.target.value) || 1), product.stock))} 
                className="w-16 h-10 border-y border-gray-200 text-center focus:outline-none"
                min="1"
                max={product.stock}
              />
              <button 
                onClick={incrementQuantity} 
                className="w-10 h-10 bg-gray-100 rounded-r-lg flex items-center justify-center hover:bg-gray-200"
                disabled={quantity >= product.stock}
              >
                +
              </button>
              <span className="ml-4 text-sm text-gray-500">
                {product.stock} available
              </span>
            </div>
          </div>
          
          <button 
            onClick={handleAddToCart} 
            disabled={product.stock === 0 || !selectedVariant?.inStock}
            className={`w-full py-3 rounded-full font-medium text-white ${
              product.stock === 0 || !selectedVariant?.inStock
                ? 'bg-gray-400 cursor-not-allowed'
                : 'btn-primary'
            }`}
          >
            {product.stock === 0 || !selectedVariant?.inStock ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
      
      {/* Product Details Tabs */}
      <div className="mb-12">
        <div className="border-b border-gray-200 mb-6">
          <div className="flex space-x-8">
            <button 
              onClick={() => setActiveTab('description')}
              className={`py-3 font-medium ${
                activeTab === 'description' ? 'tab-active' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Description
            </button>
            <button 
              onClick={() => setActiveTab('ingredients')}
              className={`py-3 font-medium ${
                activeTab === 'ingredients' ? 'tab-active' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Ingredients
            </button>
            <button 
              onClick={() => setActiveTab('variants')}
              className={`py-3 font-medium ${
                activeTab === 'variants' ? 'tab-active' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Variants
            </button>
          </div>
        </div>
        
        <div className="prose max-w-none">
          {activeTab === 'description' && (
            <div>
              <p className="mb-4">{product.description}</p>
              <h3 className="text-xl font-semibold mb-3">Features</h3>
              <ul className="list-disc pl-5 space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <p className="mt-4 font-medium text-rose-600">{product.tagline}</p>
            </div>
          )}
          
          {activeTab === 'ingredients' && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Ingredients</h3>
              <p className="mb-4">We believe in transparency. Here's exactly what goes into our product:</p>
              <div className="bg-rose-50 p-4 rounded-lg">
                <p>{product.ingredients}</p>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-medium mb-2">Key Ingredients</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-medium">Rose Flower Oil:</span> Provides the delicate scent and has natural anti-inflammatory properties</li>
                  <li><span className="font-medium">Shea Butter:</span> Creates a moisture barrier and deeply hydrates</li>
                  <li><span className="font-medium">Vitamin E:</span> Antioxidant that helps protect and repair lips</li>
                </ul>
              </div>
            </div>
          )}
          
          {activeTab === 'variants' && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Available Variants</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.variants.map((variant) => (
                  <div key={variant.id} className="flex items-center p-4 border rounded-lg">
                    <div 
                      className="w-12 h-12 rounded-full mr-4"
                      style={{ backgroundColor: variant.color }}
                    ></div>
                    <div>
                      <h4 className="font-medium">{variant.name}</h4>
                      <p className={variant.inStock ? 'text-green-600' : 'text-red-500'}>
                        {variant.inStock ? 'In Stock' : 'Out of Stock'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Reviews Section */}
      <div id="reviews" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        
        {product.reviews.length > 0 ? (
          <div className="space-y-6">
            {product.reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{review.user}</h3>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={i < review.rating ? "text-yellow-400" : "text-gray-300"} 
                      size={14}
                    />
                  ))}
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
        )}
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="rating" className="block mb-2 font-medium">Rating</label>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className="text-2xl focus:outline-none"
                  >
                    <FaStar className="text-gray-300 hover:text-yellow-400" />
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
                required
              />
            </div>
            
            <div>
              <label htmlFor="comment" className="block mb-2 font-medium">Your Review</label>
              <textarea
                id="comment"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="btn-primary px-6 py-2 rounded-full"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
