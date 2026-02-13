import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, ChevronRight, Search as SearchIcon } from 'lucide-react';

/**
 * KONSEP: "THE CINEMATIC GALLERY SLIDE"
 * Menggunakan efek scale, parallax, dan shutter overlay untuk transisi yang lebih smooth.
 */

// --- DATA MOCKUP ---
const generateStudents = () => {
  const roles = ["Lead Developer", "UI Designer", "System Analyst", "Quality Assurance", "Project Manager"];
  return Array.from({ length: 35 }, (_, i) => ({
    id: i + 1,
    name: `Nama Siswa ${i + 1}`,
    alias: `Subject-${(i + 1).toString().padStart(3, '0')}`,
    role: roles[i % roles.length],
    quote: "Kreativitas adalah kecerdasan yang sedang bersenang-senang.",
    specialty: ["React", "Python", "Logic", "Design", "Hardware"][i % 5],
    image: `https://images.unsplash.com/photo-${[
      "1535713875002-d1d0cf377fde",
      "1527980965255-d3b416303d12",
      "1438761681033-6461ffad8d80",
      "1507003211169-0a1dd7228f2d",
      "1544005313-94ddf0286df2"
    ][i % 5]}?auto=format&fit=crop&q=80&w=400`
  }));
};

const studentsData = generateStudents();

// --- COMPONENTS ---

const ArtBadge = ({ children, light = false }) => (
  <span className={`text-[9px] uppercase tracking-[0.2em] font-light border px-2 py-1 inline-block ${light ? 'border-white/30 text-white/70' : 'border-gray-300 text-black'}`}>
    {children}
  </span>
);

const StudentCard = ({ student, onClick }) => (
  <div 
    onClick={() => onClick(student)}
    className="group relative cursor-pointer border-b border-gray-100 pb-8 hover:bg-gray-50 transition-colors p-4"
  >
    <div className="flex gap-8 items-center">
      <div className="text-2xl font-serif italic text-gray-200 group-hover:text-black transition-colors duration-500">
        {(student.id).toString().padStart(2, '0')}
      </div>
      <div className="w-20 h-24 bg-gray-100 overflow-hidden border-4 border-white shadow-sm flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-700">
        <img src={student.image} alt={student.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      </div>
      <div className="flex-grow">
        <ArtBadge>{student.alias}</ArtBadge>
        <h3 className="text-xl font-serif uppercase tracking-tighter mt-1">{student.name}</h3>
        <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">{student.role}</p>
      </div>
      <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowRight strokeWidth={1} />
      </div>
    </div>
  </div>
);

const DetailModal = ({ student, onClose }) => {
  if (!student) return null;
  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-end">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-2xl h-full bg-white shadow-2xl animate-modal-slide p-8 md:p-16 overflow-y-auto">
        <button onClick={onClose} className="absolute top-8 right-8 p-2 hover:bg-gray-100 rounded-full transition-colors">
          <X size={24} />
        </button>
        <div className="mt-12">
          <ArtBadge>Profil Katalog: {student.id}</ArtBadge>
          <div className="flex flex-col md:flex-row gap-12 mt-8">
            <div className="w-full md:w-1/2">
              <div className="border-[16px] border-white shadow-2xl bg-gray-50 aspect-[3/4] overflow-hidden">
                <img src={student.image} alt={student.name} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-5xl font-serif italic leading-none mb-6">{student.name}</h2>
              <div className="space-y-6">
                <section>
                  <label className="text-[10px] uppercase text-gray-400 block mb-2">Peran Utama</label>
                  <p className="text-lg font-light tracking-tight">{student.role}</p>
                </section>
                <section>
                  <label className="text-[10px] uppercase text-gray-400 block mb-2">Keahlian Teknis</label>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-black text-white text-[10px] px-3 py-1 uppercase">{student.specialty}</span>
                  </div>
                </section>
                <section className="pt-6 border-t border-gray-100 italic text-gray-500 font-serif">
                  "{student.quote}"
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'gallery'
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filteredStudents = useMemo(() => {
    return studentsData.filter(s => 
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      s.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-black font-sans selection:bg-black selection:text-white">
      
      {/* SHUTTER OVERLAY (Efek Kedipan Hitam saat Transisi) */}
      <div className={`fixed inset-0 z-[110] bg-black pointer-events-none transition-opacity duration-1000 ${currentPage === 'gallery' ? 'opacity-0' : 'opacity-0'}`} />

      {/* VIEWPORT CONTAINER */}
      <div className="relative w-full h-full overflow-hidden">
        
        {/* PAGE 1: HOME */}
        <section 
          className={`absolute inset-0 w-full h-full flex items-center justify-center bg-black transition-all duration-[1200ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
            currentPage === 'home' 
              ? 'translate-x-0 scale-100 opacity-100' 
              : '-translate-x-1/2 scale-90 opacity-0 blur-sm'
          }`}
        >
          <div className="text-center text-white px-6">
            <ArtBadge light>RPL 1 Archive</ArtBadge>
            <h1 className="text-[12vw] font-serif italic leading-none tracking-tighter mb-4">
              The Personnel
            </h1>
            <p className="text-gray-500 uppercase tracking-[0.4em] text-xs mb-16">Directory of Creative Minds</p>
            
            <button 
              onClick={() => setCurrentPage('gallery')}
              className="group flex items-center gap-4 mx-auto border border-white/20 px-8 py-4 hover:bg-white hover:text-black transition-all duration-700 overflow-hidden relative"
            >
              <span className="text-[10px] uppercase tracking-[0.5em] font-light z-10">Buka Galeri</span>
              <div className="w-8 h-[1px] bg-current transition-all duration-500 group-hover:w-12 z-10" />
              <ChevronRight size={16} className="z-10" />
            </button>
          </div>
          
          <div className="absolute bottom-12 text-[9px] uppercase tracking-[0.3em] text-white/20">
            Digital Exhibition 2024
          </div>
        </section>

        {/* PAGE 2: GALLERY */}
        <section 
          className={`absolute inset-0 w-full h-full overflow-y-auto bg-white transition-all duration-[1200ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
            currentPage === 'gallery' 
              ? 'translate-x-0 scale-100 opacity-100' 
              : 'translate-x-full scale-110 opacity-0'
          }`}
        >
          {/* STICKY SEARCH BAR */}
          <div className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto px-6 h-20 flex items-center gap-4">
              <button 
                onClick={() => setCurrentPage('home')}
                className="group flex items-center gap-2 p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
              >
                <ArrowRight className="rotate-180 transition-transform group-hover:-translate-x-1" size={20} strokeWidth={1} />
                <span className="text-[9px] uppercase tracking-widest hidden md:block">Back</span>
              </button>
              <SearchIcon size={18} className="text-gray-400" />
              <input 
                type="text" 
                placeholder="CARI NAMA ATAU PERAN..."
                className="flex-grow bg-transparent border-none outline-none text-[10px] uppercase tracking-widest font-light"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="hidden md:block text-[9px] text-gray-400 uppercase tracking-widest">
                {filteredStudents.length} Subjects found
              </div>
            </div>
          </div>

          <div className="container mx-auto px-6 pt-24 pb-32">
            <div className="max-w-4xl mb-24 transition-all duration-1000 delay-300 transform translate-y-0">
              <h2 className="text-6xl font-serif italic mb-8">Curated <br />Subjects.</h2>
              <div className="flex gap-4 border-t border-black pt-6">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 max-w-md">
                  Katalog digital individu kelas RPL 1. Setiap profil mewakili satu narasi unik dalam perjalanan kami.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-x-12">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student, idx) => (
                  <div key={student.id} className="animate-fade-up" style={{ animationDelay: `${idx * 50}ms` }}>
                    <StudentCard 
                      student={student} 
                      onClick={setSelectedStudent}
                    />
                  </div>
                ))
              ) : (
                <div className="col-span-2 py-32 text-center border-t border-gray-100 font-serif italic text-gray-400">
                  Data tidak ditemukan dalam arsip.
                </div>
              )}
            </div>
          </div>

          <footer className="bg-gray-50 py-20 border-t border-gray-100 px-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="font-serif italic text-xl">RPL 1. Personnel</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-[0.3em]">
                &copy; 2024 DIGITAL CATALOG — VERSION 2.2
              </div>
            </div>
          </footer>
        </section>

      </div>

      {/* MODAL */}
      <DetailModal 
        student={selectedStudent} 
        onClose={() => setSelectedStudent(null)} 
      />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes modalSlide {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-modal-slide {
          animation: modalSlide 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-fade-up {
          animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}} />

    </div>
  );
}