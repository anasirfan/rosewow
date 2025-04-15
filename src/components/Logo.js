'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Logo = ({ variant = 'default', size = 'medium' }) => {
  // Size classes
  const sizeClasses = {
    small: 'text-xl',
    medium: 'text-2xl',
    large: 'text-3xl'
  };
  
  // Variant classes
  const variantClasses = {
    default: 'text-rose-500',
    light: 'text-white',
    dark: 'text-gray-800'
  };
  
  // Animation variants
  const logoVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };
  
  return (
    <Link href="/">
      <motion.div
        className={`font-bold ${sizeClasses[size]} ${variantClasses[variant]} flex items-center`}
        whileHover="hover"
        variants={logoVariants}
      >
        <motion.span 
          className="inline-block mr-1"
          animate={{ rotate: [0, 5, 0, -5, 0] }}
          transition={{ 
            duration: 2, 
            ease: "easeInOut", 
            repeat: Infinity, 
            repeatDelay: 5 
          }}
        >
          🌹
        </motion.span>
        <span className="relative">
          Rose
          <motion.span 
            className="text-rose-600"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ 
              duration: 2, 
              ease: "easeInOut", 
              repeat: Infinity 
            }}
          >
            Wow
          </motion.span>
          <motion.div 
            className="absolute -bottom-1 left-0 h-0.5 bg-rose-400"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: "easeOut"
            }}
          />
        </span>
      </motion.div>
    </Link>
  );
};

export default Logo;
