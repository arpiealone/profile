import React from 'react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-[90] bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <div className="font-serif italic text-lg sm:text-xl">RPL 1.</div>
        <div className="flex gap-4 sm:gap-6 md:gap-8 text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium">
          <a href="#x" className="hover:text-gray-400">Class X</a>
          <a href="#xi" className="hover:text-gray-400">Class XI</a>
          <a href="#xii" className="hover:text-gray-400">Class XII</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
