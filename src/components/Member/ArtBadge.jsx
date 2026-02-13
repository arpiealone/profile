import React from 'react';

const ArtBadge = ({ children, light = false }) => (
  <span className={`text-[9px] uppercase tracking-[0.2em] font-light border px-2 py-1 inline-block ${light ? 'border-white/30 text-white/70' : 'border-gray-300 text-black'}`}>
    {children}
  </span>
);

export default ArtBadge;
