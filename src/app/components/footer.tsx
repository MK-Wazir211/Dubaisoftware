import Link from 'next/link';
import { FaEnvelope, FaMapMarkerAlt, FaGlobe, FaPhone } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#286672] to-[#1d4d5a] text-white mt-auto backdrop-blur-2xl border-t border-gray-800">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
          <div className="lg:col-span-2 space-y-6">
            <div className="group">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Dubai Software Solutions
              </h3>
              <p className="mt-1 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300 text-sm">
                Global Digital Innovation
                <span className="block w-10 h-0.5 bg-cyan-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                { 
                  icon: FaMapMarkerAlt,
                  title: 'Dubai Branch',
                  desc: 'Damac XL Tower, Al Abraj Street',
                  detail: 'Business Bay - Dubai',
                  phone: '(971) 4-5898421'
                },
                {
                  icon: FaMapMarkerAlt,
                  title: 'Head Office',
                  desc: 'Strandvägen 7A',
                  detail: 'Stockholm - Sweden',
                  phone: '+46 708 626 111'
                }
              ].map((location, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg transition-all hover:bg-gray-800/40">
                  <location.icon className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold text-base">{location.title}</p>
                    <p className="text-gray-400 text-sm">{location.desc}</p>
                    <p className="text-gray-500 text-xs">{location.detail}</p>
                    <div className="mt-1 flex items-center space-x-1.5 text-cyan-400">
                      <FaPhone className="w-3.5 h-3.5" />
                      <span className="text-xs">{location.phone}</span>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/40 transition-all">
                <FaEnvelope className="w-5 h-5 text-cyan-400" />
                <span className="text-base hover:text-cyan-400 transition-colors">
                  info@dubaisoftwaresolutions.com
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold text-cyan-400">
              Explore
            </h4>
            <nav className="space-y-2">
              {['Home', 'Company', 'Services', 'CV Database', 'Contact'].map((item) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`;
                
                return (
                  <Link 
                    key={item}
                    href={path}
                    className="flex items-center group text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="font-medium text-sm mr-1.5 transition-all">/ {item}</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/0 to-transparent group-hover:from-cyan-400/30 transition-all" />
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold text-cyan-400">
              Operations
            </h4>
            <div className="space-y-3">
              <div className="p-3 bg-gray-800/20 rounded-lg backdrop-blur-sm border border-gray-700/50">
                <p className="text-xs font-medium">Su - Sat: 9:00 - 18:00</p>
                <p className="text-[0.7rem] text-cyan-400 mt-0.5">Fr: Closed</p>
              </div>
              <div className="p-3 bg-gray-800/20 rounded-lg backdrop-blur-sm border border-gray-700/50">
                <p className="text-xs font-medium">Global Support</p>
                <p className="text-[0.7rem] text-cyan-400 mt-0.5">24/7 Critical Systems</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold text-cyan-400">
              Innovation Hub
            </h4>
            <form className="flex flex-col space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Join our tech newsletter"
                  className="w-full bg-gray-800/40 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-cyan-400 focus:border-transparent placeholder-gray-500 text-sm"
                />
                <FaGlobe className="w-4 h-4 text-cyan-400 absolute right-3 top-2.5" />
              </div>
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all hover:shadow-lg hover:shadow-cyan-500/20 text-sm"
              >
                <span>Subscribe</span>
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
            &copy; 2025 Dubai Software Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
