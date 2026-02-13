import React, { useState, useMemo } from 'react';
import { Search as SearchIcon, X, ArrowRight } from 'lucide-react';
import { createPortal } from 'react-dom';

// --- DATA MOCKUP ---
// --- DATA MOCKUP ---
const studentNames = [
  "Abir", "Adel", "Ma'sum", "Ajeng", "Aan", "Amel", "Selly", "Bagas", 
  "Chella", "Clarisa", "Devina", "Dimas", "Egi", "Erlynda", "Filiphia", 
  "Fira", "Galuh", "Intan", "Lang", "Marshelia", "Melati", "Galih", 
  "Nadya", "Neila", "Richo", "Salsa", "Satriya", "Viona", "Rotul", 
  "Akmal", "Tuwan"
];

const generateStudents = () => {
  return studentNames.map((name, i) => ({
    id: i + 1,
    name: name,
    alias: `Subject-${(i + 1).toString().padStart(3, '0')}`,
    role: "-",
    quote: "-",
    specialty: "-",
    image: null
  }));
};

const studentsData = generateStudents();

// --- LOCAL COMPONENTS ---

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
        {student.image ? (
          <img src={student.image} alt={student.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        ) : (
          <div className="w-full h-full bg-white group-hover:scale-110 transition-transform duration-700" />
        )}
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
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-end">
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
                {student.image ? (
                  <img src={student.image} alt={student.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-white" />
                )}
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
    </div>,
    document.body
  );
};

// --- MEMBER SECTION ---

const MemberSection = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filteredStudents = useMemo(() => {
    return studentsData.filter(s => 
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      s.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="relative min-h-screen">
      {/* STICKY SEARCH BAR */}
      <div className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 h-20 flex items-center gap-4">
          <button 
            onClick={onBack}
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
};

export default MemberSection;
