import React from 'react';
import { ArrowRight } from 'lucide-react';
import ArtBadge from './ArtBadge';

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

export default StudentCard;
