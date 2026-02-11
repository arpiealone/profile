import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';

import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [isCoverDismissed, setIsCoverDismissed] = useState(false);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage isCoverDismissed={isCoverDismissed} setIsCoverDismissed={setIsCoverDismissed} />} />
        <Route path="/gallery/:classLevel" element={<GalleryPage />} />
      </Routes>
    </>
  );
}
