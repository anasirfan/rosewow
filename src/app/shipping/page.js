'use client';

import { motion } from 'framer-motion';
import { FaShippingFast, FaExchangeAlt, FaRegClock, FaGlobeAmericas, FaBoxOpen } from 'react-icons/fa';

export default function ShippingPage() {
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
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Shipping & Returns</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about our shipping policies, delivery timeframes, 
          and hassle-free return process.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Shipping Information */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <motion.div variants={itemVariants} className="flex items-center mb-6">
            <div className="bg-rose-100 p-3 rounded-full mr-4">
              <FaShippingFast className="text-rose-600 text-xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Shipping Information</h2>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Domestic Shipping</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-medium text-gray-700">Standard Shipping</p>
                  <p className="text-gray-600">3-5 business days</p>
                  <p className="text-rose-600">$4.99</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Express Shipping</p>
                  <p className="text-gray-600">1-2 business days</p>
                  <p className="text-rose-600">$9.99</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Free standard shipping on all orders over $35.
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">International Shipping</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-medium text-gray-700">Standard International</p>
                  <p className="text-gray-600">7-14 business days</p>
                  <p className="text-rose-600">$14.99</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Express International</p>
                  <p className="text-gray-600">3-5 business days</p>
                  <p className="text-rose-600">$24.99</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                International customers may be subject to customs fees and import duties, 
                which are the responsibility of the recipient.
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Shipping Policies</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-rose-500 mr-2">•</span>
                Orders are processed within 1-2 business days.
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 mr-2">•</span>
                Shipping times are estimates and not guaranteed.
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 mr-2">•</span>
                We ship Monday through Friday, excluding holidays.
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 mr-2">•</span>
                Tracking information will be provided via email once your order ships.
              </li>
              <li className="flex items-start">
                <span className="text-rose-500 mr-2">•</span>
                We currently ship to over 50 countries worldwide.
              </li>
            </ul>
          </motion.div>
        </motion.div>
        
        {/* Returns & Exchanges */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <motion.div variants={itemVariants} className="flex items-center mb-6">
            <div className="bg-rose-100 p-3 rounded-full mr-4">
              <FaExchangeAlt className="text-rose-600 text-xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Returns & Exchanges</h2>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Return Policy</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-4">
                We want you to be completely satisfied with your purchase. If you're not happy with your RoseWow products, 
                we offer a simple return process:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-rose-500 mr-2">•</span>
                  Returns accepted within 30 days of delivery.
                </li>
                <li className="flex items-start">
                  <span className="text-rose-500 mr-2">•</span>
                  Items must be unused and in original packaging.
                </li>
                <li className="flex items-start">
                  <span className="text-rose-500 mr-2">•</span>
                  For hygiene reasons, we cannot accept returns of opened lip products unless defective.
                </li>
                <li className="flex items-start">
                  <span className="text-rose-500 mr-2">•</span>
                  Return shipping costs are the responsibility of the customer unless the item is defective.
                </li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Exchange Process</h3>
            <p className="text-gray-700 mb-4">
              Prefer a different product or variant? We make exchanges easy:
            </p>
            <ol className="space-y-3 text-gray-700 list-decimal pl-5 mb-6">
              <li>
                Contact our customer service team at returns@rosewow.com with your order number and exchange request.
              </li>
              <li>
                Receive a prepaid return label and instructions for sending back your original item.
              </li>
              <li>
                Once we receive your return, we'll ship out your exchange item promptly.
              </li>
              <li>
                You'll receive tracking information for your new item via email.
              </li>
            </ol>
            
            <div className="bg-rose-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Refund Information</h4>
              <p className="text-gray-700 mb-2">
                Refunds will be issued to the original payment method within 5-7 business days after we receive your return.
              </p>
              <p className="text-gray-700">
                Original shipping costs are non-refundable unless the return is due to our error or a defective product.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Shipping Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Why Shop With RoseWow</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaRegClock className="text-rose-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Processing</h3>
            <p className="text-gray-600">
              All orders are processed within 1-2 business days to ensure quick delivery.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaGlobeAmericas className="text-rose-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Worldwide Shipping</h3>
            <p className="text-gray-600">
              We deliver our products to customers around the globe with reliable tracking.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaBoxOpen className="text-rose-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Eco-Friendly Packaging</h3>
            <p className="text-gray-600">
              All orders are shipped in sustainable packaging that's kind to the planet.
            </p>
          </div>
        </div>
      </motion.div>
      
      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-rose-50 p-8 rounded-lg max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">How can I track my order?</h3>
            <p className="text-gray-700">
              Once your order ships, you'll receive a tracking number via email. You can also view your order status 
              by logging into your account on our website.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Do you ship to PO boxes?</h3>
            <p className="text-gray-700">
              Yes, we ship to PO boxes for standard shipping options. However, express shipping may require a physical address.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">What if my package is damaged during shipping?</h3>
            <p className="text-gray-700">
              If your package arrives damaged, please take photos and contact our customer service team within 48 hours. 
              We'll arrange a replacement shipment at no additional cost.
            </p>
          </div>
          
          <div className="text-center mt-8">
            <motion.a
              href="/contact"
              className="btn-primary px-6 py-3 rounded-full inline-flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Have More Questions? Contact Us
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
