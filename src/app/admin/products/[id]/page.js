'use client';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaSave, FaArrowLeft, FaPlus, FaTrash } from 'react-icons/fa';
import AdminSidebar from '../../../../components/AdminSidebar';
import { updateProduct } from '../../../../redux/slices/productSlice';

export default function EditProduct() {
  const router = useRouter();
  const dispatch = useDispatch();
  const params = useParams();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const products = useSelector((state) => state.products.products);
  
  const [activeTab, setActiveTab] = useState('products');
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    stock: 0,
    features: [],
    tagline: '',
    ingredients: '',
    variants: []
  });
  const [newFeature, setNewFeature] = useState('');
  const [newVariant, setNewVariant] = useState({
    name: '',
    color: '#FFB6C1',
    inStock: true
  });
  
  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/admin/login');
    }
  }, [isAuthenticated, router]);
  
  // Load product data
  useEffect(() => {
    if (params.id === 'new') {
      // Creating a new product
      setProduct({
        id: 'new',
        name: 'New Product',
        description: '',
        price: 0,
        stock: 0,
        features: [],
        tagline: '',
        ingredients: '',
        variants: [],
        images: ['/velvet-rose-1.jpeg', '/velvet-rose-2.jpeg'],
        reviews: []
      });
      setFormData({
        name: 'New Product',
        description: '',
        price: 0,
        stock: 0,
        features: [],
        tagline: '',
        ingredients: '',
        variants: []
      });
    } else {
      // Editing existing product
      const foundProduct = products.find(p => p.id === params.id);
      if (foundProduct) {
        setProduct(foundProduct);
        setFormData({
          name: foundProduct.name,
          description: foundProduct.description,
          price: foundProduct.price,
          stock: foundProduct.stock,
          features: [...foundProduct.features],
          tagline: foundProduct.tagline,
          ingredients: foundProduct.ingredients,
          variants: [...foundProduct.variants]
        });
      } else {
        router.push('/admin/products');
      }
    }
  }, [params.id, products, router]);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'price' || name === 'stock' ? parseFloat(value) : value
    });
  };
  
  const handleAddFeature = () => {
    if (newFeature.trim()) {
      setFormData({
        ...formData,
        features: [...formData.features, newFeature.trim()]
      });
      setNewFeature('');
    }
  };
  
  const handleRemoveFeature = (index) => {
    const updatedFeatures = [...formData.features];
    updatedFeatures.splice(index, 1);
    setFormData({
      ...formData,
      features: updatedFeatures
    });
  };
  
  const handleVariantInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewVariant({
      ...newVariant,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleAddVariant = () => {
    if (newVariant.name.trim()) {
      const variantId = params.id === 'new' 
        ? `new-${formData.variants.length + 1}`
        : `${params.id}-${formData.variants.length + 1}`;
      
      setFormData({
        ...formData,
        variants: [
          ...formData.variants, 
          { 
            ...newVariant, 
            id: variantId
          }
        ]
      });
      
      setNewVariant({
        name: '',
        color: '#FFB6C1',
        inStock: true
      });
    }
  };
  
  const handleRemoveVariant = (index) => {
    const updatedVariants = [...formData.variants];
    updatedVariants.splice(index, 1);
    setFormData({
      ...formData,
      variants: updatedVariants
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (params.id === 'new') {
      // Handle adding new product
      dispatch(addProduct(formData));
    } else {
      // Handle updating existing product
      dispatch(updateProduct({
        id: params.id,
        ...formData
      }));
    }
    
    router.push('/admin/products');
  };
  
  if (!isAuthenticated || !product) {
    return null; // Don't render anything while redirecting or loading
  }
  
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <Link 
              href="/admin/products" 
              className="mr-4 text-gray-500 hover:text-gray-700"
            >
              <FaArrowLeft size={18} />
            </Link>
            <h1 className="text-2xl font-bold">
              {params.id === 'new' ? 'Add New Product' : `Edit Product: ${product.name}`}
            </h1>
          </div>
          
          <button 
            onClick={handleSubmit}
            className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-md flex items-center"
          >
            <FaSave className="mr-2" />
            Save Product
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Information */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
                
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
                    required
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                      Price ($)
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      min="0"
                      step="0.01"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-1">
                      Stock
                    </label>
                    <input
                      type="number"
                      id="stock"
                      name="stock"
                      value={formData.stock}
                      onChange={handleInputChange}
                      min="0"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="tagline" className="block text-sm font-medium text-gray-700 mb-1">
                    Tagline
                  </label>
                  <input
                    type="text"
                    id="tagline"
                    name="tagline"
                    value={formData.tagline}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-1">
                    Ingredients
                  </label>
                  <textarea
                    id="ingredients"
                    name="ingredients"
                    value={formData.ingredients}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
                  ></textarea>
                </div>
              </div>
              
              {/* Features and Variants */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Features & Variants</h2>
                
                {/* Features */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Features
                  </label>
                  
                  <div className="space-y-2 mb-3">
                    {formData.features.map((feature, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
                        <span>{feature}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveFeature(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTrash size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex">
                    <input
                      type="text"
                      value={newFeature}
                      onChange={(e) => setNewFeature(e.target.value)}
                      placeholder="Add a feature"
                      className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-rose-300"
                    />
                    <button
                      type="button"
                      onClick={handleAddFeature}
                      className="bg-rose-500 hover:bg-rose-600 text-white px-3 py-2 rounded-r-md"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
                
                {/* Variants */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Variants
                  </label>
                  
                  <div className="space-y-3 mb-4">
                    {formData.variants.map((variant, index) => (
                      <div key={variant.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                        <div className="flex items-center">
                          <div 
                            className="w-6 h-6 rounded-full mr-3"
                            style={{ backgroundColor: variant.color }}
                          ></div>
                          <div>
                            <p className="font-medium">{variant.name}</p>
                            <p className="text-xs text-gray-500">
                              {variant.inStock ? 'In Stock' : 'Out of Stock'}
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveVariant(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTrash size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-md">
                    <h3 className="text-sm font-medium mb-2">Add New Variant</h3>
                    
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div>
                        <label htmlFor="variantName" className="block text-xs text-gray-500 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="variantName"
                          name="name"
                          value={newVariant.name}
                          onChange={handleVariantInputChange}
                          placeholder="e.g. Classic Rose"
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="variantColor" className="block text-xs text-gray-500 mb-1">
                          Color
                        </label>
                        <input
                          type="color"
                          id="variantColor"
                          name="color"
                          value={newVariant.color}
                          onChange={handleVariantInputChange}
                          className="w-full h-9 px-1 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-3">
                      <input
                        type="checkbox"
                        id="variantInStock"
                        name="inStock"
                        checked={newVariant.inStock}
                        onChange={handleVariantInputChange}
                        className="h-4 w-4 text-rose-500 focus:ring-rose-400 mr-2"
                      />
                      <label htmlFor="variantInStock" className="text-sm text-gray-700">
                        In Stock
                      </label>
                    </div>
                    
                    <button
                      type="button"
                      onClick={handleAddVariant}
                      className="w-full bg-rose-500 hover:bg-rose-600 text-white px-3 py-2 rounded-md text-sm"
                    >
                      Add Variant
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
