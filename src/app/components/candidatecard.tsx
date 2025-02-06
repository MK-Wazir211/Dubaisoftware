import { Star, Briefcase, Zap } from "react-feather";

interface Candidate {
  id: string;
  name: string;
  role: string;
  rating: string;
  experience: string;
  skills: string;
}

interface CandidateCardProps {
  candidate: Candidate;
  onViewDetails?: () => void;
}

const CardBadge = ({ icon: Icon, value }: { icon: React.ElementType, value: string }) => (
  <div className="flex items-center gap-2 bg-[#286672]/10 px-3 py-1.5 rounded-full">
    <Icon className="w-4 h-4 text-[#286672]" />
    <span className="text-sm font-medium text-[#286672]">{value}</span>
  </div>
);

export default function CandidateCard({ candidate, onViewDetails }: CandidateCardProps) {
  return (
    <article className="bg-[#286672]/15 rounded-xl p-4 border border-[#286672]/20 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3 mb-4">



        <div className="w-10 h-10 bg-[#286672] rounded-lg flex items-center justify-center text-white font-bold">
          {candidate.name.charAt(0)}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800">{candidate.name}</h3>
          <p className="text-sm text-[#286672]">{candidate.role}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <CardBadge icon={Star} value={`${candidate.rating} Rating`} />
        <CardBadge icon={Briefcase} value={`${candidate.experience}y exp`} />
        <CardBadge icon={Zap} value={candidate.skills} />
      </div>

      <button 
        onClick={onViewDetails}
        className="w-full bg-[#286672] text-white py-2 rounded-lg font-medium hover:bg-[#1d4a54] transition-colors"
      >
        View Profile
      </button>
    </article>
  );
}
