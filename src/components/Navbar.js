'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.totalQuantity);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-rose-500"
            >
              RoseWow
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-rose-500 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-rose-500 transition-colors">
              Products
            </Link>
            <Link href="/reviews" className="text-gray-700 hover:text-rose-500 transition-colors">
              Reviews
            </Link>
            <Link href="/cart" className="relative text-gray-700 hover:text-rose-500 transition-colors">
              <FaShoppingCart size={20} />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems}
                </span>
              )}
            </Link>
            <Link href={isAuthenticated ? "/admin" : "/admin/login"} className="text-gray-700 hover:text-rose-500 transition-colors">
              <FaUserCircle size={20} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-rose-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className="text-gray-700 hover:text-rose-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="/reviews" 
                className="text-gray-700 hover:text-rose-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link 
                href="/cart" 
                className="flex items-center text-gray-700 hover:text-rose-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaShoppingCart size={20} className="mr-2" />
                Cart {cartItems > 0 && `(${cartItems})`}
              </Link>
              <Link 
                href={isAuthenticated ? "/admin" : "/admin/login"} 
                className="flex items-center text-gray-700 hover:text-rose-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaUserCircle size={20} className="mr-2" />
                {isAuthenticated ? 'Admin Dashboard' : 'Admin Login'}
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
