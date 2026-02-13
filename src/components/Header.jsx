import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import ArtBadge from './ArtBadge';

const Header = ({ onOpenPersonnel }) => {
  return (
    <header className="pt-32 sm:pt-40 md:pt-48 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl">
          <ArtBadge>Archive Volume</ArtBadge>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif leading-[0.9] mb-6 sm:mb-8">
            Fragments of our <br />
            <span className="italic ml-[5vw] sm:ml-[10vw]">Story.</span>
          </h2>
          <div className="flex flex-col md:flex-row md:items-center gap-4 sm:gap-6 md:gap-8 border-t border-black pt-6 sm:pt-8">
            <p className="text-xs sm:text-sm text-gray-500 max-w-md uppercase tracking-wide leading-relaxed">
              Koleksi momen, tawa, dan perjuangan kami. Selamat datang di pameran perjalanan kami selama tiga tahun.
            </p>
            
            <button 
              onClick={onOpenPersonnel}
              className="group flex items-center gap-4 border border-black/20 px-6 py-3 hover:bg-black hover:text-white transition-all duration-700 overflow-hidden relative"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] font-light z-10">Buka Galeri</span>
              <div className="w-8 h-[1px] bg-current transition-all duration-500 group-hover:w-12 z-10" />
              <ChevronRight size={16} className="z-10" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
