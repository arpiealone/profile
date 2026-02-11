import React, { useState, useEffect } from 'react';
import CoverScreen from '../components/CoverScreen';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import ExhibitSection from '../components/ExhibitSection';
import Footer from '../components/Footer';

export default function HomePage({ isCoverDismissed, setIsCoverDismissed }) {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !isCoverDismissed) {
        setIsCoverDismissed(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isCoverDismissed, setIsCoverDismissed]);

  return (
    <div className="bg-white text-black font-sans selection:bg-black selection:text-white">
      
      <CoverScreen isDismissed={isCoverDismissed} />

      <Navigation />

      <Header />

      <main>
        <div id="x">
          <ExhibitSection 
            index={1}
            name="EXPESA"
            level="x"
            year="23/24"
            title="Genesis & Beginnings"
            curator="Ibu Nella Ayu Ambarwati, S.T."
            description="Awal dari segalanya! Tahun pertama yang penuh awkward moment, tapi juga penuh tawa. Dari yang awalnya nggak kenal siapa-siapa, nggak tau apa-apa, bahkan cara ngidupin PC aja masih gak bisa."
          />
        </div>

        <div id="xi">
          <ExhibitSection 
            index={2}
            name="EXISENO"
            level="xi"
            year="24/25"
            title="The Vibrant Pulse"
            curator="Ibu Lolita Bestari, S.T."
            description="Tahun paling seru dan paling pusing mikirin laporan PKL!, Tapi di tahun inilah kita berkembang."
          />
        </div>

        <div id="xii">
          <ExhibitSection 
            index={3}
            name="EXCELLION"
            level="xii"
            year="25/26"
            title="Final Masterpiece"
            curator="Ibu Sri Widodoteni, S.Pd."
            description="Tahun terakhir kita bersama. Dari yang dulu gak tau apa-apa, sekarang udah siap terjun ke dunia luar (ANJAY MABAR). Makasih buat semua kenangan, canda tawa, dan perjuangan bareng. See you on top! 🚀"
          />
        </div>
      </main>

      <Footer />

    </div>
  );
}
