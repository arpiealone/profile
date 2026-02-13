import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const CoverScreen = ({ isDismissed }) => {
  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-all duration-1000 pointer-events-none ${isDismissed ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center">
        <h1 className="text-[15vw] sm:text-[12vw] md:text-[10vw] font-serif italic text-white mb-4 sm:mb-8">
          RPL 1
        </h1>
        <p className="text-[10px] sm:text-xs text-white/60 uppercase tracking-[0.3em] sm:tracking-[0.5em]">
          A Visual Archive
        </p>
        <div className={`mt-12 sm:mt-16 md:mt-20 ${isDismissed ? 'opacity-0' : 'opacity-100 animate-bounce'} transition-opacity duration-500`}>
          <ChevronDown className="mx-auto text-white/40" size={32} />
        </div>
      </div>
    </div>
  );
};

export default CoverScreen;
