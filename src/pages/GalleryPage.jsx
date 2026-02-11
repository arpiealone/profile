import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';

const allImages = import.meta.glob('/src/assets/gallery/*/*.{png,jpg,jpeg,svg,webp}', { eager: true });

export default function GalleryPage() {
  const { classLevel } = useParams();
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const classConfig = {
    x: {
      name: 'EXPESA',
      displayLevel: 'X',
      year: '23/24',
      curator: 'Ibu Nella Ayu Ambarwati, S.T.',
      title: 'Genesis & Beginnings'
    },
    xi: {
      name: 'EXISENO',
      displayLevel: 'XI',
      year: '24/25',
      curator: 'Ibu Lolita Bestari, S.T.',
      title: 'The Vibrant Pulse'
    },
    xii: {
      name: 'EXCELLION',
      displayLevel: 'XII',
      year: '25/26',
      curator: 'Ibu Sri Widodoteni, S.Pd.',
      title: 'Final Masterpiece'
    }
  };

  const config = classConfig[classLevel] || classConfig.xii;

  useEffect(() => {
    const targetPath = `/src/assets/gallery/class-${classLevel}/`;
    const matchedImages = Object.keys(allImages)
      .filter(path => path.includes(targetPath))
      .map(path => ({
        src: allImages[path].default,
        alt: path.split('/').pop().split('.')[0]
      }));
    
    setImages(matchedImages);
  }, [classLevel]);

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={20} />
            <span className="font-serif italic text-lg sm:text-xl">Back to Gallery</span>
          </Link>
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-widest text-gray-400">{config.name}</div>
            <div className="font-serif italic text-sm sm:text-base">Class {config.displayLevel}</div>
          </div>
        </div>
      </header>

      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 px-4 sm:px-6 border-b border-gray-100">
        <div className="container mx-auto max-w-4xl">
          <div className="text-[10px] uppercase tracking-[0.3em] font-light border border-gray-400 px-3 py-1 mb-6 inline-block">
            Collection {config.year}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif italic mb-4 sm:mb-6">{config.title}</h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-sm text-gray-500 uppercase tracking-wide">
            <div>
              <span className="text-[10px] block mb-1">Curator</span>
              <span className="text-black font-medium">{config.curator}</span>
            </div>
            <div>
              <span className="text-[10px] block mb-1">Total Works</span>
              <span className="text-black font-medium">{images.length} {images.length === 1 ? 'Piece' : 'Pieces'}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto">
          {images.length > 0 ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
              {images.map((image, index) => (
                <div 
                  key={index}
                  className="break-inside-avoid group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative overflow-hidden bg-gray-50 border-8 sm:border-12 border-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                  </div>
                  <div className="mt-2 sm:mt-3 px-2 text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">
                    Fig {index + 1} — {image.alt}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 sm:py-32">
              <div className="text-6xl sm:text-8xl font-serif text-gray-200 mb-6 sm:mb-8">∅</div>
              <h3 className="text-xl sm:text-2xl font-serif italic mb-4">Collection Coming Soon</h3>
              <p className="text-sm sm:text-base text-gray-500 uppercase tracking-wide">
                Karya sedang dikurasi untuk dipamerkan di galeri ini
              </p>
            </div>
          )}
        </div>
      </section>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 sm:top-8 right-4 sm:right-8 text-white/80 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
