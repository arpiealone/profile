import { motion } from "framer-motion";
import k1 from "../assets/gallery/class-xii/K1_small.jpg";
import k2 from "../assets/gallery/class-xii/K2_small.jpg";
import k3 from "../assets/gallery/class-xii/K3_small.jpg";
import k4 from "../assets/gallery/class-xii/K4_small.jpg";
import k5 from "../assets/gallery/class-xii/K5_small.jpg";
import k6 from "../assets/gallery/class-xii/K6_small.jpg";

const ClassicGalleryBackground = () => {
  const photos = [k1, k2, k3, k4, k5, k6];

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#e6dcc6]">
      {/* SVG Filter Definition for Crumpled Paper */}
      <svg className="invisible absolute size-0">
        <filter id="paper-texture">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.04" 
            numOctaves="5" 
            result="noise" 
          />
          <feDiffuseLighting 
            in="noise" 
            lightingColor="#fffbdfb8" 
            surfaceScale="2" 
            result="lighting"
          >
            <feDistantLight azimuth="45" elevation="60" />
          </feDiffuseLighting>
          <feComposite // Blend the lighting with the texture
             operator="in"
             in2="SourceGraphic"
             in="lighting"
             result="composite"
          />
           <feBlend // Blend with a base color to soften it
             in="SourceGraphic" 
             in2="composite" 
             mode="multiply" 
           />
        </filter>
      </svg>

      {/* 1. Paper Texture Layer */}
      <div 
        className="absolute inset-0 z-0 opacity-60"
        style={{ filter: "url(#paper-texture)" }}
      />
      
      {/* 2. Old Paper Overlay (Vignette & Sepia & Grain) */}
      <div className="absolute inset-0 z-10 pointer-events-none mix-blend-multiply bg-[radial-gradient(circle,transparent_40%,#8b7355_100%)] opacity-40" />
      <div className="absolute inset-0 z-10 pointer-events-none opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/white-paper.png')]" />

      {/* 3. Photo Frame Grid */}
      <div className="absolute inset-0 z-20 flex items-center justify-center overflow-y-auto pt-24 pb-12 sm:pb-0 sm:pt-0">
         <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 p-4 max-w-6xl mx-auto w-full opacity-40">
            {photos.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: i * 0.2,
                  ease: "easeOut"
                }}
                className="aspect-[3/4] p-2 bg-white shadow-lg rotate-1 hover:rotate-0 transition-transform duration-500"
              >
                <div className="w-full h-full overflow-hidden border border-gray-100 grayscale-[0.3] sepia-[0.3]">
                  <img 
                    src={src} 
                    alt={`Memory ${i+1}`} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover" 
                  />
                </div>
              </motion.div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default ClassicGalleryBackground;
