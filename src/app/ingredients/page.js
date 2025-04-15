'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaLeaf, FaInfoCircle } from 'react-icons/fa';

export default function IngredientsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeIngredient, setActiveIngredient] = useState(null);
  
  const ingredients = [
    {
      id: 'shea-butter',
      name: 'Shea Butter',
      latinName: 'Butyrospermum Parkii',
      description: 'A rich, creamy butter extracted from the nuts of the shea tree. It creates a moisture barrier on your lips and provides deep hydration.',
      benefits: ['Moisturizing', 'Protective', 'Soothing', 'Rich in vitamins A, E, and F'],
      source: 'Sustainably harvested from shea trees in Ghana and Burkina Faso.',
      image: '/velvet-rose-1.jpeg'
    },
    {
      id: 'coconut-oil',
      name: 'Coconut Oil',
      latinName: 'Cocos Nucifera Oil',
      description: 'A lightweight oil that absorbs quickly into the skin, providing immediate hydration and a subtle tropical scent.',
      benefits: ['Moisturizing', 'Antibacterial', 'Antifungal', 'Rich in medium-chain fatty acids'],
      source: 'Cold-pressed from organic coconuts grown in the Philippines.',
      image: '/petal-kiss-1.jpeg'
    },
    {
      id: 'beeswax',
      name: 'Beeswax',
      latinName: 'Cera Alba',
      description: 'A natural wax produced by honey bees that helps seal in moisture while allowing your lips to breathe.',
      benefits: ['Protective barrier', 'Antibacterial', 'Helps retain moisture', 'Gives structure to the balm'],
      source: 'Ethically sourced from small-scale beekeepers who practice sustainable beekeeping.',
      image: '/velvet-rose-2.jpeg'
    },
    {
      id: 'rose-oil',
      name: 'Rose Flower Oil',
      latinName: 'Rosa Damascena Flower Oil',
      description: 'The precious essential oil extracted from rose petals, providing our signature scent and therapeutic benefits.',
      benefits: ['Aromatherapeutic', 'Anti-inflammatory', 'Mood-enhancing', 'Natural fragrance'],
      source: 'Steam-distilled from hand-picked organic Damask roses grown in Bulgaria.',
      image: '/petal-kiss-2.jpeg'
    },
    {
      id: 'vitamin-e',
      name: 'Vitamin E',
      latinName: 'Tocopherol',
      description: 'A powerful antioxidant that helps protect your lips from environmental damage and extends the shelf life of our products naturally.',
      benefits: ['Antioxidant protection', 'Healing', 'Preservative', 'Nourishing'],
      source: 'Derived from non-GMO sunflower oil.',
      image: '/velvet-rose-1.jpeg'
    },
    {
      id: 'rose-extract',
      name: 'Rose Flower Extract',
      latinName: 'Rosa Damascena Flower Extract',
      description: 'A concentrated extract of rose petals that provides soothing and toning properties to your lips.',
      benefits: ['Soothing', 'Toning', 'Hydrating', 'Gentle astringent'],
      source: 'Cold-processed from organic Damask roses grown in our partner farms.',
      image: '/petal-kiss-2.jpeg'
    },
    {
      id: 'sunflower-oil',
      name: 'Sunflower Seed Oil',
      latinName: 'Helianthus Annuus Seed Oil',
      description: 'A light, non-greasy oil rich in vitamins and fatty acids that nourish and protect your lips.',
      benefits: ['Rich in vitamin E', 'Lightweight', 'Non-comedogenic', 'Easily absorbed'],
      source: 'Cold-pressed from organic sunflower seeds grown in the United States.',
      image: '/velvet-rose-2.jpeg'
    },
    {
      id: 'honey-extract',
      name: 'Honey Extract',
      latinName: 'Mel Extract',
      description: 'A natural humectant that draws moisture to your lips and provides antibacterial properties.',
      benefits: ['Humectant', 'Antibacterial', 'Soothing', 'Healing'],
      source: 'Ethically harvested from our partner apiaries that practice sustainable beekeeping.',
      image: '/petal-kiss-1.jpeg'
    },
    {
      id: 'aloe-vera',
      name: 'Aloe Vera Leaf Extract',
      latinName: 'Aloe Barbadensis Leaf Extract',
      description: 'A cooling, soothing extract that helps calm irritated lips and provides gentle hydration.',
      benefits: ['Cooling', 'Soothing', 'Anti-inflammatory', 'Hydrating'],
      source: 'Extracted from organically grown aloe vera plants in Mexico.',
      image: '/velvet-rose-1.jpeg'
    },
    {
      id: 'natural-flavor',
      name: 'Natural Flavor',
      latinName: 'Aroma',
      description: 'A blend of natural extracts and essential oils that give our lip balms their delicious taste and scent.',
      benefits: ['Pleasant taste', 'Enhances experience', 'No synthetic chemicals', 'Complements the rose scent'],
      source: 'Derived from organic fruits, flowers, and plants through various extraction methods.',
      image: '/petal-kiss-2.jpeg'
    },
    {
      id: 'mica',
      name: 'Mica',
      latinName: 'Mica',
      description: 'A naturally occurring mineral that provides a subtle shimmer and color to our tinted lip balms.',
      benefits: ['Natural colorant', 'Subtle shimmer', 'Non-toxic', 'Mineral-based'],
      source: 'Ethically sourced from suppliers who ensure fair labor practices and environmental responsibility.',
      image: '/velvet-rose-2.jpeg'
    },
    {
      id: 'iron-oxides',
      name: 'Iron Oxides',
      latinName: 'CI 77491, CI 77492, CI 77499',
      description: 'Natural minerals used to create the beautiful colors in our tinted lip balms.',
      benefits: ['Natural colorants', 'Stable', 'Non-toxic', 'Variety of shades'],
      source: 'Lab-created using the same chemical structure as naturally occurring iron oxides, ensuring they are free from heavy metal impurities.',
      image: '/petal-kiss-1.jpeg'
    }
  ];
  
  const filteredIngredients = ingredients.filter(ingredient => 
    ingredient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ingredient.latinName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleIngredientClick = (id) => {
    setActiveIngredient(activeIngredient === id ? null : id);
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Natural Ingredients</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At RoseWow, we believe in transparency. Here's a detailed look at every ingredient 
          we use in our products, where they come from, and why we love them.
        </p>
      </motion.div>
      
      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-md mx-auto mb-12"
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Search ingredients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </motion.div>
      
      {/* Our Commitment */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-rose-50 p-6 rounded-lg mb-12"
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
            <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center shadow-sm">
              <FaLeaf className="text-rose-600 text-4xl" />
            </div>
          </div>
          <div className="md:w-3/4 md:pl-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Ingredient Promise</h2>
            <p className="text-gray-700 mb-3">
              We carefully select each ingredient for its quality, efficacy, and sustainability. We never use parabens, 
              phthalates, synthetic fragrances, or any ingredients linked to health or environmental concerns.
            </p>
            <p className="text-gray-700">
              Our formulations are developed with both your wellbeing and the planet in mind, creating products 
              that are gentle on your lips and kind to the earth.
            </p>
          </div>
        </div>
      </motion.div>
      
      {/* Ingredients List */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
      >
        {filteredIngredients.length > 0 ? (
          filteredIngredients.map((ingredient) => (
            <motion.div
              key={ingredient.id}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative h-48">
                <Image 
                  src={ingredient.image} 
                  alt={ingredient.name} 
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-semibold">{ingredient.name}</h3>
                    <p className="text-sm italic">{ingredient.latinName}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-gray-700 mb-4">{ingredient.description}</p>
                
                <button
                  onClick={() => handleIngredientClick(ingredient.id)}
                  className="text-rose-600 hover:text-rose-700 font-medium flex items-center"
                >
                  {activeIngredient === ingredient.id ? 'Show Less' : 'Learn More'}
                  <FaInfoCircle className="ml-2" />
                </button>
                
                <AnimatePresence>
                  {activeIngredient === ingredient.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 overflow-hidden"
                    >
                      <div className="border-t border-gray-200 pt-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
                        <ul className="list-disc pl-5 mb-4 text-gray-700">
                          {ingredient.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                          ))}
                        </ul>
                        
                        <h4 className="font-semibold text-gray-800 mb-2">Source:</h4>
                        <p className="text-gray-700">{ingredient.source}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No ingredients found matching "{searchTerm}"</p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-4 text-rose-600 hover:text-rose-700"
            >
              Clear search
            </button>
          </div>
        )}
      </motion.div>
      
      {/* What We Don't Use */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white p-8 rounded-lg shadow-md mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">What We Don't Use</h2>
        <p className="text-gray-700 mb-6">
          Just as important as what we put in our products is what we leave out. Here's a list of ingredients 
          you'll never find in RoseWow products:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Parabens</h3>
            <p className="text-gray-600 text-sm">
              Synthetic preservatives linked to hormone disruption and other health concerns.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Phthalates</h3>
            <p className="text-gray-600 text-sm">
              Chemical compounds often used in fragrances that may affect reproductive health.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Synthetic Fragrances</h3>
            <p className="text-gray-600 text-sm">
              Artificial scents that can cause allergic reactions and contain undisclosed chemicals.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Petroleum</h3>
            <p className="text-gray-600 text-sm">
              Derived from crude oil, petroleum-based ingredients can clog pores and aren't sustainable.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Synthetic Dyes</h3>
            <p className="text-gray-600 text-sm">
              Artificial colorants that may contain heavy metals and cause skin irritation.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Silicones</h3>
            <p className="text-gray-600 text-sm">
              Synthetic polymers that can create a false sense of hydration without actually moisturizing.
            </p>
          </div>
        </div>
      </motion.div>
      
      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Are your products vegan?</h3>
            <p className="text-gray-700">
              Most of our products are vegan, but our classic formulations do contain beeswax and some contain honey extract. 
              We clearly label our vegan options on the product pages, and we're working on expanding our vegan range.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Are your ingredients organic?</h3>
            <p className="text-gray-700">
              We prioritize organic ingredients whenever possible. Currently, over 85% of our ingredients are certified organic, 
              and we're working toward increasing that percentage. All of our rose extracts and oils come from certified organic roses.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">How do you preserve your products without parabens?</h3>
            <p className="text-gray-700">
              We use natural preservatives like vitamin E (tocopherol) and rosemary extract to keep our products fresh. 
              Our formulations are also designed with the right pH balance to naturally discourage microbial growth.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Are your products safe for sensitive skin?</h3>
            <p className="text-gray-700">
              Yes, our products are formulated with sensitive skin in mind. We avoid common irritants and use gentle, 
              natural ingredients. However, everyone's skin is unique, so we recommend checking the ingredient list if 
              you have specific allergies.
            </p>
          </div>
        </div>
      </motion.div>
      
      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="bg-rose-50 p-8 md:p-12 rounded-lg text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Experience the Difference</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Now that you know what goes into our products, experience the RoseWow difference for yourself. 
          Our natural ingredients work together to create lip balms that not only feel amazing but also 
          care for your lips and the planet.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="/products" 
            className="btn-primary px-8 py-3 rounded-full inline-flex items-center justify-center"
          >
            Shop Now
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
