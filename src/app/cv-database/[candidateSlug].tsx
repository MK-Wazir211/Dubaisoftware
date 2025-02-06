'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';


interface Candidate {
  id: number;
  name: string;
  role: string;
  rating: string;
  experience: string;
  skills: string;
  phone: string;
  email: string;
  availability: string;
  expectedSalary: string;
  objective: string;
  education: string[];
  certifications: string[];
  technicalSkills: { skill: string; years: number }[];
  experienceTimeline: {
    company: string;
    role: string;
    duration: string;
    domain: string;
    responsibilities: string[];
    tech: string[];
  }[];
}

export default function MoreInformationPage({ params }: { params: { candidateSlug: string } }) {
  const router = useRouter();
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCandidate = async () => {
      try {
        const response = await fetch(`/api/candidates/${params.candidateSlug}`);
        if (!response.ok) throw new Error('Candidate not found');
        const data = await response.json();
        setCandidate(data);
      } catch (error) {
        router.push('/404');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCandidate();
  }, [params.candidateSlug, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#286672]/10 via-[#1d4a54]/5 to-gray-50 p-4 md:p-8 lg:p-12 flex items-center justify-center">
        <div className="animate-pulse text-[#286672]">Loading candidate profile...</div>
      </div>
    );
  }

  if (!candidate) return null;

  const handlePrint = () => window.print();
  const handleDownloadPDF = () => window.open('https://drive.google.com/file/d/1-_0000000000000000000000000000000000000000/view?usp=sharing');
  const handleMessage = () => window.location.href = `mailto:${candidate.email}`;
  const handleViewCV = () => window.open('https://drive.google.com/file/d/1-_0000000000000000000000000000000000000000/view?usp=sharing');


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#286672]/10 via-[#1d4a54]/5 to-gray-50 p-4 md:p-8 lg:p-12 animate-gradient">
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header Section */}
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-[#286672]/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1d4a54] mb-2">{candidate.name}</h1>
            <p className="text-xl text-[#286672] font-medium mb-4">{candidate.role}</p>
            <span className="inline-block bg-gradient-to-r from-[#286672] to-[#1d4a54] text-white px-4 py-2 rounded-full text-sm font-bold">
              {candidate.rating} Rating
            </span>
          </div>
          <div className="flex gap-3 flex-wrap">
            <button 
              onClick={handleDownloadPDF}
              className="px-4 py-2 bg-[#286672] text-white rounded-lg flex items-center gap-2 hover:bg-[#1d4a54] transition-colors"
            >
              <Download size={16} />
              Download CV
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-2 border-2 border-[#286672] text-[#286672] rounded-lg hover:bg-[#286672]/10 transition-colors"
            >
              Print Profile
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#286672]/10">
            <h2 className="text-xl font-bold text-[#1d4a54] mb-4">Professional Summary</h2>
            <p className="text-gray-600 leading-relaxed">{candidate.skills}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-[#286672]/10">
            <h2 className="text-xl font-bold text-[#1d4a54] mb-4">Education</h2>
            <ul className="space-y-3">
              {candidate.education.map((edu, index) => (
                <li key={index} className="text-gray-600 border-l-4 border-[#286672] pl-4">
                  {edu}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-[#286672]/10">
            <h2 className="text-xl font-bold text-[#1d4a54] mb-4">Certifications</h2>
            <ul className="space-y-3">
              {candidate.certifications.map((cert, index) => (
                <li key={index} className="text-gray-600 flex items-center gap-2">
                  <span className="text-[#286672]">▹</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-[#286672]/10">
            <h2 className="text-xl font-bold text-[#1d4a54] mb-4">Technical Skills</h2>
            <div className="space-y-4">
              {candidate.technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-sm font-medium text-[#286672]">
                    <span>{skill.skill}</span>
                    <span>{skill.years} yrs</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#286672] to-[#1d4a54] rounded-full"
                      style={{ width: `${(skill.years / 10) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-2 space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#286672]/10">
            <h2 className="text-xl font-bold text-[#1d4a54] mb-6">Experience Timeline</h2>
            <div className="space-y-6">
              {candidate.experienceTimeline.map((exp, index) => (
                <div key={index} className="border-l-4 border-[#286672] pl-4 relative">
                  <div className="absolute w-3 h-3 bg-[#286672] rounded-full -left-[6px] top-4" />
                  <h3 className="text-lg font-bold text-[#1d4a54]">{exp.company}</h3>
                  <p className="text-gray-600 font-medium mb-2">{exp.role} | {exp.duration}</p>
                  <p className="text-sm text-[#286672] bg-[#286672]/10 px-3 py-1 rounded-full inline-block mb-3">
                    {exp.domain}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#1d4a54] mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1d4a54] mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-[#286672]/10 text-[#286672] rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}
