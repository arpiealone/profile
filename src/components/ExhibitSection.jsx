import React, { useState, useEffect } from 'react';
import ArtBadge from './ArtBadge';
import GalleryButton from './GalleryButton';
import { homeGalleryConfig } from '../data/homeGalleryConfig';

const ExhibitSection = ({ name, level, year, title, description, curator, index }) => {
  const [images, setImages] = useState([null, null, null]);

  useEffect(() => {
    // Load config based on level
    const configImages = homeGalleryConfig[level] || [];
    
    // Ensure we have 3 slots
    const displayImages = [...configImages];
    while (displayImages.length < 3) {
      displayImages.push(null);
    }

    setImages(displayImages.slice(0, 3));
  }, [level]);

  return (
    <section className="min-h-screen py-16 sm:py-24 md:py-32 flex flex-col justify-center border-b border-gray-100 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 items-start">
          <div className="w-full md:w-1/3 md:sticky md:top-32">
            <div className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4 sm:mb-6 md:mb-8 text-gray-200">0{index}</div>
            <ArtBadge>{name} : Class {level.toUpperCase()}</ArtBadge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic mb-4 sm:mb-6">{title}</h2>
            <div className="space-y-4 sm:space-y-6 text-gray-600 leading-relaxed font-light text-sm sm:text-base">
              <p>{description}</p>
              <div className="pt-4 sm:pt-6 md:pt-8 border-t border-gray-100">
                <p className="text-[10px] uppercase tracking-wider mb-1">Curator / Wali Kelas</p>
                <p className="text-black font-medium uppercase tracking-tighter text-sm sm:text-base">{curator}</p>
              </div>
            </div>
            <div className="mt-8 sm:mt-10 md:mt-12">
              <GalleryButton variant="light" to={`/gallery/${level}`}>
                Enter Collection
              </GalleryButton>
            </div>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-12 gap-3 sm:gap-4 md:gap-6">
            <div className="col-span-12 group overflow-hidden bg-white border-4 sm:border-8 md:border-[12px] border-white shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
              {images[0] ? (
                <img 
                  src={images[0].src} 
                  alt={images[0].alt}
                  style={{ objectPosition: images[0].objectPosition || "center center" }}
                  className={`w-full h-48 sm:h-80 md:h-[500px] grayscale hover:grayscale-0 transition-all duration-1000 ${images[0].className}`}
                />
              ) : (
                <div className="w-full h-48 sm:h-80 md:h-[500px] bg-white" />
              )}
              <div className="p-2 sm:p-3 md:p-4 bg-white text-[8px] sm:text-[10px] text-gray-400 uppercase tracking-wider sm:tracking-widest">
                {images[0]?.caption || `Fig 1.${index} — Momentum Utama Tahun ${year}`}
              </div>
            </div>
            
            <div className="col-span-6 group overflow-hidden bg-white border-4 sm:border-8 md:border-[12px] border-white shadow-xl mt-4 sm:mt-8 md:mt-12">
              {images[1] ? (
                <img 
                  src={images[1].src} 
                  alt={images[1].alt}
                  style={{ objectPosition: images[1].objectPosition || "center center" }}
                  className={`w-full h-32 sm:h-48 md:h-64 grayscale hover:grayscale-0 transition-all duration-1000 ${images[1].className}`}
                />
              ) : (
                <div className="w-full h-32 sm:h-48 md:h-64 bg-white" />
              )}
              <div className="p-2 sm:p-3 md:p-4 bg-white text-[8px] sm:text-[10px] text-gray-400 uppercase tracking-wider sm:tracking-widest italic">
                {images[1]?.caption || "Candid Series"}
              </div>
            </div>

            <div className="col-span-6 group overflow-hidden bg-white border-4 sm:border-8 md:border-[12px] border-white shadow-xl">
              {images[2] ? (
                <img 
                  src={images[2].src} 
                  alt={images[2].alt}
                  style={{ objectPosition: images[2].objectPosition || "center center" }}
                  className={`w-full h-40 sm:h-56 md:h-80 grayscale hover:grayscale-0 transition-all duration-1000 ${images[2].className}`}
                />
              ) : (
                <div className="w-full h-40 sm:h-56 md:h-80 bg-white" />
              )}
              {/* Optional caption for 3rd image if needed */}
               {images[2]?.caption && (
                <div className="p-2 sm:p-3 md:p-4 bg-white text-[8px] sm:text-[10px] text-gray-400 uppercase tracking-wider sm:tracking-widest italic">
                  {images[2].caption}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExhibitSection;
