'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaLeaf, FaHeart, FaSeedling, FaHandHoldingHeart } from 'react-icons/fa';

export default function AboutPage() {
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
  
  const teamMembers = [
    {
      name: "Emma Rose",
      role: "Founder & CEO",
      bio: "Emma founded RoseWow with a passion for natural beauty and sustainability. With a background in botanical science, she developed our signature rose-infused formulas.",
      image: "/velvet-rose-1.jpeg"
    },
    {
      name: "Sophia Chen",
      role: "Chief Product Officer",
      bio: "Sophia brings 15 years of cosmetic formulation experience to RoseWow. She leads our product development team with a focus on innovation and quality.",
      image: "/petal-kiss-1.jpeg"
    },
    {
      name: "James Wilson",
      role: "Sustainability Director",
      bio: "James ensures that every aspect of our business, from sourcing to packaging, meets our strict environmental standards and ethical guidelines.",
      image: "/velvet-rose-2.jpeg"
    }
  ];
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Story</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover the passion and purpose behind RoseWow, where beauty meets sustainability 
          in every product we create.
        </p>
      </motion.div>
      
      {/* Brand Story */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative h-96 rounded-lg overflow-hidden"
        >
          <Image 
            src="/velvet-rose-1.jpeg" 
            alt="RoseWow Founder in rose garden" 
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rose-900/50 to-transparent flex items-end">
            <div className="p-6 text-white">
              <p className="italic font-light">
                "Beauty should nurture both the person and the planet."
              </p>
              <p className="font-medium mt-2">— Emma Rose, Founder</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-gray-800 mb-6"
          >
            From Garden to Lips
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-700 mb-4"
          >
            RoseWow began in 2020 with a simple idea: create lip care products that harness the natural beauty and benefits of roses while respecting the environment. Our founder, Emma Rose, grew up surrounded by her grandmother's rose garden and was inspired by the gentle power of these timeless flowers.
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-700 mb-4"
          >
            After years of research and development, Emma created our signature formula that combines premium natural ingredients with genuine rose extracts. What started as small-batch production in her home kitchen has blossomed into a beloved brand known for quality, sustainability, and effectiveness.
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-700"
          >
            Today, RoseWow continues to grow while staying true to our roots. We source our ingredients ethically, create our products responsibly, and give back to environmental causes that protect the natural world that inspires us.
          </motion.p>
        </motion.div>
      </div>
      
      {/* Our Values */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Our Values</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-rose-50 p-6 rounded-lg text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <FaLeaf className="text-rose-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Natural Ingredients</h3>
            <p className="text-gray-600">
              We use only the finest natural ingredients, sourced responsibly and selected for their effectiveness.
            </p>
          </div>
          
          <div className="bg-rose-50 p-6 rounded-lg text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <FaHeart className="text-rose-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Cruelty-Free</h3>
            <p className="text-gray-600">
              We never test on animals and work only with suppliers who share our commitment to ethical practices.
            </p>
          </div>
          
          <div className="bg-rose-50 p-6 rounded-lg text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <FaSeedling className="text-rose-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainability</h3>
            <p className="text-gray-600">
              From recyclable packaging to carbon-neutral shipping, we strive to minimize our environmental footprint.
            </p>
          </div>
          
          <div className="bg-rose-50 p-6 rounded-lg text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <FaHandHoldingHeart className="text-rose-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Giving Back</h3>
            <p className="text-gray-600">
              We donate 5% of our profits to organizations that protect natural habitats and support sustainable farming.
            </p>
          </div>
        </div>
      </motion.div>
      
      {/* Our Team */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Meet Our Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative h-64">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-rose-600 mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Our Process */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Our Process</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-rose-100"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Thoughtful Sourcing</h3>
                <p className="text-gray-600">
                  We carefully select suppliers who share our values of sustainability and ethical practices. 
                  Our roses are grown in pesticide-free environments and harvested at peak freshness.
                </p>
              </motion.div>
              
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-rose-100 border-4 border-white"></div>
              
              <div className="md:w-1/2 md:pl-12"></div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12"></div>
              
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-rose-100 border-4 border-white"></div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:w-1/2 md:pl-12 mb-6 md:mb-0"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Gentle Extraction</h3>
                <p className="text-gray-600">
                  We use a proprietary cold-press method to extract the beneficial oils and essences from rose petals, 
                  preserving their natural properties without harsh chemicals or heat.
                </p>
              </motion.div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Small-Batch Production</h3>
                <p className="text-gray-600">
                  Each batch of RoseWow lip balm is carefully crafted in our studio to ensure the highest quality. 
                  We monitor every step of the process to maintain consistency and excellence.
                </p>
              </motion.div>
              
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-rose-100 border-4 border-white"></div>
              
              <div className="md:w-1/2 md:pl-12"></div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12"></div>
              
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-rose-100 border-4 border-white"></div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="md:w-1/2 md:pl-12"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainable Packaging</h3>
                <p className="text-gray-600">
                  Our packaging is designed to minimize waste while maximizing beauty. We use recyclable materials 
                  and continuously research new ways to reduce our environmental impact.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Join Our Journey */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-rose-50 p-8 md:p-12 rounded-lg text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Our Journey</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We're on a mission to create beauty products that are good for you and the planet. 
          Join our community and be part of the RoseWow story.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            href="/products"
            className="btn-primary px-8 py-3 rounded-full inline-flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Our Products
          </motion.a>
          <motion.a
            href="/contact"
            className="bg-white text-rose-600 border border-rose-200 px-8 py-3 rounded-full inline-flex items-center justify-center hover:bg-rose-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
