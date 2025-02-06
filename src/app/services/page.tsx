'use client';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
export default function ContactPage() {
  const [showSignup, setShowSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const handleSignup = () => {
    // Add signup logic here
  };
  const handleLogin = () => {
    // Add login logic here
  };
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-white to-[#f0f4f5]">
      <div className=" w-full">
        <img 
          src="https://imagedelivery.net/P3Dzecn-jTdvXXgWWrFQig/e08bd403-df5c-47d0-617c-f5aaa4c80800/desktop" 
          alt="Dubai Skyline"
          className="w-full h-[60vh] object-cover"
        />
       
        
      </div>
      <div className=" flex flex-col items-center justify-center gap-4 px-4 py-12">
          <p className="text-base xs:text-xl text-[#286672] font-medium uppercase tracking-widest animate-pulse text-center">
            Information & Financial Technology Services
          </p>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-[#286672] tracking-tight text-center">
            Information & financial technology services
          </h1>
        </div>
        
      <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-24 relative">
  
        {/* Services Grid with Interactive Elements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 ">
       
          {/* Left Column */}
          <div className="space-y-8">
            <div className="group relative bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-[#286672] hover:border-[#3d8d9a] transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-r from-[#286672]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#286672] mb-4 sm:mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#3d8d9a] transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                The Offer
              </h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg transform group-hover:translate-x-2 transition-transform">
                We deliver premium cost-effective software solutions through strategic nearshore and offshore partnerships. 
                Our model ensures quality engineering outcomes while optimizing costs through seamless client-engineer collaboration.
              </p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#286672] mb-4 sm:mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#3d8d9a] animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Our Expertise
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {title: 'JAVA Ecosystem', tech: 'Java EE, Android, Microservices, Spring Framework', consultants: 75},
                  {title: '.NET Platform', tech: '.NET Framework, WPF, WCF, Silverlight', consultants: 75},
                  {title: 'PHP Solutions', tech: 'Laravel, Symfony, CodeIgniter', consultants: 75},
                  {title: 'Database Systems', tech: 'PostgreSQL, MySQL, Cassandra', consultants: 75},
                  {title: 'Web Technologies', tech: 'React, Angular, Bootstrap', consultants: 75},
                  {title: 'UI/UX Design', tech: 'Web/Mobile Design, User Experience', consultants: 75}
                ].map((item, index) => (
                  <div key={index} className="p-4 sm:p-5 bg-[#286672]/5 rounded-xl hover:bg-[#286672]/10 transition-colors transform hover:-translate-y-1 cursor-pointer group">
                    <h3 className="text-base sm:text-lg font-bold text-[#286672] mb-2 group-hover:text-[#1a4a54]">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3 group-hover:text-gray-800">{item.tech}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] sm:text-xs font-semibold text-[#3d8d9a] group-hover:text-[#286672]">{item.consultants}+ Consultants</span>
                      <div className="w-12 sm:w-16 h-1.5 sm:h-2 bg-[#286672]/20 rounded-full overflow-hidden">
                        <div className="h-full bg-[#286672] rounded-full animate-progress-grow" style={{width: '75%'}} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#286672] mb-4 sm:mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#3d8d9a] hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Operational Policies
              </h2>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="pb-4 sm:pb-6 border-b border-[#286672]/10 hover:border-[#3d8d9a] transition-colors">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#286672] mb-2 sm:mb-4">Quality Assurance Framework</h3>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base transform hover:translate-x-1 transition-transform">
                    Our multi-tiered approach combines highly educated resources with rigorous communication protocols to accelerate development 
                    while maintaining strict quality standards.
                  </p>
                </div>
                <div className="pb-4 sm:pb-6 border-b border-[#286672]/10 hover:border-[#3d8d9a] transition-colors">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#286672] mb-2 sm:mb-4">Project Execution Protocol</h3>
                  <ul className="space-y-3 sm:space-y-4">
                    {['Client-centric requirement alignment', 'Agile methodology integration', 'Multilingual communication standards', 
                      'Real-time progress transparency', 'Proactive risk mitigation'].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 sm:gap-3 group">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#3d8d9a] flex-shrink-0 mt-1 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm sm:text-base group-hover:text-[#286672] transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="p-3 sm:p-4 bg-[#286672]/5 rounded-lg hover:bg-[#286672]/10 transition-colors transform hover:scale-[1.02] cursor-pointer border border-transparent hover:border-[#286672]/20">
                    <p className="text-xs sm:text-sm text-gray-700">Military-grade data protection with automatic secure data purging protocols</p>
                  </div>
                  <div className="p-3 sm:p-4 bg-[#286672]/5 rounded-lg hover:bg-[#286672]/10 transition-colors transform hover:scale-[1.02] cursor-pointer border border-transparent hover:border-[#286672]/20">
                    <p className="text-xs sm:text-sm text-gray-700">Enterprise-grade VPN access to secure development environments</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Enhanced CTA Section */}
            <div className="bg-gradient-to-br from-[#286672] to-[#1a4a54] p-6 sm:p-8 rounded-2xl text-white transform hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:scale-[1.01] group">
              <div className="max-w-md mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 transform group-hover:scale-105 transition-transform">Global Talent Access</h2>
                <p className="mb-4 sm:mb-6 opacity-95 leading-relaxed text-sm sm:text-base group-hover:opacity-100 transition-opacity">
                  Curated network of 450+ Middle Eastern tech professionals available for immediate deployment
                </p>
                <button 
                  className="bg-white/90 text-[#286672] px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-bold hover:bg-white transition-all flex items-center gap-2 mx-auto hover:scale-105 active:scale-95 shadow-md hover:shadow-lg text-sm sm:text-base"
                  onClick={() => setShowSignup(true)}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <Dialog open={showSignup} onClose={() => setShowSignup(false)} className="relative z-50">
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                      <Dialog.Panel className="w-full max-w-md bg-white rounded-2xl p-6 sm:p-8 space-y-4 sm:space-y-6">
                        <Dialog.Title className="text-xl sm:text-2xl font-bold text-[#286672]">Create Account</Dialog.Title>
                        <Dialog.Description className="text-gray-600 text-sm sm:text-base">
                          Create an account by entering the information below. If you are a returning customer please login by clicking the button below.
                        </Dialog.Description>
                        
                        <div className="space-y-3 sm:space-y-4">
                          <input type="text" placeholder="Name" className="w-full p-2 sm:p-3 border rounded-lg text-sm sm:text-base" onChange={(e) => setName(e.target.value)} />
                          <input type="email" placeholder="E-mail" className="w-full p-2 sm:p-3 border rounded-lg text-sm sm:text-base" onChange={(e) => setEmail(e.target.value)} />
                          <input type="password" placeholder="Password" className="w-full p-2 sm:p-3 border rounded-lg text-sm sm:text-base" onChange={(e) => setPassword(e.target.value)} />
                          <input type="password" placeholder="Confirm Password" className="w-full p-2 sm:p-3 border rounded-lg text-sm sm:text-base" onChange={(e) => setConfirmPassword(e.target.value)} />
                          
                          <select className="w-full p-2 sm:p-3 border rounded-lg bg-[#f8fafb] text-sm sm:text-base" onChange={(e) => setRole(e.target.value)}>
                            <option>Select Role</option>
                            <option>Client</option>
                            <option>Developer</option>
                          </select>
                          
                          <div className="flex gap-4 pt-4">
                            <button onClick={handleLogin} className="flex-1 py-2 text-[#286672] border border-[#286672] rounded-lg hover:bg-[#286672]/10">
                              Login
                            </button>
                            <button onClick={handleSignup} className="flex-1 py-2 bg-[#286672] text-white rounded-lg hover:bg-[#286672]/90">
                              Sign Up
                            </button>
                          </div>
                          
                          <div className="p-4 bg-[#f0f4f5] rounded-lg text-sm text-gray-600">
                            We offer high quality cost-effective resources for software development, information security consulting and open source integration services near- and off-shore. We cut clients costs without affecting the quality of the engineered outcome.
                          </div>
                        </div>
                      </Dialog.Panel>
                    </div>
                  </Dialog>
                  Explore Talent Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}