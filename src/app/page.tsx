'use client';
import React from 'react';
import Link from 'next/link';
import Login from '@/app/auth/login';

export default function Home() {
  const [selectedTech, setSelectedTech] = React.useState<{ 
    name: string;
    category: string;
    icon: string;
    description: string;
  } | null>(null);
  const [showMoreTech, setShowMoreTech] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(false);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-48 bg-cover bg-center" style={{ backgroundImage: `url('https://imagedelivery.net/P3Dzecn-jTdvXXgWWrFQig/d46504ae-4af5-450e-a6e3-b59fd3b53200/desktop')` }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-7xl mx-auto  px-4 py-6 text-center relative z-10">
          <h1 className="text-5xl font-bold text-white mb-6">
            Transform Your Business with Custom Software Solutions
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            We deliver cutting-edge software development services tailored to drive your business growth in the digital age.
          </p>
          <button 
            onClick={() => setShowLogin(true)}
            className="bg-white text-[#286672] px-8 py-3 rounded-full text-lg hover:bg-[#1d4d5a] hover:text-white transition-colors hover:shadow-xl hover:shadow-[#286672]/30"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            We cut clients costs without affecting the quality of the engineered outcome, as well as assist in communication between the client and the engineering team, emphasizing on mutual understanding.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Software application development',
                description: 'Custom-designed software development and integration services using state of the art technologies.',
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#3d8d9a] mb-4 transition-colors duration-300 group-hover:text-[#286672]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              },
              {
                title: 'Enterprise Web Development',
                description: 'Modern solutions for online commerce, online services and professional back-offices.',
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#3d8d9a] mb-4 transition-colors duration-300 group-hover:text-[#286672]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
              },
              {
                title: 'Technology consulting',
                description: 'System architecture, database design, documenting, testing and other consultancy.',
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#3d8d9a] mb-4 transition-colors duration-300 group-hover:text-[#286672]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              },
              {
                title: 'Mobile applications development',
                description: 'Dedicated and hybrid software and games for iOS and Android platforms.',
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#3d8d9a] mb-4 transition-colors duration-300 group-hover:text-[#286672]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              },
              {
                title: 'Database and application migration',
                description: 'Database design and software modernisation solutions based on open source and commercial platforms.',
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#3d8d9a] mb-4 transition-colors duration-300 group-hover:text-[#286672]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
              },
              {
                title: 'Open Source solutions integration',
                description: 'Open products installation, setup, third-party modules development, training and support.',
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#3d8d9a] mb-4 transition-colors duration-300 group-hover:text-[#286672]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
              },
              {
                title: 'Information Security',
                description: 'A full range of IT security services and solutions to help our clients define their strategy and ensure operational readiness.',
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#3d8d9a] mb-4 transition-colors duration-300 group-hover:text-[#286672]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              },
              {
                title: 'Cloud engineering',
                description: 'Offering tools and services for developing, operating and maintaining cloud computing systems and solutions.',
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#3d8d9a] mb-4 transition-colors duration-300 group-hover:text-[#286672]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
              },
              {
                title: 'API solutions',
                description: 'Developing proprietary API solutions and integrating the third-party services.',
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#3d8d9a] mb-4 transition-colors duration-300 group-hover:text-[#286672]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              }
            ].map((service) => (
              <div 
                key={service.title} 
                className="group p-6 border border-[#286672]/20 rounded-lg transition-all duration-300 hover:bg-[#f0f9fb] hover:border-[#286672]/40 hover:shadow-lg"
              >
                {service.icon}
                <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-[#286672]">{service.title}</h3>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-[#3d8d9a]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-[#f0f9fb]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">High Quality Cost-Effective Resources</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-6 bg-white rounded-lg shadow-sm border border-[#286672]/10">
              <p className="text-gray-600 mb-4">
                We offer full product development services from concept to deployment, utilizing our network of top-tier near-shore and off-shore developers. Our integrated approach ensures seamless collaboration while maintaining cost efficiency.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-[#286672]/10">
              <p className="text-gray-600">
                Enhance your existing team with our specialized software outsourcing solutions. Managed by our experienced technical leadership, we provide dedicated development teams that work as an extension of your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#286672] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Let's build something amazing together</p>
          <button 
            onClick={() => window.location.href = '/contact?schedule=consultation'}
            className="bg-white text-[#286672] px-8 py-3 rounded-full text-lg hover:bg-gray-100 transition-colors group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#286672]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            Schedule a Consultation
            <svg 
              className="ml-2 -mr-1 w-5 h-5 inline-block transition-transform group-hover:translate-x-1"
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-b from-[#286672]/10 to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#286672] to-[#1d4a54] bg-clip-text text-transparent">
            Cutting-Edge Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              {name: 'React', category: 'Frontend', icon: '🔄', description: 'A JavaScript library for building interactive user interfaces with component-based architecture.'},
              {name: 'Next.js', category: 'Fullstack', icon: '⚡', description: 'The React framework for production with hybrid static & server rendering and API routes.'},
              {name: 'Node.js', category: 'Backend', icon: '🚀', description: 'JavaScript runtime built on Chrome\'s V8 engine for building fast and scalable network applications.'},
              {name: 'TypeScript', category: 'Language', icon: '📘', description: 'Strongly typed programming language that builds on JavaScript with optional static typing.'},
              {name: 'Python', category: 'AI/ML', icon: '🤖', description: 'High-level programming language widely used in artificial intelligence and data science applications.'},
              {name: 'Go', category: 'Systems', icon: '⚙️', description: 'Statically typed compiled language with concurrency support and garbage collection.'},
              {name: 'Rust', category: 'Embedded', icon: '🦀', description: 'Memory-safe systems programming language emphasizing performance, reliability, and productivity.'},
              {name: 'AWS', category: 'Cloud', icon: '☁️', description: 'Comprehensive cloud platform offering over 200 fully featured services from data centers globally.'},
              {name: 'Kubernetes', category: 'DevOps', icon: '🔗', description: 'Open-source container orchestration system for automating deployment, scaling, and management.'},
              {name: 'TensorFlow', category: 'ML', icon: '🧠', description: 'End-to-end open source platform for machine learning and neural network applications.'},
              {name: 'GraphQL', category: 'API', icon: '🔍', description: 'Query language for APIs and runtime for fulfilling queries with existing data.'},
              {name: 'Docker', category: 'Containers', icon: '🐳', description: 'Platform for developing, shipping, and running applications in containers.'},
              {name: 'PostgreSQL', category: 'Database', icon: '🗃️', description: 'Powerful open-source object-relational database system with ACID compliance.'},
              {name: 'Kafka', category: 'Streaming', icon: '🌊', description: 'Distributed event streaming platform for high-performance data pipelines and streaming analytics.'},
              {name: 'WebAssembly', category: 'Web', icon: '🖥️', description: 'Binary instruction format for stack-based virtual machines enabling high-performance web applications.'},
            ].map((tech) => (
              <div 
                key={tech.name} 
                onClick={() => setSelectedTech(tech)}
                className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-[#286672]/10 relative overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#286672]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-4xl mb-3 transition-transform group-hover:scale-110">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-[#286672] mb-1">{tech.name}</h3>
                <p className="text-sm text-[#1d4a54]/80 font-medium">{tech.category}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#286672] to-[#1d4a54] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>

          {selectedTech && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedTech(null)}>
              <div className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <button 
                  onClick={() => setSelectedTech(null)}
                  className="absolute top-4 right-4 text-[#286672] hover:text-[#1d4a54] transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="text-4xl mb-4">{selectedTech.icon}</div>
                <h3 className="text-2xl font-bold text-[#286672] mb-2">{selectedTech.name}</h3>
                <p className="text-sm text-[#1d4a54]/80 font-medium mb-4">{selectedTech.category}</p>
                <p className="text-gray-600">{selectedTech.description}</p>
                <div className="mt-6 pt-4 border-t border-[#286672]/10">
                  <p className="text-sm text-[#286672]/80">Click anywhere outside to close</p>
                </div>
              </div>
            </div>
          )}

          <>
            <button 
              onClick={() => setShowMoreTech(!showMoreTech)}
              className="mt-12 text-center w-full group"
            >
              <p className="text-lg text-[#286672]/90 font-medium hover:text-[#1d4a54] transition-colors cursor-pointer">
                {showMoreTech ? 'Show less' : '...and other technologies powering modern digital solutions'}
                <span className="ml-2 inline-block group-hover:translate-y-0.5 transition-transform">
                  {showMoreTech ? '↑' : '↓'}
                  {/* Loading spinner */}
                  <svg 
                    className={`w-4 h-4 inline-block ml-2 animate-spin ${showMoreTech ? 'visible' : 'invisible'}`}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#286672" strokeWidth="4" fill="none"/>
                    <path className="opacity-75" fill="#286672" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                </span>
              </p>
            </button>
            
              {showMoreTech && (
                <div className="grid md:grid-cols-5 gap-6 mt-6 text-center">
                  {[
                    {name: 'TypeScript', category: 'Frontend', icon: '📘', description: 'Strongly typed JavaScript superset for large-scale applications'},
                    {name: 'Node.js', category: 'Backend', icon: '🟢', description: 'JavaScript runtime built on Chrome V8 engine for server-side applications'},
                    {name: 'Redis', category: 'Database', icon: '🗄️', description: 'In-memory data structure store used as database, cache, and message broker'},
                    {name: 'MongoDB', category: 'NoSQL', icon: '🍃', description: 'Document-oriented NoSQL database for modern applications'},
                    {name: 'RabbitMQ', category: 'Messaging', icon: '🐇', description: 'Open-source message broker supporting multiple messaging protocols'},
                    {name: 'Terraform', category: 'DevOps', icon: '🛠️', description: 'Infrastructure as code tool for building, changing, and versioning infrastructure'},
                    {name: 'Elasticsearch', category: 'Search', icon: '🔎', description: 'Distributed search and analytics engine built on Apache Lucene'},
                    {name: 'NGINX', category: 'Web Server', icon: '🔄', description: 'High-performance HTTP server and reverse proxy solution'},
                    {name: 'Flask', category: 'Microservices', icon: '🍶', description: 'Lightweight Python web framework for building microservices'},
                    {name: 'Spring Boot', category: 'Backend', icon: '🌱', description: 'Java-based framework for building production-grade applications'},
                    {name: 'Git', category: 'Version Control', icon: '📦', description: 'Distributed version control system for tracking code changes'},
                    {name: 'Prometheus', category: 'Monitoring', icon: '📈', description: 'Open-source systems monitoring and alerting toolkit'}
                  ].map((tech) => (
                    <div 
                      key={tech.name} 
                      onClick={() => setSelectedTech(tech)}
                      className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-[#286672]/10 relative overflow-hidden cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#286672]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="text-4xl mb-3 transition-transform group-hover:scale-110">
                        {tech.icon}
                      </div>
                      <h3 className="text-xl font-bold text-[#286672] mb-1">{tech.name}</h3>
                      <p className="text-sm text-[#1d4a54]/80 font-medium">{tech.category}</p>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#286672] to-[#1d4a54] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  ))}
                </div>
              )}
            </>
        </div>
      </section>

      {showLogin && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Login onClose={() => setShowLogin(false)} />
        </div>
      )}
    </main>
  );
}
