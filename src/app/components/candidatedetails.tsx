'use client';
import React from 'react';
export default function MoreInformationPage() {
  const handlePrint = () => window.print();
  const handleDownloadPDF = () => window.open('#');
  const handleMessage = () => window.location.href = 'mailto:harkawat.disha@gmail.com';
  const handleViewCV = () => window.open('#');
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#286672]/10 via-[#1d4a54]/5 to-gray-50 p-4 md:p-8 lg:p-12 animate-gradient">
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl md:shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-[#286672] to-[#1d4a54] p-6 md:p-8 text-white relative">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-white/20 to-transparent rounded-2xl overflow-hidden">
              <img 
                src="https://dubaisoftwaresolutions.com//admin_res/images/users/3933/CEYLAN%20GUMUS.png" 
                alt="Disha AA"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                Disha AA
              </h1>
              <p className="text-lg md:text-xl opacity-90">Senior Test Automation Engineer | Senior Quality Specialist</p>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="absolute right-6 top-6 flex gap-3">
            <button onClick={handlePrint} className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
              </svg>
            </button>
            <button onClick={handleDownloadPDF} className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </button>
            <button onClick={handleMessage} className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
              </svg>
            </button>
            <button onClick={handleViewCV} className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </button>
          </div>
        </div>
        {/* Main Content */}
        <div className="p-6 md:p-8 space-y-6 md:space-y-8">
          {/* Objective Section */}
          <div className="border-l-4 border-[#286672] pl-4 md:pl-6 bg-gray-50/50 p-4 rounded-xl backdrop-blur-sm">
            <p className="text-gray-600 italic font-medium leading-relaxed">
              "To pursue a highly rewarding career, seeking for a job in challenging and healthy work environment where I can utilize my skills and knowledge efficiently for both organizational and personal growth."
            </p>
          </div>
          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-gray-50/50 p-4 rounded-xl backdrop-blur-sm hover:bg-gray-50/80 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600 p-2 rounded-lg hover:bg-white/50">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span>+48 739 623 946</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 p-2 rounded-lg hover:bg-white/50">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span>harkawat.disha@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50/50 p-4 rounded-xl backdrop-blur-sm hover:bg-gray-50/80 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Preferences</h3>
              <div className="space-y-2 text-gray-600">
                <div className="p-2 rounded-lg hover:bg-white/50">
                  <span className="font-medium">Availability:</span> Full Time
                </div>
                <div className="p-2 rounded-lg hover:bg-white/50">
                  <span className="font-medium">Expected Salary:</span> Market Competitive
                </div>
              </div>
            </div>
          </div>
          {/* Technical Skills Grid */}
          <div className="bg-gray-50/50 p-4 rounded-xl backdrop-blur-sm hover:bg-gray-50/80 transition-colors">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                { skill: 'Java', years: 9 },
                { skill: 'Selenium', years: 9 },
                { skill: 'C#', years: 4 },
                { skill: 'Postman', years: 5 },
                { skill: 'Jira', years: 4 },
                { skill: 'Jenkins', years: 4 },
                { skill: 'MySQL', years: 4 },
                { skill: 'Git', years: 4 },
              ].map((item, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="font-medium text-gray-900">{item.skill}</div>
                  <div className="text-sm text-gray-600">{item.years}+ years experience</div>
                </div>
              ))}
            </div>
          </div>
          {/* Experience Timeline */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Professional Experience</h3>
            {[
              {
                company: 'EPAM Systems',
                role: 'Senior Test Automation Engineer',
                duration: 'April 2022 – Present',
                domain: 'Banking',
                responsibilities: [
                  'Established framework using Selenium (Java) with POM framework',
                  'Created automated smoke test suite',
                  'Configured components in Sitecore and validation on UI'
                ],
                tech: ['Selenium', 'Java', 'Azure DevOps', 'Maven']
              },
              {
                company: 'Mediaocean',
                role: 'Senior Quality Specialist',
                duration: 'Sept 2018 – April 2022',
                domain: 'Media',
                responsibilities: [
                  'Automated Web application using Selenium with BDD framework',
                  'Maintained E2E Automation Framework',
                  'Led scrum and root cause analysis meetings'
                ],
                tech: ['C#', 'JIRA', 'Jenkins', 'MySQL']
              }
            ].map((exp, index) => (
              <div key={index} className="border-l-2 border-[#286672] pl-4 ml-2 space-y-4 group">
                <div className="relative -left-[6px]">
                  <div className="w-2 h-2 bg-[#286672] rounded-full transition-transform group-hover:scale-150"></div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-gray-900">{exp.role}</h4>
                  <div className="text-gray-600">
                    <p className="font-medium">{exp.company}</p>
                    <p className="text-sm">{exp.duration} | {exp.domain}</p>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="text-sm">{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.tech.map((tech, i) => (
                      <span key={i} className="bg-[#286672]/10 text-[#286672] px-2 py-1 rounded-full text-sm hover:bg-[#286672]/20 transition-colors">
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
  );
}
