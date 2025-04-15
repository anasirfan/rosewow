'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaRecycle, FaLeaf, FaWater, FaSeedling, FaHandsHelping } from 'react-icons/fa';

export default function SustainabilityPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Commitment to Sustainability</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At RoseWow, sustainability isn't just a buzzword—it's at the heart of everything we do. 
          Discover how we're working to create beautiful products that respect our planet.
        </p>
      </motion.div>
      
      {/* Sustainability Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision for a Greener Future</h2>
          
          <p className="text-gray-700 mb-4">
            We believe that beauty and sustainability go hand in hand. Our vision is to create products that not only enhance your natural beauty but also contribute to a healthier planet. From ingredient sourcing to packaging design, we consider the environmental impact of every decision we make.
          </p>
          
          <p className="text-gray-700 mb-4">
            By 2026, we aim to achieve carbon neutrality across our entire supply chain. We're already making significant progress with renewable energy in our production facilities, sustainable sourcing practices, and innovative packaging solutions that minimize waste.
          </p>
          
          <p className="text-gray-700">
            When you choose RoseWow, you're not just choosing a lip balm—you're supporting a movement toward more responsible beauty practices that respect both people and planet.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative h-96 rounded-lg overflow-hidden order-1 md:order-2"
        >
          <Image 
            src="/velvet-rose-2.jpeg" 
            alt="Sustainable rose garden" 
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>
        </motion.div>
      </div>
      
      {/* Our Practices */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-16"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl font-bold text-gray-800 text-center mb-10"
        >
          Our Sustainable Practices
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            variants={itemVariants}
            className="bg-green-50 p-6 rounded-lg"
          >
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-sm">
              <FaLeaf className="text-green-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Ethical Sourcing</h3>
            <p className="text-gray-700 mb-4">
              We work directly with small-scale organic rose farms that use sustainable agricultural practices. Our roses are grown without harmful pesticides or synthetic fertilizers, protecting both the environment and the farmers who cultivate them.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Fair trade partnerships with local farmers
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Organic cultivation methods
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Biodiversity preservation in growing regions
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-green-50 p-6 rounded-lg"
          >
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-sm">
              <FaRecycle className="text-green-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Eco-Friendly Packaging</h3>
            <p className="text-gray-700 mb-4">
              Our packaging is designed with the planet in mind. We use recycled materials whenever possible and ensure that all our packaging components are either recyclable, biodegradable, or compostable.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Recycled and recyclable paper cartons
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Biodegradable lip balm tubes
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Plastic-free shipping materials
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-green-50 p-6 rounded-lg"
          >
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-sm">
              <FaWater className="text-green-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Water Conservation</h3>
            <p className="text-gray-700 mb-4">
              Water is a precious resource, and we're committed to using it responsibly. Our production processes are designed to minimize water usage, and we support water conservation initiatives in the communities where we operate.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Low-water manufacturing processes
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Rainwater harvesting at our facilities
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Support for clean water projects globally
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Carbon Footprint */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white p-8 rounded-lg shadow-md mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Carbon Footprint</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-4">
              We're transparent about our environmental impact and are actively working to reduce our carbon footprint. Since 2022, we've been measuring our emissions across all aspects of our business, from ingredient sourcing to product delivery.
            </p>
            
            <p className="text-gray-700 mb-4">
              Our current initiatives include:
            </p>
            
            <ul className="text-gray-700 space-y-2 mb-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Using renewable energy in our production facility
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Optimizing shipping routes to reduce transportation emissions
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Offsetting unavoidable emissions through verified carbon offset projects
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Encouraging remote work to reduce commuting emissions
              </li>
            </ul>
            
            <p className="text-gray-700">
              We publish our carbon footprint report annually and are committed to continuous improvement in this area.
            </p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Progress</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">Carbon Emissions Reduction</span>
                  <span className="text-green-600 font-medium">32%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '32%' }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">Since 2022</p>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">Renewable Energy Usage</span>
                  <span className="text-green-600 font-medium">78%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '78%' }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">Of total energy consumption</p>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">Sustainable Packaging</span>
                  <span className="text-green-600 font-medium">91%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '91%' }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">Recyclable or biodegradable</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Our Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Our Certifications</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-green-50 rounded-full flex items-center justify-center">
              <FaLeaf className="text-green-600 text-3xl" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Certified Organic</h3>
            <p className="text-gray-600 text-sm">
              Our ingredients meet strict organic standards, free from synthetic pesticides and fertilizers.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-green-50 rounded-full flex items-center justify-center">
              <FaSeedling className="text-green-600 text-3xl" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Cruelty-Free</h3>
            <p className="text-gray-600 text-sm">
              We never test on animals and are certified by Leaping Bunny and PETA.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-green-50 rounded-full flex items-center justify-center">
              <FaRecycle className="text-green-600 text-3xl" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">B Corp Certified</h3>
            <p className="text-gray-600 text-sm">
              We meet the highest standards of social and environmental performance.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-green-50 rounded-full flex items-center justify-center">
              <FaHandsHelping className="text-green-600 text-3xl" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Fair Trade</h3>
            <p className="text-gray-600 text-sm">
              We ensure fair wages and safe working conditions throughout our supply chain.
            </p>
          </div>
        </div>
      </motion.div>
      
      {/* Environmental Initiatives */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Our Environmental Initiatives</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Reforestation Project</h3>
            <p className="text-gray-700 mb-4">
              For every order placed, we plant a tree through our partnership with global reforestation organizations. 
              To date, we've planted over 50,000 trees in areas affected by deforestation.
            </p>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image 
                src="/velvet-rose-1.jpeg" 
                alt="Reforestation project" 
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Recycling Program</h3>
            <p className="text-gray-700 mb-4">
              Our "Return & Renew" program encourages customers to send back empty product containers for proper recycling. 
              As a thank you, participants receive a discount on their next purchase.
            </p>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image 
                src="/petal-kiss-2.jpeg" 
                alt="Recycling program" 
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Join Our Sustainability Journey */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-green-50 p-8 md:p-12 rounded-lg text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Our Sustainability Journey</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Sustainability is a continuous journey, and we're always looking for ways to improve. 
          We welcome your ideas and feedback as we work together toward a more sustainable future.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            href="/contact"
            className="btn-primary px-8 py-3 rounded-full inline-flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Share Your Ideas
          </motion.a>
          <motion.a
            href="/products"
            className="bg-white text-green-600 border border-green-200 px-8 py-3 rounded-full inline-flex items-center justify-center hover:bg-green-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Sustainable Products
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
