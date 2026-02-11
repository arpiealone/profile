import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="container mx-auto text-center">
        <h3 className="text-[12vw] sm:text-[10vw] md:text-[8vw] font-serif italic mb-8 sm:mb-12">Adios.</h3>
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <div className="flex gap-6 sm:gap-8 md:gap-12 text-[8px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-gray-500">
            <a href="https://www.instagram.com/excellion__" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Journal</a>
            <a href="#" className="hover:text-white transition-colors">History</a>
          </div>
          <p className="text-[8px] sm:text-[10px] text-gray-700 uppercase tracking-wide sm:tracking-widest pt-8 sm:pt-12 border-t border-white/10 w-full max-w-xl">
            &copy; 2026 RPL 1 ARCHIVE — MADE WITH LOPEEEE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
