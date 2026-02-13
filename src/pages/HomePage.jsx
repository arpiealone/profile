import React, { useState, useRef, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import ExhibitSection from '../components/ExhibitSection';
import Footer from '../components/Footer';
import Background from '../components/Background';
import MemberSection from '../components/MemberSection';
import CoverScreen from '../components/CoverScreen';

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isCoverDismissed, setIsCoverDismissed] = useState(false);
  const homeContainerRef = useRef(null);

  useEffect(() => {
    const container = homeContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (container.scrollTop > 50 && !isCoverDismissed) {
        setIsCoverDismissed(true);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [isCoverDismissed]);

  return (
    <div className="relative w-full h-screen overflow-hidden text-black font-sans selection:bg-black selection:text-white">
      
      {/* SHUTTER OVERLAY */}
      <div className={`fixed inset-0 z-[110] bg-black pointer-events-none transition-opacity duration-1000 ${currentPage === 'gallery' ? 'opacity-0' : 'opacity-0'}`} />

      {/* VIEWPORT CONTAINER */}
      <div className="relative w-full h-full overflow-hidden">
        
        <Background />
        
        <CoverScreen isDismissed={isCoverDismissed} />

        {/* HOME SECTION */}
        <section 
          ref={homeContainerRef}
          className={`absolute inset-0 w-full h-full overflow-y-auto scroll-smooth bg-transparent transition-all duration-[1200ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
            currentPage === 'home' 
              ? 'translate-x-0 scale-100 opacity-100' 
              : '-translate-x-1/2 scale-90 opacity-0 blur-sm'
          }`}
        >
          
          <div className="relative z-10">
            <Navigation />

            <Header onOpenPersonnel={() => setCurrentPage('personnel')} />

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
                  curator="Ibu Lolita Bestari, S.Kom."
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
        </section>

        {/* PERSONNEL SECTION */}
        <section 
          className={`absolute inset-0 w-full h-full overflow-y-auto transition-all duration-[1200ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
            currentPage === 'personnel' 
              ? 'translate-x-0 scale-100 opacity-100' 
              : 'translate-x-full scale-110 opacity-0'
          }`}
        >
          <MemberSection onBack={() => setCurrentPage('home')} />
        </section>

      </div>
    </div>
  );
}
