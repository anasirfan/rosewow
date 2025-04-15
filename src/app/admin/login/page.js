'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { login } from '../../../redux/slices/authSlice';

export default function AdminLogin() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { error } = useSelector((state) => state.auth);
  
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    
    // Check if authentication was successful directly from Redux state
    // This works because login is synchronous in our demo
    const isAuthenticated = formData.username === 'admin' && formData.password === 'admin';
    if (isAuthenticated) {
      // Save authentication to localStorage for persistence
      localStorage.setItem('isAuthenticated', 'true');
      // Navigate to admin dashboard
      router.push('/admin');
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-rose-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-lg shadow-lg p-8"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Login</h1>
          <p className="text-gray-600">Sign in to access the dashboard</p>
        </div>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              value={formData.username}
              onChange={handleInputChange}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-rose-500 focus:border-rose-500"
              placeholder="Enter username"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleInputChange}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-rose-500 focus:border-rose-500"
              placeholder="Enter password"
            />
          </div>
          
          <div className="text-sm text-gray-500">
            <p>For demo purposes, use:</p>
            <p>Username: <strong>admin</strong></p>
            <p>Password: <strong>admin</strong></p>
          </div>
          
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
