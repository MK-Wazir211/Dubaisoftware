export default function CompanyPage() {
  return (
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#f0f4f5] to-white">
          <div className="relative w-full">
              <img 
                  src="https://imagedelivery.net/P3Dzecn-jTdvXXgWWrFQig/183859a6-709c-4705-8f69-461d6ca99200/desktop" 
                  alt="Dubai Skyline"
                  className="w-full h-[80vh] object-cover"
              />
             
          </div>
          <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#286672] to-[#3d8d9a] text-transparent bg-clip-text">Empowering Your Digital Transformation</h2>
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
                In the era of rapid technological advancements, adaptability is paramount. Dubai Software Solutions eliminates the frustration and hesitation in developing your next IT project. If you can imagine it, we can execute it. Your imagination is the limit.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-12 sm:mb-16">
              <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#286672] to-[#3d8d9a] text-white rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[#286672]">End-to-End IT Solutions</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  From project hiccups to timeline delays, our highly-trained IT professionals are ready to step in anytime. We reduce your risk of failure while ensuring compliance with industry standards.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#286672] to-[#3d8d9a] text-white rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[#286672]">System Integration Expertise</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Leveraging our extensive IT expertise, we assist you with any system integration requirements to boost productivity and efficiency within your organization.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#286672] to-[#3d8d9a] rounded-2xl shadow-2xl p-8 sm:p-10 mb-12 sm:mb-16 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white text-[#286672] rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Secure Backups & Quick Recovery</h3>
              <p className="text-white leading-relaxed mb-6">
                Our well-trained IT professionals ensure that you have secure backups and quick recovery systems in place to protect against potential IT infrastructure failures.
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-semibold text-[#286672] mb-6">Software Development Outsourcing Done Right</p>
              <a href="/contact" className="inline-block bg-gradient-to-r from-[#286672] to-[#3d8d9a] text-white text-lg font-semibold px-8 py-4 rounded-full shadow-2xl hover:from-[#3d8d9a] hover:to-[#286672] transition duration-300">
                Contact Us Today
              </a>
            </div>
          </section>
          <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 relative z-10">
                
      
              {/* Services Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-24 sm:mb-32">
                  <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500 p-8 sm:p-10 hover:bg-gradient-to-r hover:from-[#286672]/10 hover:to-[#3d8d9a]/10">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#286672] to-[#3d8d9a] text-white rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-105 transition-transform duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                          </svg>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#286672] group-hover:text-[#1a4a54]">Strategic Planning</h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-800">Collaborating closely with your team, we align our innovative solutions with your business objectives for exceptional results.</p>
                  </div>
                  <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500 p-8 sm:p-10 hover:bg-gradient-to-r hover:from-[#286672]/10 hover:to-[#3d8d9a]/10">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#286672] to-[#3d8d9a] text-white rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-105 transition-transform duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#286672] group-hover:text-[#1a4a54]">Expert Development</h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-800">Leveraging cutting-edge technologies, we deliver high-performance solutions optimized for quality.</p>
                  </div>
                  <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500 p-8 sm:p-10 hover:bg-gradient-to-r hover:from-[#286672]/10 hover:to-[#3d8d9a]/10">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#286672] to-[#3d8d9a] text-white rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-105 transition-transform duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#286672] group-hover:text-[#1a4a54]">Quality Assurance</h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-800">Our rigorous testing ensures flawless functionality and optimal user experiences that exceed expectations.</p>
                  </div>
              </div>
              {/* Team Section */}
              <section className="mb-24 sm:mb-32">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#286672] to-[#3d8d9a]">
                      Leadership Team
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                      <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500 p-8 sm:p-10 hover:bg-gradient-to-r hover:from-[#286672]/10 hover:to-[#3d8d9a]/10">
                          <div className="flex flex-col sm:flex-row items-center mb-6 sm:mb-8 sm:space-x-6">
                              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-[#286672] to-[#3d8d9a] mb-4 sm:mb-0 flex-shrink-0 shadow-lg overflow-hidden">
                                  <img src="/christopher-jarl.jpg" alt="Christopher M. Jarl" className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105" />
                              </div>
                              <div>
                                  <h3 className="text-xl sm:text-2xl font-bold text-[#286672] group-hover:text-[#1a4a54]">Christopher M. Jarl</h3>
                                  <p className="text-[#3d8d9a] font-semibold group-hover:text-[#286672]">CEO/Head Of Sales
                                  </p>
                                  <p className="text-[#3d8d9a] font-semibold group-hover:text-[#286672]">Seasoned consulting and outsourcing business professional
                                  </p>
                              </div>
                          </div>
                          <p className="text-gray-600 leading-relaxed group-hover:text-gray-800">A visionary leader with over 15 years of experience in global markets, specializing in strategic consulting and digital transformation initiatives.</p>
                      </div>
                      <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500 p-8 sm:p-10 hover:bg-gradient-to-r hover:from-[#286672]/10 hover:to-[#3d8d9a]/10">
                          <div className="flex flex-col sm:flex-row items-center mb-6 sm:mb-8 sm:space-x-6">
                              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-[#286672] to-[#3d8d9a] mb-4 sm:mb-0 flex-shrink-0 shadow-lg overflow-hidden">
                                  <img src="/rehan-khan.jpg" alt="Rehan Khan" className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105" />
                              </div>
                              <div>
                                  <h3 className="text-xl sm:text-2xl font-bold text-[#286672] group-hover:text-[#1a4a54]">Rehan Khan</h3>
                                  <p className="text-[#3d8d9a] font-semibold group-hover:text-[#286672]">Head of Engineering</p>
                                  <p className="text-[#3d8d9a] font-semibold group-hover:text-[#286672]">Professional software engineer and team leader 
</p>
                              </div>
                          </div>
                          <p className="text-gray-600 leading-relaxed group-hover:text-gray-800">An innovative technology leader with extensive experience in architecting scalable solutions and driving technical excellence across global teams.</p>
                      </div>
                  </div>
              </section>
              {/* Careers Section */}
              <section className="bg-gradient-to-r from-[#286672] to-[#3d8d9a] rounded-2xl text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden">
                  <div className="max-w-4xl mx-auto relative z-10">
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">Join our team
                      </h2>
                      <p className="text-lg sm:text-xl opacity-90 mb-8 sm:mb-10 leading-relaxed">
                      Dubai Software Solutions keeps hiring frontend and backend engineers, desginers and mobile application developers to work in our office in Dubai for the clients around the world. Are you interested in a modern working environment and a great salary, apply now.
                      </p>
                      <p className="text-lg sm:text-xl opacity-90 mb-10 sm:mb-12 leading-relaxed">
                          Experience a culture of innovation, competitive compensation, and endless opportunities for growth.
                      </p>
                      <a href="/careers" className="bg-white text-[#286672] px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-lg sm:text-xl hover:bg-opacity-90 transition-colors duration-300 inline-block relative z-10">
                          Apply Now
                      </a>
                  </div>
                  <div className="absolute inset-0">
                      <svg className="absolute h-full w-full text-white opacity-10" fill="currentColor" viewBox="0 0 1200 800">
                          <path d="M600,0C268.62915,0,0,268.62915,0,600s268.62915,600,600,600s600-268.62915,600-600S931.37085,0,600,0z M600,1000C358.52264,1000,200,841.47736,200,600S358.52264,200,600,200s400,158.52264,400,400S841.47736,1000,600,1000z"/>
                          <path d="M600,400c-110.45695,0-200,89.54305-200,200s89.54305,200,200,200s200-89.54305,200-200S710.45695,400,600,400z M600,700c-55.22847,0-100-44.77153-100-100s44.77153-100,100-100s100,44.77153,100,100S655.22847,700,600,700z"/>
                      </svg>
                  </div>
              </section>
          </section>
      </main>
  );
}