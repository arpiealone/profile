import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gallery/:classLevel" element={<GalleryPage />} />
    </Routes>
  );
}