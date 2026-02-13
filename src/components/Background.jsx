import { motion } from "framer-motion";
import painting1 from "../assets/gallery/class-x/naik_kelas.jpeg";
import painting2 from "../assets/gallery/class-xi/juara_1_lomba.jpeg";
import painting3 from "../assets/gallery/class-xii/foto_kelulusan.jpeg";

const ClassicGalleryBackground = () => {
  const paintings = [
    painting1,
    painting2,
    painting3
  ];

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

      {/* 3. Floating Paintings (Ken Burns Effect) */}
      <div className="absolute inset-0 z-20 flex items-center justify-center opacity-30 pb-32">
        <div className="flex gap-8 p-8 rotate-[-5deg]">
          {paintings.map((url, i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 1.05, 1],
                y: [0, -15, 0],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ 
                duration: 15 + i * 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 2,
              }}
              className="w-[300px] h-[450px] flex-shrink-0 grayscale-[0.2] sepia-[0.4] shadow-[10px_10px_30px_rgba(0,0,0,0.5)] bg-white p-4"
            >
              <img 
                src={url} 
                alt="Classic Art" 
                className="w-full h-full object-cover shadow-inner filter contrast-125" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassicGalleryBackground;
