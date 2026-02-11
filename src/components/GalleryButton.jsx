import React from 'react';
import { Link } from 'react-router-dom';

const GalleryButton = ({ children, variant = 'dark', className = '', to, ...props }) => {
  const variants = {
    dark: 'bg-black text-white hover:bg-gray-800',
    light: 'border border-black text-black hover:bg-black hover:text-white',
  };
  
  const buttonClass = `px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest transition-all duration-500 ${variants[variant]} ${className}`;
  
  if (to) {
    return (
      <Link to={to} className={buttonClass}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default GalleryButton;
