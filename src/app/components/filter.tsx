'use client';
import React, { useState } from 'react';

const getExperienceGrade = (experience: number) => {
  if (experience >= 5) return 'AAA';
  if (experience >= 3) return 'AA';
  return 'A';
};

const generateCandidateData = () => {
  const experiences = Array.from({length: 21}, (_, i) => ({
    id: i + 1,
    name: `Candidate ${i + 1}`,
    role: ['Senior Engineer', 'Tech Lead', 'Architect'][Math.floor(Math.random() * 3)],
    experience: Math.floor(Math.random() * 10),
    skills: Math.floor(Math.random() * 10),
    rate: ['$80/h', '$120/h', 'N/A'][Math.floor(Math.random() * 3)],
    noticePeriod: ['Immediate', '2 weeks', '1 month'][Math.floor(Math.random() * 3)],
    relocation: Math.random() > 0.5 ? 'Yes' : 'No'
  }));
  
  return experiences.sort((a, b) => b.experience - a.experience);
};

export default function HomePage() {
  const [selectedRating, setSelectedRating] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const candidates = generateCandidateData();
  const [skillLevels, setSkillLevels] = useState<{[key: string]: string}>({});
  const [skillYears, setSkillYears] = useState<{[key: string]: string}>({});

  return (
    <>
     {/* Search and Filters */}
     <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 md:mb-12 transition-all duration-300 hover:shadow-2xl">

          <div className="flex flex-wrap gap-2 mt-2">
            {['All', 'Database', 'Backend', 'Frontend', 'Mobile Development', 'Servers', 'Testing', 'Full Stack Developer', 'Graphic Designer'].map(skill => (
              <button 
                key={skill} 
                className="px-2.5 py-1 text-sm font-medium text-[#286672] rounded-full hover:bg-[#286672]/10 transition-colors border border-transparent hover:border-[#286672]/20"
                onClick={() => {
                  if (skill === 'Database') {
                    const databaseSkills = document.getElementById('databaseSkillsRating');
                    databaseSkills?.classList.toggle('hidden');
                  }
                  if (skill === 'Backend') {
                    const backendSkills = document.getElementById('backendSkillsRating');
                    backendSkills?.classList.toggle('hidden');
                  }
                  if (skill === 'Frontend') {
                    const frontendSkills = document.getElementById('frontendSkillsRating');
                    frontendSkills?.classList.toggle('hidden');
                  }
                  if (skill === 'Mobile Development') {
                    const mobileSkills = document.getElementById('mobileSkillsRating');
                    mobileSkills?.classList.toggle('hidden');
                  }
                  if (skill === 'Servers') {
                    const serversSkills = document.getElementById('serversSkillsRating');
                    serversSkills?.classList.toggle('hidden');
                  }
                  if (skill === 'Testing') {
                    const testingSkills = document.getElementById('testingSkillsRating');
                    testingSkills?.classList.toggle('hidden');
                  }
                  if (skill === 'Full Stack Developer') {
                    const fullStackSkills = document.getElementById('fullStackSkillsRating');
                    fullStackSkills?.classList.toggle('hidden');
                  }
                  if (skill === 'Graphic Designer') {
                    const graphicDesignerSkills = document.getElementById('graphicDesignerSkillsRating');
                    graphicDesignerSkills?.classList.toggle('hidden');
                  }
                  console.log(`Filter by ${skill}`);
                }}
              >
                {skill}
              </button>
            ))}
            
            <div id="databaseSkillsRating" className="hidden w-full mt-6 bg-white p-6 rounded-xl shadow-lg border border-[#286672]/20">
              <h3 className="text-lg font-bold text-[#286672] mb-4">Database Skills Rating</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['MySQL', 'T-SQL', 'Firebird SQL', 'Oracle', 'MS SQL', 'SQL Server', 'SQL', 'NoSQL'].map((dbSkill) => (
                  <div key={dbSkill} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="bg-[#286672] text-white px-4 py-2 rounded-md min-w-[120px] text-center font-semibold">
                      {dbSkill}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <input 
                          type="range"
                          min="0"
                          max="10"
                          value={skillLevels[dbSkill] || '0'}
                          onChange={(e) => setSkillLevels({...skillLevels, [dbSkill]: e.target.value})}
                          className="w-full cursor-pointer"
                        />
                        <span className="text-sm w-12 text-gray-600">{`${skillLevels[dbSkill] || '0'}/10`}</span>
                      </div>
                      <p className="text-xs text-gray-500">Skill Level</p>
                      <div className="flex items-center gap-2">
                        <input
                          type="range"
                          min="0"
                          max="20"
                          value={skillYears[dbSkill] || '0'}
                          onChange={(e) => setSkillYears({...skillYears, [dbSkill]: e.target.value})}
                          className="w-full cursor-pointer"
                        />
                        <span className="text-sm w-12 text-gray-600">{`${skillYears[dbSkill] || '0'}yrs`}</span>
                      </div>
                      <p className="text-xs text-gray-500">Years of Experience</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="backendSkillsRating" className="hidden w-full mt-6 bg-white p-6 rounded-xl shadow-lg border border-[#286672]/20">
              <h3 className="text-lg font-bold text-[#286672] mb-4">Backend Development Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Java', 'VB .Net', 'JSP', 'ITIL', 'C#', 'Python', 'Ruby-on-Rails'].map((backendSkill) => (
                  <div key={backendSkill} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="bg-[#286672] text-white px-4 py-2 rounded-md min-w-[140px] text-center font-semibold">
                      {backendSkill}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <input 
                          type="range"
                          min="0"
                          max="10"
                          value={skillLevels[backendSkill] || '0'}
                          onChange={(e) => setSkillLevels({...skillLevels, [backendSkill]: e.target.value})}
                          className="w-full cursor-pointer"
                        />
                        <span className="text-sm w-12 text-gray-600">{`${skillLevels[backendSkill] || '0'}/10`}</span>
                      </div>
                      <p className="text-xs text-gray-500">Skill Level</p>
                      <div className="flex items-center gap-2">
                        <input
                          type="range"
                          min="0"
                          max="20"
                          value={skillYears[backendSkill] || '0'}
                          onChange={(e) => setSkillYears({...skillYears, [backendSkill]: e.target.value})}
                          className="w-full cursor-pointer"
                        />
                        <span className="text-sm w-12 text-gray-600">{`${skillYears[backendSkill] || '0'}yrs`}</span>
                      </div>
                      <p className="text-xs text-gray-500">Years of Experience</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="frontendSkillsRating" className="hidden w-full mt-6 bg-white p-6 rounded-xl shadow-lg border border-[#286672]/20">
              <h3 className="text-lg font-bold text-[#286672] mb-4">Frontend Development Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['HTML5', 'JavaScript', 'Ajax', 'CSS', 'CSS3', 'jQuery', 'Vue JS', 'HTML'].map((backendSkill) => (
                  <div key={backendSkill} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="bg-[#286672] text-white px-4 py-2 rounded-md min-w-[140px] text-center font-semibold">
                      {backendSkill}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <input 
                          type="range"
                          min="0"
                          max="10"
                          value={skillLevels[backendSkill] || '0'}
                          onChange={(e) => setSkillLevels({...skillLevels, [backendSkill]: e.target.value})}
                          className="w-full cursor-pointer"
                        />
                        <span className="text-sm w-12 text-gray-600">{`${skillLevels[backendSkill] || '0'}/10`}</span>
                      </div>
                      <p className="text-xs text-gray-500">Skill Level</p>
                      <div className="flex items-center gap-2">
                        <input
                          type="range"
                          min="0"
                          max="20"
                          value={skillYears[backendSkill] || '0'}
                          onChange={(e) => setSkillYears({...skillYears, [backendSkill]: e.target.value})}
                          className="w-full cursor-pointer"
                        />
                        <span className="text-sm w-12 text-gray-600">{`${skillYears[backendSkill] || '0'}yrs`}</span>
                      </div>
                      <p className="text-xs text-gray-500">Years of Experience</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="mobileSkillsRating" className="hidden w-full mt-6 bg-white p-6 rounded-xl shadow-lg border border-[#286672]/20">
              <h3 className="text-lg font-bold text-[#286672] mb-4">Mobile Development Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Phonegap', 'Objective-C', 'IOS', 'Flutter', 'Android', 'Swift', 'XCode', 'Autolayouts'].map((backendSkill) => (
                  <div key={backendSkill} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="bg-[#286672] text-white px-4 py-2 rounded-md min-w-[140px] text-center font-semibold">
                      {backendSkill}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <input 
                          type="range"
                          min="0"
                          max="10"
                          value={skillLevels[backendSkill] || '0'}
                          onChange={(e) => setSkillLevels({...skillLevels, [backendSkill]: e.target.value})}
                          className="w-full cursor-pointer"
                        />
                        <span className="text-sm w-12 text-gray-600">{`${skillLevels[backendSkill] || '0'}/10`}</span>
                      </div>
                      <p className="text-xs text-gray-500">Skill Level</p>
                      <div className="flex items-center gap-2">
                        <input
                          type="range"
                          min="0"
                          max="20"
                          value={skillYears[backendSkill] || '0'}
                          onChange={(e) => setSkillYears({...skillYears, [backendSkill]: e.target.value})}
                          className="w-full cursor-pointer"
                        />
                        <span className="text-sm w-12 text-gray-600">{`${skillYears[backendSkill] || '0'}yrs`}</span>
                      </div>
                      <p className="text-xs text-gray-500">Years of Experience</p>
                    </div>
                  </div>
                ))}
              </div>
            </div> 
            <div id="serversSkillsRating" className="hidden w-full mt-6 bg-white p-6 rounded-xl shadow-lg border border-[#286672]/20">
              <h3 className="text-lg font-bold text-[#286672] mb-4">Servers Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Phonegap', 'Objective-C', 'IOS', 'Flutter', 'Android', 'Swift', 'XCode', 'Autolayouts'].map((backendSkill) => (
                  <div key={backendSkill} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="bg-[#286672] text-white px-4 py-2 rounded-md min-w-[140px] text-center font-semibold">
                      {backendSkill}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <input 
                          type="range"
                          min="0"
                          max="10"
                          value={skillLevels[backendSkill] || '0'}
                          onChange={(e) => setSkillLevels({...skillLevels, [backendSkill]: e.target.value})}
                          className="w-full cursor-pointer"
                        />
                        <span className="text-sm w-12 text-gray-600">{`${skillLevels[backendSkill] || '0'}/10`}</span>
                      </div>
                      <p className="text-xs text-gray-500">Skill Level</p>
                      <div className="flex items-center gap-2">
                        <input
                          type="range"
                          min="0"
                          max="20"
                          value={skillYears[backendSkill] || '0'}
                          onChange={(e) => setSkillYears({...skillYears, [backendSkill]: e.target.value})}
                          className="w-full cursor-pointer"
                        />
                        <span className="text-sm w-12 text-gray-600">{`${skillYears[backendSkill] || '0'}yrs`}</span>
                      </div>
                      <p className="text-xs text-gray-500">Years of Experience</p>
                    </div>
                  </div>
                ))}
              </div>
            </div> 
            <div id="testingSkillsRating" className="hidden w-full mt-6 bg-white p-6 rounded-xl shadow-lg border border-[#286672]/20">
              <h3 className="text-lg font-bold text-[#286672] mb-4">Testing Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Phonegap', 'Objective-C', 'IOS', 'Flutter', 'Android', 'Swift', 'XCode', 'Autolayouts'].map((backendSkill) => (
                  <div key={backendSkill} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="bg-[#286672] text-white px-4 py-2 rounded-md min-w-[140px] text-center font-semibold">
                      {backendSkill}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <input 
                          type="range"
                          min="0"
                          max="10"
                          value={skillLevels[backendSkill] || '0'}
                          onChange={(e) => setSkillLevels({...skillLevels, [backendSkill]: e.target.value})}
                          className="w-full cursor-pointer"
                        />
                        <span className="text-sm w-12 text-gray-600">{`${skillLevels[backendSkill] || '0'}/10`}</span>
                      </div>
                      <p className="text-xs text-gray-500">Skill Level</p>
                      <div className="flex items-center gap-2">
                        <input
                          type="range"
                          min="0"
                          max="20"
                          value={skillYears[backendSkill] || '0'}
                          onChange={(e) => setSkillYears({...skillYears, [backendSkill]: e.target.value})}
                          className="w-full cursor-pointer"
                        />
                        <span className="text-sm w-12 text-gray-600">{`${skillYears[backendSkill] || '0'}yrs`}</span>
                      </div>
                      <p className="text-xs text-gray-500">Years of Experience</p>
                    </div>
                  </div>
                ))}
              </div>
            </div> 
            <div id="fullStackSkillsRating" className="hidden w-full mt-6 bg-white p-6 rounded-xl shadow-lg border border-[#286672]/20">
              <h3 className="text-lg font-bold text-[#286672] mb-4">Full Stack Development Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Phonegap', 'Objective-C', 'IOS', 'Flutter', 'Android', 'Swift', 'XCode', 'Autolayouts'].map((backendSkill) => (
                  <div key={backendSkill} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="bg-[#286672] text-white px-4 py-2 rounded-md min-w-[140px] text-center font-semibold">
                      {backendSkill}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <input 
                          type="range"
                          min="0"
                          max="10"
                          value={skillLevels[backendSkill] || '0'}
                          onChange={(e) => setSkillLevels({...skillLevels, [backendSkill]: e.target.value})}
                          className="w-full cursor-pointer"
                        />
                        <span className="text-sm w-12 text-gray-600">{`${skillLevels[backendSkill] || '0'}/10`}</span>
                      </div>
                      <p className="text-xs text-gray-500">Skill Level</p>
                      <div className="flex items-center gap-2">
                        <input
                          type="range"
                          min="0"
                          max="20"
                          value={skillYears[backendSkill] || '0'}
                          onChange={(e) => setSkillYears({...skillYears, [backendSkill]: e.target.value})}
                          className="w-full cursor-pointer"
                        />
                        <span className="text-sm w-12 text-gray-600">{`${skillYears[backendSkill] || '0'}yrs`}</span>
                      </div>
                      <p className="text-xs text-gray-500">Years of Experience</p>
                    </div>
                  </div>
                ))}
              </div>
            </div> 
            <div id="graphicDesignSkillsRating" className="hidden w-full mt-6 bg-white p-6 rounded-xl shadow-lg border border-[#286672]/20">
              <h3 className="text-lg font-bold text-[#286672] mb-4">Graphic Design Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Phonegap', 'Objective-C', 'IOS', 'Flutter', 'Android', 'Swift', 'XCode', 'Autolayouts'].map((backendSkill) => (
                  <div key={backendSkill} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="bg-[#286672] text-white px-4 py-2 rounded-md min-w-[140px] text-center font-semibold">
                      {backendSkill}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <input 
                          type="range"
                          min="0"
                          max="10"
                          value={skillLevels[backendSkill] || '0'}
                          onChange={(e) => setSkillLevels({...skillLevels, [backendSkill]: e.target.value})}
                          className="w-full cursor-pointer"
                        />
                        <span className="text-sm w-12 text-gray-600">{`${skillLevels[backendSkill] || '0'}/10`}</span>
                      </div>
                      <p className="text-xs text-gray-500">Skill Level</p>
                      <div className="flex items-center gap-2">
                        <input
                          type="range"
                          min="0"
                          max="20"
                          value={skillYears[backendSkill] || '0'}
                          onChange={(e) => setSkillYears({...skillYears, [backendSkill]: e.target.value})}
                          className="w-full cursor-pointer"
                        />
                        <span className="text-sm w-12 text-gray-600">{`${skillYears[backendSkill] || '0'}yrs`}</span>
                      </div>
                      <p className="text-xs text-gray-500">Years of Experience</p>
                    </div>
                  </div>
                ))}
              </div>
            </div> 
      
          </div>
          

          {/* Rest of the existing code remains same */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="relative lg:col-span-2">
              <input 
                type="text" 
                placeholder="Select filter" 
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#286672] focus:border-transparent text-sm md:text-base"
                onClick={(e) => {
                  const searchOptions = document.getElementById('searchOptions');
                  if (searchOptions) {
                    searchOptions.classList.toggle('hidden');
                    if (!searchOptions.classList.contains('hidden')) {
                      (e.target as HTMLInputElement).placeholder = 'Select filter';
                      setSelectedFilter('');
                    }
                  }
                }}
              />
              <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              
              <div id="searchOptions" className="hidden absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-10">
                <div className="p-2 space-y-1">
                  {['Name', 'Month', 'Year', 'Skill', 'Designation'].map((option) => (
                    <button
                      key={option}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-[#286672]/10 rounded-lg"
                      onClick={() => {
                        const input = document.querySelector('input[placeholder="Select filter"]') as HTMLInputElement;
                        if (input) {
                          input.placeholder = `${option}`;
                          document.getElementById('searchOptions')?.classList.add('hidden');
                          setSelectedFilter(prev => prev === option ? '' : option);
                        }
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {selectedFilter === 'Skill' && (
                <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-2 p-2 bg-gray-50 rounded-xl mt-2">
                  {['React', 'Node.js', 'Python', 'AWS', 'TypeScript', 'Docker'].map(skill => (
                    <button 
                      key={skill} 
                      className="px-3 py-1.5 text-sm font-medium bg-white border-2 border-[#286672]/20 rounded-lg hover:bg-[#286672]/10 transition-colors"
                      onClick={() => console.log(`Filter by ${skill}`)}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              )}

              {selectedFilter === 'Name' && (
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Enter candidate name..."
                    className="w-full px-4 py-2 border-2 border-gray-100 rounded-xl focus:ring-2 focus:ring-[#286672] text-sm"
                    onChange={(e) => console.log(`Search: ${e.target.value}`)}
                  />
                </div>
              )}

              {selectedFilter === 'Month' && (
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(month => (
                    <button
                      key={month}
                      className="px-2 py-1 text-sm bg-white border-2 border-[#286672]/20 rounded-lg hover:bg-[#286672]/10"
                      onClick={() => console.log(`Selected month: ${month}`)}
                    >
                      {month}
                    </button>
                  ))}
                </div>
              )}

              {selectedFilter === 'Year' && (
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {['2024', '2023', '2022', '2021', '2020', '2019'].map(year => (
                    <button
                      key={year}
                      className="px-3 py-1.5 text-sm bg-white border-2 border-[#286672]/20 rounded-lg hover:bg-[#286672]/10"
                      onClick={() => console.log(`Selected year: ${year}`)}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <select className="p-3 border-2 border-gray-100 rounded-xl bg-white focus:ring-2 focus:ring-[#286672] text-sm md:text-base">
              <option>Experience Tier</option>
              <option>Emerging (0-2 yrs)</option>
              <option>Established (3-5 yrs)</option>
              <option>Expert (5+ yrs)</option>
            </select>
            
            <button className="bg-gradient-to-r from-[#286672] to-[#1d4a54] text-white p-3 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 font-medium text-sm md:text-base transform hover:scale-[1.02]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span className="hidden sm:inline">Refine Search</span>
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-100">
            <div className="flex flex-wrap gap-2">
              {['A', 'AA', 'AAA'].map((rating) => (
                <button 
                  key={rating} 
                  onClick={() => setSelectedRating(selectedRating === rating ? '' : rating)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    selectedRating === rating 
                      ? 'bg-gradient-to-r from-[#286672] to-[#1d4a54] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-[#286672]/10 hover:text-[#286672]'
                  }`}
                >
                  {rating} Tier
                </button>
              ))}
            </div>
          </div>
        </div>

       
      </div>
    </>
  );
}
