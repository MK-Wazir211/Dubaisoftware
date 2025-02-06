'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { ArrowUp } from 'react-feather';
import CandidateCard from '../components/candidatecard';
import Pagination from '../components/pagination';
import Filter from '../components/filter';
import ResumeFilter from '../components/filter';


interface Candidate {
  id: number;
  name: string;
  role: string;
  rating: string;
  experience: string;
  skills: string;
}




export default function CVDatabase() {
  // State management

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const totalItems = 5000;

  // Memoized data generation
  const candidates = useMemo<Candidate[]>(() => {
    return Array.from({ length: itemsPerPage }, (_, i) => ({
      id: i + 1 + (currentPage - 1) * itemsPerPage,
      name: `Candidate ${i + 1 + (currentPage - 1) * itemsPerPage}`,
      role: ['Software Engineer', 'UX Designer'][i % 2],
      rating: ['A', 'AA', 'AAA'][i % 3],
      experience: `${Math.floor(i/100) + 1} years`,
      skills: `${i % 10}/10 key skills match`
    }));
  }, [currentPage, itemsPerPage]);

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pagination calculations
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const resultsRange = {
    start: (currentPage - 1) * itemsPerPage + 1,
    end: Math.min(currentPage * itemsPerPage, totalItems)
  };




  return (
    <main className="min-h-screen bg-gray-50">
    
    <header className="bg-gradient-to-r from-[#286672] to-[#1d4a54] text-white py-16 md:py-20 lg:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto text-left relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100 animate-fade-in">
              Elite Talent Hub
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-gray-100 leading-relaxed">
              Discover premium tech professionals with verified expertise. Leverage our AI-powered matching to find your ideal candidate.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-start sm:items-center">
              <button className="px-6 py-2.5 md:px-8 md:py-3 bg-white text-[#286672] rounded-2xl font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl text-sm md:text-base transform hover:scale-105">
                Start Hiring
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="container mx-auto px-4 py-8 md:py-12">
      <ResumeFilter  
      />

        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="text-gray-600">
            Showing {resultsRange.start}-{resultsRange.end} of {totalItems} candidates
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
            onItemsPerPageChange={setItemsPerPage}
          />
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {candidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
              onViewDetails={() => window.location.href = `/cv-database/${candidate.id}`}
            />
          ))}
        </div>

        {selectedCandidate && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-8 max-w-2xl w-full relative">
              <button
                onClick={() => setSelectedCandidate(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-[#286672]"
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold text-[#286672] mb-4">{selectedCandidate.name}</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Role</h3>
                  <p className="text-gray-600">{selectedCandidate.role}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Rating</h3>
                  <p className="text-[#286672] font-medium">{selectedCandidate.rating} Rating</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Experience</h3>
                  <p className="text-gray-600">{selectedCandidate.experience}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Skills Match</h3>
                  <p className="text-[#286672] font-medium">{selectedCandidate.skills}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 bg-[#286672] text-white p-3 rounded-full shadow-lg hover:bg-[#286672]/90 transition-all hover:scale-105"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        )}
      </div>
    </main>
  );
}