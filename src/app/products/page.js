'use client';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FaFilter, FaTimes, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
import ProductCard from '../../components/ProductCard';

export default function ProductsPage() {
  const products = useSelector((state) => state.products.products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    priceRange: [0, 100],
    inStock: false,
    searchTerm: '',
    sortBy: 'name-asc'
  });
  const [showFilters, setShowFilters] = useState(false);

  // Apply filters
  useEffect(() => {
    let result = [...products];
    
    // Apply search filter
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchLower) || 
        product.description.toLowerCase().includes(searchLower)
      );
    }
    
    // Apply price range filter
    result = result.filter(product => 
      product.price >= filters.priceRange[0] && 
      product.price <= filters.priceRange[1]
    );
    
    // Apply in-stock filter
    if (filters.inStock) {
      result = result.filter(product => product.stock > 0);
    }
    
    // Apply sorting
    switch (filters.sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'popular':
        result.sort((a, b) => {
          const aRating = a.reviews.reduce((sum, review) => sum + review.rating, 0) / (a.reviews.length || 1);
          const bRating = b.reviews.reduce((sum, review) => sum + review.rating, 0) / (b.reviews.length || 1);
          return bRating - aRating;
        });
        break;
      default:
        break;
    }
    
    setFilteredProducts(result);
  }, [products, filters]);

  const handlePriceChange = (e, index) => {
    const newPriceRange = [...filters.priceRange];
    newPriceRange[index] = Number(e.target.value);
    setFilters({
      ...filters,
      priceRange: newPriceRange
    });
  };

  const handleSortChange = (e) => {
    setFilters({
      ...filters,
      sortBy: e.target.value
    });
  };

  const handleSearchChange = (e) => {
    setFilters({
      ...filters,
      searchTerm: e.target.value
    });
  };

  const handleInStockChange = (e) => {
    setFilters({
      ...filters,
      inStock: e.target.checked
    });
  };

  const clearFilters = () => {
    setFilters({
      priceRange: [0, 100],
      inStock: false,
      searchTerm: '',
      sortBy: 'name-asc'
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-center text-gray-800"
      >
        Our Products
      </motion.h1>

      {/* Filters and Search Bar */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search products..."
              value={filters.searchTerm}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
            {filters.searchTerm && (
              <button
                onClick={() => setFilters({ ...filters, searchTerm: '' })}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <FaTimes />
              </button>
            )}
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-rose-100 text-rose-600 rounded-full hover:bg-rose-200 transition-colors"
            >
              <FaFilter />
              Filters
              {(filters.priceRange[0] > 0 || filters.priceRange[1] < 100 || filters.inStock) && (
                <span className="bg-rose-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  !
                </span>
              )}
            </button>

            <div className="relative">
              <select
                value={filters.sortBy}
                onChange={handleSortChange}
                className="appearance-none px-4 py-2 pr-8 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white"
              >
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
                <option value="popular">Most Popular</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                {filters.sortBy.includes('asc') ? <FaSortAmountUp /> : <FaSortAmountDown />}
              </div>
            </div>
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-4 rounded-lg shadow-md mb-4"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Filters</h3>
              <button
                onClick={clearFilters}
                className="text-sm text-rose-500 hover:text-rose-700"
              >
                Clear All
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium mb-2">Price Range</h4>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <span className="mr-2 text-gray-600">$</span>
                    <input
                      type="number"
                      min="0"
                      max={filters.priceRange[1]}
                      value={filters.priceRange[0]}
                      onChange={(e) => handlePriceChange(e, 0)}
                      className="w-20 px-2 py-1 border border-gray-300 rounded"
                    />
                  </div>
                  <span className="text-gray-400">to</span>
                  <div className="flex items-center">
                    <span className="mr-2 text-gray-600">$</span>
                    <input
                      type="number"
                      min={filters.priceRange[0]}
                      max="100"
                      value={filters.priceRange[1]}
                      onChange={(e) => handlePriceChange(e, 1)}
                      className="w-20 px-2 py-1 border border-gray-300 rounded"
                    />
                  </div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={filters.priceRange[1]}
                  onChange={(e) => handlePriceChange(e, 1)}
                  className="w-full mt-2"
                />
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Availability</h4>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.inStock}
                    onChange={handleInStockChange}
                    className="mr-2 h-4 w-4 text-rose-500 focus:ring-rose-400"
                  />
                  <span>In Stock Only</span>
                </label>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Results Count */}
      <p className="text-gray-600 mb-6">
        Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
      </p>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">No products found</h3>
          <p className="text-gray-600">Try adjusting your filters or search term</p>
        </div>
      )}
    </div>
  );
}
