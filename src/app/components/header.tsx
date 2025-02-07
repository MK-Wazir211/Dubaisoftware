'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useState, useEffect } from 'react';
import Login from '../auth/login';

import Register from '../auth/register';

config.autoAddCss = false;

library.add(faUser);

export default function Header() {
  const [userAuth, setUserAuth] = useState<{ 
    isLoggedIn: boolean; 
    userType: string | null 
  }>({ 
    isLoggedIn: false,
    userType: null
  });
  
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    const checkAuthStatus = () => {
      const user = JSON.parse(localStorage.getItem('user') || 'null');
      if (user) {
        setUserAuth({
          isLoggedIn: true,
          userType: user.userType
        });
      }
    };

    checkAuthStatus();

    window.addEventListener('storage', checkAuthStatus);
    return () => window.removeEventListener('storage', checkAuthStatus);
  }, []);

  const handleLoginSuccess = (userData: any) => {
    localStorage.setItem('user', JSON.stringify({
      isLoggedIn: true,
      userType: userData.userType
    }));
    setUserAuth({
      isLoggedIn: true,
      userType: userData.userType
    });
    setShowLogin(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUserAuth({
      isLoggedIn: false,
      userType: null
    });
  };

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
                { name: 'Services', path: '/services' },
                { name: 'Contact', path: '/contact' },
                { name: 'Careers', path: '/careers' }
              ].map((item) => (
                <Link 
                  key={item.name}
                  href={item.path}
                  className="relative text-gray-600 hover:text-[#286672] px-2 py-1.5 transition-all duration-200 group"
                >
                  <div className="flex flex-col items-center">
                    <span className="font-medium relative z-10">
                      {item.name}
                    </span>
                    <div className="absolute inset-0 -skew-x-12 bg-[#286672]/0 group-hover:bg-[#286672]/10 transition-all duration-300 rounded-lg" />
                    <div className="absolute bottom-0 left-1/2 w-0 h-px bg-[#286672] transition-all duration-300 group-hover:w-[110%] group-hover:left-[-5%]" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {userAuth.isLoggedIn ? (
                <>
                  {userAuth.userType === 'applicant' && (
                    <>
                      <div className="relative group">
                        <Link 
                          href="/profile" 
                          className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#286672] hover:border-[#1d4d5a] transition-all duration-300"
                        >
                          <img 
                            src={JSON.parse(localStorage.getItem('user') || '{}')?.photo || '/default-avatar.png'} 
                            alt="Profile" 
                            className="w-full h-full object-cover"
                          />
                        </Link>
                        <button 
                          onClick={handleLogout}
                          className="absolute hidden group-hover:block top-14 right-0 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg"
                        >
                          Logout
                        </button>
                      </div>
                      <Link href="/careers" className="relative bg-[#286672] text-white px-6 py-2.5 rounded-xl hover:bg-[#1d4d5a] transition-all duration-300 hover:shadow-lg hover:shadow-[#286672]/20 group overflow-hidden">
                        <span className="relative font-medium">Job Apply</span>
                      </Link>
                    </>
                  )}
                  {userAuth.userType === 'client' && (
                    <Link href="/cv-database" className="relative bg-[#286672] text-white px-6 py-2.5 rounded-xl hover:bg-[#1d4d5a] transition-all duration-300 hover:shadow-lg hover:shadow-[#286672]/20 group overflow-hidden">
                      <span className="relative flex items-center gap-2">
                        <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
                        CV Database
                      </span>
                    </Link>
                  )}
                </>
              ) : (
                <>
                  <button 
                    onClick={() => setShowRegister(true)}
                    className="relative bg-[#286672]/10 text-[#286672] hover:bg-[#286672]/20 px-6 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#286672]/20 group overflow-hidden"
                  >
                    Sign Up
                  </button>
                  <button 
                    onClick={() => setShowLogin(true)}
                    className="relative bg-[#286672] text-white px-6 py-2.5 rounded-xl hover:bg-[#1d4d5a] transition-all duration-300 hover:shadow-lg hover:shadow-[#286672]/20 group overflow-hidden"
                  >
                    Login
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {showLogin && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50">
          <Login 
            onClose={() => setShowLogin(false)}
            onSuccess={handleLoginSuccess}
          />
        </div>
      )}

      {showRegister && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50">
          <Register onClose={() => setShowRegister(false)} />
        </div>
      )}
    </>
  );
}
