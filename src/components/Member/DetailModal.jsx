import React from 'react';
import { X } from 'lucide-react';
import ArtBadge from './ArtBadge';

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

export default DetailModal;
