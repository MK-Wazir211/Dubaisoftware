import { Download, Eye } from "react-feather";

interface Candidate {
  id: number;
  name: string;
  role: string;
  rating: string;
  experience: string;
  skills: string;
}

interface CandidateCardProps {
  candidate: Candidate;
  onViewDetails?: () => void;
  onDownload?: () => void;
}

export default function CandidateCard({ candidate, onViewDetails, onDownload }: CandidateCardProps) {
  return (
    <article className="bg-gradient-to-br from-[#286672]/20 to-gray-50 rounded-2xl p-6 border-3 border-[#286672] transition-all hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(40,102,114,0.3)]">
      {/* Header Section */}

      <div className="flex items-start gap-4 mb-6">
        <div className="w-14 h-14 bg-gradient-to-br from-[#286672] to-[#1d4a54] rounded-full flex items-center justify-center shadow-sm border-2 border-[#286672]/30">
          <span className="text-white font-semibold text-lg">CV</span>

        </div>
        
        {/* Candidate Info */}
        <div className="flex-1 space-y-2">
          <h3 className="text-xl font-bold text-gray-900">{candidate.name}</h3>
          <p className="text-sm text-gray-500 font-medium">{candidate.role}</p>
          <span className="inline-block bg-gradient-to-r from-[#286672] to-[#1d4a54] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-sm border border-[#286672]/20 shadow-[#286672]/30">
            {candidate.rating} Rating
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2">
          <button 
            onClick={onViewDetails}
            className="p-2.5 text-[#286672] hover:bg-[#286672]/10 rounded-xl transition-all group relative border-2 border-[#286672]/10 hover:border-[#286672]/20 hover:shadow-[0_0_8px_rgba(40,102,114,0.2)]"
            aria-label={`View details of ${candidate.name}`}
          >
            <Eye size={22} className="group-hover:scale-110 transition-transform" />
          </button>
          <button 
            onClick={onDownload}
            className="p-2.5 text-[#286672] hover:bg-[#286672]/10 rounded-xl transition-all group relative border-2 border-[#286672]/10 hover:border-[#286672]/20 hover:shadow-[0_0_8px_rgba(40,102,114,0.2)]"
            aria-label={`Download ${candidate.name}'s CV`}
          >
            <Download size={22} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>

      {/* Details Section */}
      <dl className="space-y-4">
        <div className="flex justify-between items-center bg-gray-50/50 px-4 py-3 rounded-xl border-2 border-[#286672]/10 shadow-sm shadow-[#286672]/5">
          <dt className="text-sm text-gray-600 font-medium">Experience</dt>
          <dd className="flex items-center font-bold text-lg bg-gradient-to-r from-[#286672] to-[#1d4a54] bg-clip-text text-transparent">
            {candidate.experience}
            <span className="ml-2 text-sm font-medium bg-[#286672]/10 text-[#286672] px-2 py-1 rounded-full border border-[#286672]/20">years</span>
          </dd>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex justify-between items-center bg-gray-50/50 px-4 py-3 rounded-xl border-2 border-[#286672]/10 shadow-sm shadow-[#286672]/5">
            <dt className="text-base text-gray-600 font-medium">Skills Match</dt>
            <dd className="font-semibold text-[#286672]">{candidate.skills}</dd>
          </div>
          <div className="flex justify-between items-center bg-gray-50/50 px-4 py-3 rounded-xl border-2 border-[#286672]/10 shadow-sm shadow-[#286672]/5">
            <dt className="text-base text-gray-600 font-medium">Availability</dt>
            <dd className="font-semibold text-[#286672]">Immediate</dd>
          </div>
        </div>
      </dl>
    </article>
  );
}
