import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';

import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery/:classLevel" element={<GalleryPage />} />
      </Routes>
    </>
  );
}
