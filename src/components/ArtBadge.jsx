import React from 'react';

const ArtBadge = ({ children }) => (
  <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-light border border-gray-400 px-2 sm:px-3 py-1 mb-4 sm:mb-6 inline-block">
    {children}
  </span>
);

export default ArtBadge;
