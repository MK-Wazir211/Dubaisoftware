'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import CVDatabase from '../Cv-Database/page';

config.autoAddCss = false;
library.add(faUser);
export default function Header() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white backdrop-blur-md shadow-sm hover:shadow-md transition-all w-full mx-auto">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center group">
              <img 
                src="https://imagedelivery.net/P3Dzecn-jTdvXXgWWrFQig/f1fb7174-fff3-490d-7bfc-a803b0cac100/medium" 
                alt="Dubai Software Solutions" 
                className="h-9 transition-all duration-300 group-hover:scale-105 group-active:scale-95"
              />
            </Link>
            
            <div className="hidden md:flex items-center gap-10">
              {[
                { name: 'Home', path: '/' },
                { name: 'Company', path: '/company' },
                { name: 'Services', path: '/Services' },
                { name: 'Contact', path: '/Contact' },
                { name: 'Careers', path: '/Careers' },
                { 
                  name: 'Profile', 
                  path: '/profile',

                  subItems: [
                    { name: 'Saved Jobs', path: '/Saved-Jobs' },
                    { name: 'Job Applications', path: '/Job-Applications' },
                    { name: 'Edit Profile', path: '/Edit-Profile' },
                    { name: 'View Profile', path: '/View-Profile' },
                    { name: 'Logout', path: '/logout' }
                  ]

                },
                { name: 'CV Database', path: '/Cv-Database' }
              ].map((item) => (
                <div key={item.name} className="group relative">
                  <Link 
                    href={item.path}
                    className="relative text-gray-600 hover:text-[#286672] px-2 py-1.5 transition-all duration-200"
                  >
                    <div className="flex flex-col items-center">
                      <span className="font-medium relative z-10 hover:scale-110 transition-transform duration-200">
                        {item.name}
                        {item.subItems && <span className="ml-1 text-xs">▼</span>}
                      </span>
                      <div className="absolute inset-0 -skew-x-12 bg-[#286672]/0 group-hover:bg-[#286672]/10 transition-all duration-300 rounded-lg" />
                      <div className="absolute bottom-0 left-1/2 w-0 h-px bg-[#286672] transition-all duration-300 group-hover:w-[110%] group-hover:left-[-5%]" />
                    </div>
                  </Link>
                  
                  {item.subItems && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-lg shadow-lg p-2 min-w-[200px]">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.path}
                            className="block px-4 py-2 text-gray-600 hover:bg-[#286672]/5 hover:text-[#286672] rounded-md transition-colors hover:scale-105"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Link href="/login" className="relative bg-[#286672] text-white px-6 py-2.5 rounded-xl hover:bg-[#1d4d5a] transition-all duration-300 hover:shadow-lg hover:shadow-[#286672]/20 group overflow-hidden">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}