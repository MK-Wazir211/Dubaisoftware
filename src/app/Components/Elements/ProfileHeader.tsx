interface ProfileHeaderProps {
  profileData: {
    name: string;
    title: string;
  };
  onEditToggle: () => void;
}

export default function ProfileHeader({ profileData, onEditToggle }: ProfileHeaderProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-[#286672]/10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#1d4a54]">{profileData.name}</h1>
          <p className="text-[#286672]">{profileData.title}</p>
        </div>
        <button
          onClick={onEditToggle}
          className="px-4 py-2 text-[#286672] hover:bg-[#286672]/10 rounded-lg"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}
