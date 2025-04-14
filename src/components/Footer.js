'use client';

import Link from 'next/link';
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-rose-100 text-gray-700 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold text-rose-500 mb-4"
            >
              RoseWow
            </motion.h3>
            <p className="text-sm">
              Delicate lip balms crafted from rose petals to nourish and enhance your lips.
              Sustainably Beautiful. Made for Your Lips.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-rose-500 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-rose-500 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-rose-500 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-rose-500 transition-colors">
                <FaPinterest size={20} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="hover:text-rose-500 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?category=bestsellers" className="hover:text-rose-500 transition-colors">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="/products?category=new" className="hover:text-rose-500 transition-colors">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-rose-500 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-rose-500 transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/ingredients" className="hover:text-rose-500 transition-colors">
                  Ingredients
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-rose-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-rose-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-rose-500 transition-colors">
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-rose-200 mt-8 pt-6 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} RoseWow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
