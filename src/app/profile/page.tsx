'use client';
import React, { useState, useEffect } from 'react';

interface WorkExperience {
  id: string;
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  employmentType: string;
}

interface Education {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  current: boolean;
  gpa: string;
  honors: string;
}

interface Availability {
  employmentType: string;
  startDate: string;
  remote: boolean;
  timeZone: string;
}

interface Skill {
  name: string;
  years: string;
}

interface ProfileData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  linkedin?: string;
  github?: string;
}

export default function ProfilePage() {
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([]);
  const [educations, setEducations] = useState<Education[]>([]);
  const [availability, setAvailability] = useState<Availability>({
    employmentType: 'Full-time',
    startDate: '',
    remote: false,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
  });
  const [showPreview, setShowPreview] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    bio: '',
    linkedin: '',
    github: ''
  });

  const addWorkExperience = () => {
    setWorkExperiences([...workExperiences, {
      id: '',
      jobTitle: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
      employmentType: 'Full-time'
    }]);
  };

  const removeWorkExperience = (id: string) => {
    setWorkExperiences(workExperiences.filter(exp => exp.id !== id));
  };

  const addEducation = () => {
    setEducations([...educations, {
      id: '',
      institution: '',
      degree: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: '',
      current: false,
      gpa: '',
      honors: ''
    }]);
  };

  const removeEducation = (id: string) => {
    setEducations(educations.filter(edu => edu.id !== id));
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-[#f0f7fa] to-[#e3eef3] min-h-screen">
      <div className="mx-auto bg-white shadow-2xl rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 transition-all duration-300">
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#286672] to-[#1d4a54] mb-4 animate-fade-in">
            Professional Profile
          </h1>
          <p className="text-lg text-gray-600">Complete your professional identity</p>
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className={`px-8 py-3 rounded-xl font-medium transition-all ${
                showPreview
                  ? 'bg-gray-100 text-[#1d4a54] hover:bg-gray-200'
                  : 'bg-[#286672] text-white hover:bg-[#1d4a54]'
              }`}
            >
              {showPreview ? 'Edit Profile' : 'Preview Profile'}
            </button>
          </div>
        </header>

        {!showPreview ? (
          <>
            {/* Personal Information Section */}
            <section className="mb-12 bg-white p-8 rounded-2xl shadow-lg border border-[#286672]/10 relative group hover:shadow-xl transition-all">
              <div className="absolute inset-0 rounded-2xl border-2 border-[#286672]/5 pointer-events-none"></div>
              <h2 className="text-2xl font-bold text-[#1d4a54] mb-8 flex items-center gap-3 pb-4 border-b border-[#286672]/20">
                <div className="p-3 bg-[#286672]/10 rounded-xl">
                  <svg className="w-7 h-7 text-[#286672]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Personal Branding
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-600 mb-2">Full Name*</label>
                  <input 
                    type="text" 
                    value={profileData.name}
                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#286672]/30 focus:border-[#286672] transition-all placeholder-gray-400"
                    placeholder="John D. Smith"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Professional Title*</label>
                  <input 
                    type="text" 
                    value={profileData.title}
                    onChange={(e) => setProfileData({...profileData, title: e.target.value})}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#286672] focus:ring-2 focus:ring-[#286672]/30 transition-all" 
                    required 
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-4">Digital Portrait</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center cursor-pointer hover:border-[#286672]/50 transition-all duration-300 relative group bg-gradient-to-br from-white to-[#f8fafc]">
                    <input 
                      type="file"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={(e) => e.target.files?.[0] && setProfileImage(e.target.files[0])}
                    />
                    {profileImage ? (
                      <div className="flex flex-col items-center gap-4">
                        <img 
                          src={URL.createObjectURL(profileImage)} 
                          alt="Profile preview" 
                          className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white"
                        />
                        <p className="text-sm text-[#286672] font-medium">{profileImage.name}</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="mx-auto h-20 w-20 bg-gray-100 rounded-full flex items-center justify-center">
                          <svg className="h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 font-medium">Drag & drop or click to upload</p>
                          <p className="text-xs text-gray-500 mt-1">PNG, JPG (Max 2MB)</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="mb-12 bg-white p-8 rounded-2xl shadow-lg border border-[#286672]/10 hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold text-[#1d4a54] mb-8 flex items-center gap-3 pb-4 border-b border-[#286672]/20">
                <div className="p-3 bg-[#286672]/10 rounded-xl">
                  <svg className="w-7 h-7 text-[#286672]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                Contact Channels
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-600 mb-2">Professional Email*</label>
                  <input 
                    type="email" 
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#286672]/30 focus:border-[#286672] transition-all placeholder-gray-400"
                    placeholder="john.smith@professional.com"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    value={profileData.phone}
                    onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#286672] focus:ring-2 focus:ring-[#286672]/30 transition-all" 
                    placeholder="+1 (555) 000-0000" 
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">LinkedIn Profile</label>
                  <div className="flex items-center gap-2 bg-white border-2 border-gray-200 rounded-xl px-4 focus-within:border-[#286672] focus-within:ring-2 focus-within:ring-[#286672]/30 transition-all">
                    <span className="text-gray-500">linkedin.com/in/</span>
                    <input 
                      type="text" 
                      value={profileData.linkedin}
                      onChange={(e) => setProfileData({...profileData, linkedin: e.target.value})}
                      className="flex-1 p-3 border-0 bg-transparent focus:ring-0" 
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">GitHub Profile</label>
                  <div className="flex items-center gap-2 bg-white border-2 border-gray-200 rounded-xl px-4 focus-within:border-[#286672] focus-within:ring-2 focus-within:ring-[#286672]/30 transition-all">
                    <span className="text-gray-500">github.com/</span>
                    <input 
                      type="text" 
                      value={profileData.github}
                      onChange={(e) => setProfileData({...profileData, github: e.target.value})}
                      className="flex-1 p-3 border-0 bg-transparent focus:ring-0" 
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Availability Section */}
            <section className="mb-12 bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold text-[#286672] mb-8 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Professional Availability
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Employment Preference*</label>
                  <select 
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#286672] focus:ring-2 focus:ring-[#286672]/30 appearance-none bg-select-arrow bg-no-repeat bg-right-4 bg-[length:24px] transition-all"
                    value={availability.employmentType}
                    onChange={(e) => setAvailability({...availability, employmentType: e.target.value})}
                  >
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Freelance</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Start Date*</label>
                  <input 
                    type="date" 
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#286672] focus:ring-2 focus:ring-[#286672]/30 transition-all" 
                    value={availability.startDate}
                    onChange={(e) => setAvailability({...availability, startDate: e.target.value})}
                    required 
                  />
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border-2 border-gray-200">
                  <input 
                    type="checkbox" 
                    className="w-5 h-5 rounded accent-[#286672]"
                    checked={availability.remote}
                    onChange={(e) => setAvailability({...availability, remote: e.target.checked})}
                  />
                  <label className="text-sm font-semibold text-gray-700">Open to remote opportunities</label>
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Time Zone*</label>
                  <select 
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#286672] focus:ring-2 focus:ring-[#286672]/30 appearance-none bg-select-arrow bg-no-repeat bg-right-4 bg-[length:24px] transition-all"
                    value={availability.timeZone}
                    onChange={(e) => setAvailability({...availability, timeZone: e.target.value})}
                    required
                  >
                    <option value="America/New_York">Eastern Time (ET)</option>
                    <option value="America/Chicago">Central Time (CT)</option>
                    <option value="America/Denver">Mountain Time (MT)</option>
                    <option value="America/Los_Angeles">Pacific Time (PT)</option>
                    <option value="UTC">UTC/GMT</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Professional Summary Section */}
            <section className="mb-12 bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold text-[#286672] mb-8 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                Executive Summary
              </h2>
              <div className="relative">
                <textarea 
                  className="w-full p-6 border-2 border-gray-200 rounded-2xl focus:border-[#286672] focus:ring-2 focus:ring-[#286672]/30 h-48 transition-all"
                  placeholder="Example: Accomplished Full Stack Developer with 4+ years of experience delivering enterprise-scale solutions..."
                  maxLength={500}
                  value={profileData.bio}
                  onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                />
                <div className="absolute bottom-4 right-4 text-sm text-gray-500 bg-white px-2 rounded-lg">
                  {500 - profileData.bio.length} characters remaining
                </div>
              </div>
            </section>

            {/* Technical Skills Section */}
            <section className="mb-12 bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] p-8 rounded-2xl shadow-sm">
              <div className="relative space-y-8">
                <h2 className="text-2xl font-bold text-[#286672] flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Core Competencies
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="relative bg-white rounded-2xl p-2 border-2 border-gray-200">
                    <select 
                      multiple
                      className="w-full h-64 bg-transparent focus:ring-0 rounded-xl custom-scrollbar px-4 py-3"
                      onChange={(e) => {
                        const selected = Array.from(e.target.selectedOptions, option => option.value);
                        setSkills(prev => [
                          ...prev.filter(skill => selected.includes(skill.name)),
                          ...selected
                            .filter(name => !prev.some(s => s.name === name))
                            .map(name => ({ name, years: '' }))
                        ]);
                      }}
                    >
                      {['Database', 'Agile', 'SCRUM', 'Jira', 'Selenium', 'Cucumber', 'Java', 'Git', 'SQL'].map((skill) => (
                        <option 
                          key={skill}
                          value={skill} 
                          className="p-4 hover:bg-[#286672]/10 rounded-lg cursor-pointer transition-colors text-gray-700 ui-selected:bg-gradient-to-r ui-selected:from-[#286672] ui-selected:to-[#1d4a54] ui-selected:text-white"
                        >
                          {skill}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-[#286672]">Selected Expertise</h3>
                      <button 
                        onClick={() => setSkills([])}
                        className="text-sm text-[#286672] hover:text-[#1d4a54] font-medium flex items-center gap-2 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Clear All
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-3 p-4 bg-white rounded-xl border-2 border-gray-200 min-h-[120px]">
                      {skills.map((skill, index) => (
                        <div key={index} className="relative group">
                          <span className="bg-gradient-to-br from-[#286672] to-[#1d4a54] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow">
                            {skill.name}
                            <input
                              type="number"
                              className="w-16 ml-2 px-2 py-1 rounded bg-white/20 border border-white/30 text-white"
                              placeholder="Years"
                              value={skill.years}
                              onChange={(e) => {
                                const newSkills = [...skills];
                                newSkills[index].years = e.target.value;
                                setSkills(newSkills);
                              }}
                            />
                            <button 
                              onClick={() => setSkills(skills.filter(s => s.name !== skill.name))}
                              className="opacity-0 group-hover:opacity-100 transition-opacity text-white/80 hover:text-white"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </span>
                        </div>
                      ))}
                      {skills.length === 0 && (
                        <p className="text-gray-400 text-sm w-full text-center py-4">
                          Select skills from the left panel and input years of experience
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Work Experience */}
            <section className="mb-12 bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold text-[#286672] mb-8 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Career Journey
              </h2>
              <div className="space-y-8">
                {workExperiences.map((exp, index) => (
                  <div key={exp.id} className="bg-white p-8 rounded-2xl border-2 border-gray-200 relative group transition-all hover:border-[#286672]/30">
                    <button 
                      onClick={() => removeWorkExperience(exp.id)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-1">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Role Title*</label>
                        <input type="text" className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#286672] focus:ring-2 focus:ring-[#286672]/30 transition-all" required />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Organization*</label>
                        <input type="text" className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#286672] focus:ring-2 focus:ring-[#286672]/30 transition-all" required />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                        <input type="text" className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#286672] focus:ring-2 focus:ring-[#286672]/30 transition-all" />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Engagement Type</label>
                        <select className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#286672] focus:ring-2 focus:ring-[#286672]/30 transition-all">
                          <option>Full-time</option>
                          <option>Part-time</option>
                          <option>Contract</option>
                          <option>Consulting</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Start Date*</label>
                        <input type="date" className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#286672] focus:ring-2 focus:ring-[#286672]/30 transition-all" required />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">End Date</label>
                        <input type="date" className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#286672] focus:ring-2 focus:ring-[#286672]/30 transition-all" disabled={exp.current} />
                        <label className="mt-3 flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <input 
                            type="checkbox" 
                            className="w-5 h-5 rounded accent-[#286672]"
                            checked={exp.current}
                            onChange={(e) => {
                              const updated = [...workExperiences];
                              updated[index].current = e.target.checked;
                              setWorkExperiences(updated);
                            }}
                          />
                          <span className="text-sm font-medium text-gray-700">Current Position</span>
                        </label>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Key Contributions*</label>
                      <textarea 
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#286672] focus:ring-2 focus:ring-[#286672]/30 h-32 transition-all"
                        placeholder="Example: Spearheaded digital transformation initiative resulting in 40% operational efficiency improvement..."
                        required
                      />
                    </div>
                  </div>
                ))}
                <button 
                  onClick={addWorkExperience}
                  className="w-full p-6 text-[#286672] hover:text-[#1d4a54] font-semibold flex items-center justify-center gap-3 border-2 border-dashed border-[#286672]/30 rounded-2xl hover:border-[#286672]/50 transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add Career Milestone
                </button>
              </div>
            </section>

            {/* Education */}
            <section className="mb-12 bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold text-[#286672] mb-8 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                Academic Credentials
              </h2>
              <div className="space-y-8">
                {educations.map((edu, index) => (
                  <div key={edu.id} className="bg-white p-8 rounded-2xl border-2 border-gray-200 relative group transition-all hover:border-[#286672]/30">
                    <button 
                      onClick={() => removeEducation(edu.id)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Institution*</label>
                        <input type="text" className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#286672] focus:ring-2 focus:ring-[#286672]/30 transition-all" required />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Degree*</label>
                        <select className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#286672] focus:ring-2 focus:ring-[#286672]/30 appearance-none bg-select-arrow bg-no-repeat bg-right-4 bg-[length:24px] transition-all" required>
                          <option>Bachelor's</option>
                          <option>Master's</option>
                          <option>Doctorate</option>
                          <option>Associate</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Field of Study*</label>
                        <input type="text" className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#286672] focus:ring-2 focus:ring-[#286672]/30 transition-all" required />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">GPA</label>
                        <input type="text" className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#286672] focus:ring-2 focus:ring-[#286672]/30 transition-all" placeholder="4.0 scale" />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Start Date*</label>
                        <input type="date" className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#286672] focus:ring-2 focus:ring-[#286672]/30 transition-all" required />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">End Date</label>
                        <input type="date" className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#286672] focus:ring-2 focus:ring-[#286672]/30 transition-all" disabled={edu.current} />
                        <label className="mt-3 flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <input 
                            type="checkbox" 
                            className="w-5 h-5 rounded accent-[#286672]"
                            checked={edu.current}
                            onChange={(e) => {
                              const updated = [...educations];
                              updated[index].current = e.target.checked;
                              setEducations(updated);
                            }}
                          />
                          <span className="text-sm font-medium text-gray-700">Currently enrolled</span>
                        </label>
                      </div>
                      <div className="md:col-span-2 space-y-1">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Honors & Awards</label>
                        <textarea 
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#286672] focus:ring-2 focus:ring-[#286672]/30 h-32 transition-all"
                          placeholder="Dean's List, Scholarships, etc."
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <button 
                  onClick={addEducation}
                  className="w-full p-6 text-[#286672] hover:text-[#1d4a54] font-semibold flex items-center justify-center gap-3 border-2 border-dashed border-[#286672]/30 rounded-2xl hover:border-[#286672]/50 transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add Education
                </button>
              </div>
            </section>
          </>
        ) : (
          /* Preview Section */
          <section className="space-y-8 animate-fade-in">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#286672]/10">
              <h2 className="text-2xl font-bold text-[#1d4a54] mb-6 flex items-center gap-3">
                <div className="p-3 bg-[#286672]/10 rounded-xl">
                  <svg className="w-7 h-7 text-[#286672]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Profile Preview
              </h2>
              
              {profileData ? (
                <div className="space-y-6 text-gray-700">
                  <div className="flex items-start gap-4 border-b pb-4 border-[#286672]/10">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[#1d4a54]">{profileData.name}</h3>
                      <p className="text-gray-600">{profileData.title}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm text-gray-500">Email</label>
                      <p className="mt-1">{profileData.email}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">Phone</label>
                      <p className="mt-1">{profileData.phone}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">Location</label>
                      <p className="mt-1">{profileData.location}</p>
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-sm text-gray-500">Bio</label>
                      <p className="mt-1 whitespace-pre-line">{profileData.bio}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <div className="animate-spin w-8 h-8 mx-auto mb-4 border-4 border-[#286672] border-t-transparent rounded-full"></div>
                  Loading profile data...
                </div>
              )}
            </div>
          </section>
        )}

        {/* Enhanced Save Button */}
        <button className="w-full bg-gradient-to-r from-[#286672] to-[#1d4a54] text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all transform hover:scale-[1.005] group">
          <span className="inline-block group-hover:-translate-y-[1px] transition-transform">
            Save Professional Profile
          </span>
          <svg 
            className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}