'use client';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaTrash, FaArrowRight } from 'react-icons/fa';
import { removeFromCart, updateQuantity, clearCart } from '../../redux/slices/cartSlice';
import { createOrder } from '../../redux/slices/orderSlice';

export default function CartPage() {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);
  const [checkoutStep, setCheckoutStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: ''
  });
  
  const handleRemoveItem = (id, variantId) => {
    dispatch(removeFromCart({ id, variantId }));
  };
  
  const handleQuantityChange = (id, variantId, quantity) => {
    dispatch(updateQuantity({ id, variantId, quantity: parseInt(quantity) }));
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleCheckout = () => {
    // Create a new order
    dispatch(createOrder({
      items: items,
      totalAmount,
      customer: {
        name: formData.name,
        email: formData.email,
        address: `${formData.address}, ${formData.city}, ${formData.zipCode}, ${formData.country}`
      },
      paymentMethod: 'Credit Card',
      paymentDetails: {
        lastFour: formData.cardNumber.slice(-4)
      }
    }));
    
    // Clear the cart
    dispatch(clearCart());
    
    // Move to confirmation step
    setCheckoutStep(3);
  };
  
  const isFormValid = () => {
    if (checkoutStep === 1) {
      return formData.name && formData.email && formData.address && formData.city && formData.zipCode && formData.country;
    } else if (checkoutStep === 2) {
      return formData.cardNumber && formData.cardName && formData.expiry && formData.cvv;
    }
    return true;
  };
  
  // Empty cart view
  if (items.length === 0 && checkoutStep !== 3) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-6">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
          <Link 
            href="/products" 
            className="btn-primary px-6 py-3 rounded-full inline-flex items-center"
          >
            Start Shopping
            <FaArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </div>
    );
  }
  
  // Order confirmation view
  if (checkoutStep === 3) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-lg text-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-green-500 text-4xl">✓</span>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Order Confirmed!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your order. We've received your payment and will process your order shortly.
          </p>
          <div className="mb-8 p-4 bg-gray-50 rounded-lg">
            <p className="font-medium">Order Details:</p>
            <p className="text-gray-600">Order #: {Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</p>
            <p className="text-gray-600">Date: {new Date().toLocaleDateString()}</p>
          </div>
          <Link 
            href="/products" 
            className="btn-primary px-6 py-3 rounded-full inline-block"
          >
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          {checkoutStep === 0 && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Cart Items ({totalQuantity})</h2>
              
              {items.map((item) => (
                <div key={`${item.id}-${item.variantId}`} className="flex flex-col sm:flex-row items-center py-4 border-b border-gray-200 last:border-b-0">
                  <div className="sm:w-1/4 mb-4 sm:mb-0">
                    <div className="relative h-24 w-24 sm:h-32 sm:w-32 mx-auto">
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-md"
                      />
                    </div>
                  </div>
                  
                  <div className="sm:w-2/4 text-center sm:text-left mb-4 sm:mb-0">
                    <h3 className="font-medium text-gray-800">{item.name}</h3>
                    <p className="text-gray-600 text-sm">Variant: {item.variantName}</p>
                    <div 
                      className="w-4 h-4 rounded-full inline-block mt-1"
                      style={{ backgroundColor: item.variantColor }}
                    ></div>
                    <p className="text-rose-500 font-medium mt-1">${item.price.toFixed(2)}</p>
                  </div>
                  
                  <div className="sm:w-1/4 flex flex-col sm:flex-row items-center justify-between">
                    <div className="flex items-center mb-4 sm:mb-0">
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.variantId, Math.max(1, item.quantity - 1))}
                        className="w-8 h-8 bg-gray-100 rounded-l flex items-center justify-center hover:bg-gray-200"
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        value={item.quantity} 
                        onChange={(e) => handleQuantityChange(item.id, item.variantId, e.target.value)} 
                        className="w-12 h-8 border-y border-gray-200 text-center focus:outline-none"
                        min="1"
                      />
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.variantId, item.quantity + 1)}
                        className="w-8 h-8 bg-gray-100 rounded-r flex items-center justify-center hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => handleRemoveItem(item.id, item.variantId)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {checkoutStep === 1 && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block mb-1 font-medium text-sm">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1 font-medium text-sm">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="address" className="block mb-1 font-medium text-sm">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="city" className="block mb-1 font-medium text-sm">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block mb-1 font-medium text-sm">ZIP Code</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block mb-1 font-medium text-sm">Country</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
          )}
          
          {checkoutStep === 2 && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="cardNumber" className="block mb-1 font-medium text-sm">Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="cardName" className="block mb-1 font-medium text-sm">Name on Card</label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiry" className="block mb-1 font-medium text-sm">Expiry Date</label>
                    <input
                      type="text"
                      id="expiry"
                      name="expiry"
                      value={formData.expiry}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block mb-1 font-medium text-sm">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
                      required
                    />
                  </div>
                </div>
              </form>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  This is a demo checkout. No real payments will be processed.
                </p>
              </div>
            </div>
          )}
          
          <div className="flex justify-between">
            {checkoutStep > 0 && (
              <button
                onClick={() => setCheckoutStep(checkoutStep - 1)}
                className="btn-secondary px-6 py-2 rounded-full"
              >
                Back
              </button>
            )}
            
            {checkoutStep < 2 ? (
              <button
                onClick={() => setCheckoutStep(checkoutStep + 1)}
                disabled={checkoutStep === 1 && !isFormValid()}
                className={`btn-primary px-6 py-2 rounded-full ${
                  checkoutStep === 1 && !isFormValid() ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {checkoutStep === 0 ? 'Proceed to Checkout' : 'Continue to Payment'}
              </button>
            ) : (
              <button
                onClick={handleCheckout}
                disabled={!isFormValid()}
                className={`btn-primary px-6 py-2 rounded-full ${
                  !isFormValid() ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                Complete Order
              </button>
            )}
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({totalQuantity} items)</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>${(totalAmount * 0.1).toFixed(2)}</span>
              </div>
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="text-rose-600">${(totalAmount * 1.1).toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            {checkoutStep === 0 && (
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter promo code"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-rose-500 font-medium">
                    Apply
                  </button>
                </div>
              </div>
            )}
            
            {checkoutStep > 0 && (
              <div className="space-y-4 mt-6">
                <h3 className="font-medium">Order Items:</h3>
                {items.map((item) => (
                  <div key={`${item.id}-${item.variantId}-summary`} className="flex justify-between text-sm">
                    <span>
                      {item.name} ({item.variantName}) x {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
