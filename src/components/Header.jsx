import React from 'react';
import { ArrowRight } from 'lucide-react';
import ArtBadge from './ArtBadge';

const Header = () => {
  return (
    <header className="min-h-[70vh] sm:min-h-[80vh] flex items-end pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6">
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
            <ArrowRight className="hidden md:block" size={40} strokeWidth={0.5} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
