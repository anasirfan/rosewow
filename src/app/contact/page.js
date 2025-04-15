'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send the form data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };
  
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have a question about our products, 
          need help with an order, or just want to say hello, we're here for you.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-rose-50 p-8 rounded-lg shadow-sm"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl font-bold text-gray-800 mb-6"
          >
            Get in Touch
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="flex items-start mb-6"
          >
            <div className="bg-rose-100 p-3 rounded-full mr-4">
              <FaEnvelope className="text-rose-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Email Us</h3>
              <p className="text-gray-600">hello@rosewow.com</p>
              <p className="text-gray-600">support@rosewow.com</p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex items-start mb-6"
          >
            <div className="bg-rose-100 p-3 rounded-full mr-4">
              <FaPhone className="text-rose-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Call Us</h3>
              <p className="text-gray-600">+1 (800) ROSE-WOW</p>
              <p className="text-gray-600">Monday-Friday, 9am-5pm EST</p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex items-start"
          >
            <div className="bg-rose-100 p-3 rounded-full mr-4">
              <FaMapMarkerAlt className="text-rose-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Visit Us</h3>
              <p className="text-gray-600">123 Rose Garden Lane</p>
              <p className="text-gray-600">Blossom City, BC 12345</p>
            </div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="mt-8 bg-white p-6 rounded-lg shadow-sm"
          >
            <h3 className="font-semibold text-gray-800 mb-2">Business Hours</h3>
            <div className="grid grid-cols-2 gap-2">
              <p className="text-gray-600">Monday-Friday:</p>
              <p className="text-gray-600">9:00 AM - 5:00 PM</p>
              <p className="text-gray-600">Saturday:</p>
              <p className="text-gray-600">10:00 AM - 3:00 PM</p>
              <p className="text-gray-600">Sunday:</p>
              <p className="text-gray-600">Closed</p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
          
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
            >
              <p>Thank you for your message! We'll get back to you soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="w-full btn-primary py-3 rounded-md flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane className="mr-2" />
                Send Message
              </motion.button>
            </form>
          )}
          
          <div className="mt-8 text-sm text-gray-500">
            <p>
              By submitting this form, you agree to our{' '}
              <a href="#" className="text-rose-500 hover:underline">Privacy Policy</a>{' '}
              and consent to being contacted regarding your inquiry.
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Us</h2>
        <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
          {/* In a real app, you would integrate Google Maps or another map provider here */}
          <div className="w-full h-full flex items-center justify-center bg-rose-50">
            <div className="text-center">
              <FaMapMarkerAlt className="text-rose-500 text-4xl mx-auto mb-4" />
              <p className="text-gray-700">Map integration would be here in a production environment</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
