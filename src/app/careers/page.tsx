'use client';
import { useState } from 'react';
import Link from 'next/link';
import Pagination from '../components/pagination';

const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    location: "Remote",
    type: "Full-time",
    department: "Engineering",
    description: "Develop and maintain our core platform using modern technologies."
  },
  {
    id: 2,
    title: "Product Manager",
    location: "New York, NY",
    type: "Full-time",
    department: "Product",
    description: "Lead product strategy and work cross-functionally to deliver value to users."
  },
  {
    id: 3,
    title: "UX Designer",
    location: "London, UK",
    type: "Contract",
    department: "Design",
    description: "Create intuitive user experiences and beautiful interfaces for our products."
  },
];

function SearchBar({ setSearchTerm }: { setSearchTerm: (term: string) => void }) {
  return (
    <div className="relative w-full mb-8">
      <input
        type="text"
        placeholder="Search job openings..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#286672] focus:ring-2 focus:ring-[#286672]/30 transition-all"
      />
      <svg className="absolute right-4 top-4 h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  );
}

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, endIndex);





  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">

          <h1 className="text-4xl font-bold text-[#1d4a54] mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-600">Help us build the future of career development</p>
        </div>

        <SearchBar setSearchTerm={setSearchTerm} />

        <div className="mb-8 flex justify-end">
          <Pagination
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            onItemsPerPageChange={setItemsPerPage}

          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">



          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-white p-8 rounded-2xl shadow-lg border border-[#286672]/10 transition-all hover:shadow-xl">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#1d4a54] mb-2">{job.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#286672]/10 text-[#1d4a54] rounded-full text-sm">{job.location}</span>
                  <span className="px-3 py-1 bg-[#286672]/10 text-[#1d4a54] rounded-full text-sm">{job.type}</span>
                  <span className="px-3 py-1 bg-[#286672]/10 text-[#1d4a54] rounded-full text-sm">{job.department}</span>
                </div>
                <p className="text-gray-600">{job.description}</p>
              </div>
              <Link
                href={`/careers/${job.id}`}
                className="inline-block w-full text-center bg-gradient-to-r from-[#286672] to-[#1d4a54] text-white py-3 px-6 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12 text-gray-600">
            No current openings match your search. Please try different keywords.
          </div>
        )}
      </div>
    </div>
  );
}
