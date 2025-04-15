'use client';

import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FaStar, FaArrowRight } from "react-icons/fa";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const products = useSelector((state) => state.products.products);
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24 overflow-hidden relative">
        {/* Floating rose petals background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute opacity-30"
              initial={{
                x: Math.random() * 100 - 50,
                y: Math.random() * -100,
                rotate: Math.random() * 360,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{
                y: '100vh',
                x: Math.sin(i) * 200 + (Math.random() * 200 - 100),
                rotate: Math.random() * 360
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 30 + 10}px`,
                height: `${Math.random() * 30 + 10}px`,
                background: `rgba(219, 112, 147, ${Math.random() * 0.2 + 0.1})`,
                borderRadius: '50% 50% 50% 0',
                boxShadow: '0 0 10px rgba(219, 112, 147, 0.3)'
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-rose-700 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.span 
                  className="inline-block"
                  whileHover={{ scale: 1.05, color: "#be185d" }}
                >
                  Beauty
                </motion.span>{" "}
                <motion.span 
                  className="inline-block"
                  whileHover={{ scale: 1.05, color: "#be185d" }}
                >
                  in
                </motion.span>{" "}
                <motion.span 
                  className="inline-block"
                  whileHover={{ scale: 1.05, color: "#be185d" }}
                >
                  Every
                </motion.span>{" "}
                <motion.span 
                  className="inline-block"
                  whileHover={{ scale: 1.05, color: "#be185d" }}
                >
                  Swipe
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-gray-700 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Experience the delicate blend of soft moisture and gentle fragrance, 
                crafted from rose petals to nourish and enhance your lips.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/products" 
                  className="btn-primary px-8 py-3 rounded-full inline-flex items-center font-medium text-base group"
                >
                  <span className="mr-2">Explore Collection</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      repeatType: "loop" 
                    }}
                  >
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2 relative"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="absolute -top-4 -left-4 w-24 h-24 bg-rose-100 rounded-full z-0 opacity-70"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0],
                  opacity: [0.7, 0.5, 0.7]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              />
              
              <motion.div 
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose-200 rounded-full z-0 opacity-60"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, -10, 0],
                  opacity: [0.6, 0.4, 0.6]
                }}
                transition={{ 
                  duration: 7, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              />
              
              <div className="relative h-80 md:h-96 w-full z-10">
                <Image 
                  src="/velvet-rose-1.jpeg" 
                  alt="RoseWow Lip Balm" 
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-lg"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-gray-800"
          >
            Why Choose <span className="text-rose-500">RoseWow</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-rose-50 p-6 rounded-lg text-center"
            >
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-rose-500 text-2xl">🌹</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Natural Ingredients</h3>
              <p className="text-gray-600">Made with real rose petals and natural oils for the perfect blend of care and beauty.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-rose-50 p-6 rounded-lg text-center"
            >
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-rose-500 text-2xl">💧</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Long-lasting Hydration</h3>
              <p className="text-gray-600">Our unique formula provides hours of moisture without the need for frequent reapplication.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-rose-50 p-6 rounded-lg text-center"
            >
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-rose-500 text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Sustainably Sourced</h3>
              <p className="text-gray-600">Eco-friendly packaging and ethically sourced ingredients for guilt-free beauty.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-rose-50/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-800"
            >
              Featured Products
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/products" 
                className="text-rose-500 hover:text-rose-600 flex items-center font-medium"
              >
                View All
                <FaArrowRight className="ml-2" size={14} />
              </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-gray-800"
          >
            What Our Customers Say
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "This lip balm is amazing! The scent is subtle and the moisture lasts all day. I've tried many lip balms before, but RoseWow is by far my favorite."
              </p>
              <p className="font-semibold text-gray-800">Emily S.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The honey and rose combination is divine! My lips have never felt better. I love that it's made with natural ingredients and provides long-lasting hydration."
              </p>
              <p className="font-semibold text-gray-800">Sophia L.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(4)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
                <FaStar className="text-gray-300" />
              </div>
              <p className="text-gray-600 mb-4">
                "So refreshing! I love using this in the morning as part of my routine. The subtle tint is perfect for a natural look, and the formula isn't sticky at all."
              </p>
              <p className="font-semibold text-gray-800">Hannah M.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4 text-gray-800"
            >
              Join Our Newsletter
            </motion.h2>
            <p className="text-gray-600 mb-8">Stay updated with our latest products, offers, and beauty tips.</p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-300"
                required
              />
              <button 
                type="submit" 
                className="btn-primary px-6 py-3 rounded-full font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
