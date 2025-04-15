'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);
  
  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const faqItems = [
    {
      question: "What makes RoseWow lip balms different?",
      answer: "RoseWow lip balms are crafted with real rose extracts and premium natural ingredients. Our unique formulation provides long-lasting hydration while delivering subtle scents and tints derived from real roses. We prioritize sustainability in our ingredients and packaging, ensuring you get beauty products that are as kind to the planet as they are to your lips."
    },
    {
      question: "Are RoseWow products tested on animals?",
      answer: "Absolutely not. RoseWow is proudly cruelty-free. We never test our products on animals, and we work only with suppliers who share our commitment to ethical practices. Our products are certified cruelty-free, allowing you to enjoy beautiful lips with a clear conscience."
    },
    {
      question: "What ingredients do you use in your lip balms?",
      answer: "Our lip balms feature premium natural ingredients including shea butter, coconut oil, beeswax, vitamin E, and genuine rose extracts. We avoid harmful chemicals like parabens, phthalates, and synthetic fragrances. Each variant contains slightly different ingredients to achieve its unique properties, but all adhere to our strict quality and purity standards."
    },
    {
      question: "How long do RoseWow lip balms last?",
      answer: "With normal daily use, a single RoseWow lip balm typically lasts 2-3 months. Our formula is designed to provide long-lasting hydration, meaning you don't need to reapply as frequently as with other brands. The shelf life of an unopened product is 24 months from the manufacturing date, which is printed on the packaging."
    },
    {
      question: "Are your products suitable for sensitive skin?",
      answer: "Yes, our products are formulated with sensitive skin in mind. We use gentle, natural ingredients and avoid common irritants. However, everyone's skin is unique, so we recommend checking the ingredient list if you have specific allergies. If you experience any irritation, discontinue use immediately."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes! We ship to most countries worldwide. International shipping typically takes 7-14 business days, depending on your location and local customs processing. Please note that international orders may be subject to import duties and taxes, which are the responsibility of the recipient."
    },
    {
      question: "What is your return policy?",
      answer: "We want you to be completely satisfied with your purchase. If you're not happy with your RoseWow products for any reason, you can return unused items within 30 days of delivery for a full refund or exchange. For hygiene reasons, we cannot accept returns of opened or used lip products unless they are defective."
    },
    {
      question: "Are RoseWow products vegan?",
      answer: "Most of our products are vegan, but our classic formulations do contain beeswax. We clearly label our vegan options on the product pages. We're constantly working on expanding our vegan range to offer more choices for our customers who prefer completely plant-based products."
    },
    {
      question: "How should I store my lip balm?",
      answer: "For optimal performance, store your RoseWow lip balm at room temperature away from direct sunlight. Extreme temperatures can affect the texture and performance of the product. Avoid leaving your lip balm in hot cars or cold environments for extended periods."
    },
    {
      question: "Do you offer wholesale or bulk ordering options?",
      answer: "Yes, we offer wholesale options for retailers and special bulk pricing for events such as weddings or corporate gifts. Please contact our sales team at wholesale@rosewow.com for more information and a customized quote based on your specific needs."
    }
  ];
  
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
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find answers to the most common questions about RoseWow products, 
          ordering, shipping, and more.
        </p>
      </motion.div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto"
      >
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="mb-4"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className={`w-full text-left p-5 rounded-lg flex justify-between items-center transition-colors ${
                openIndex === index 
                  ? 'bg-rose-100 text-rose-800' 
                  : 'bg-white hover:bg-rose-50 text-gray-800'
              } border border-gray-200`}
            >
              <span className="font-medium text-lg">{item.question}</span>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-5 bg-white border-x border-b border-gray-200 rounded-b-lg">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center mt-12 bg-rose-50 p-8 rounded-lg max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Still Have Questions?</h2>
        <p className="text-gray-600 mb-6">
          Can't find the answer you're looking for? Please reach out to our customer support team.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            href="/contact"
            className="btn-primary px-6 py-3 rounded-full inline-flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
          <motion.a
            href="mailto:support@rosewow.com"
            className="bg-white text-rose-600 border border-rose-200 px-6 py-3 rounded-full inline-flex items-center justify-center hover:bg-rose-50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Email Support
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
