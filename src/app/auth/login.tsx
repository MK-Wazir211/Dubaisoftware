'use client';
import React, { useState } from 'react';
import Forget from '../auth/forget';
import Register from '../auth/register';

interface LoginProps {
  onClose: () => void;
  onSwitchToRegister?: () => void;
}

export default function Login({ onClose }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [userType, setUserType] = useState<'applicant' | 'client'>('applicant');
  const [showForgetPassword, setShowForgetPassword] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage('Login successful! Redirecting...');
    } catch (error) {
      setMessage('Error: Invalid credentials or server error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      {!showForgetPassword && !showRegister && (
        <div className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-xl border border-[#286672]/10 transform transition-all">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
          
          <h2 className="text-2xl font-bold text-[#1d4a54] mb-6 text-center">Login</h2>

          <div className="flex gap-4 mb-6">
            <button
              type="button"
              onClick={() => setUserType('applicant')}
              className={`flex-1 p-3 rounded-xl border-2 transition-all ${
                userType === 'applicant' 
                  ? 'border-[#286672] bg-gradient-to-b from-[#286672]/10 to-transparent'
                  : 'border-gray-200 hover:border-[#286672]/50'
              }`}
            >
              <span className={`font-medium ${userType === 'applicant' ? 'text-[#1d4a54]' : 'text-gray-600'}`}>
                Job Seeker
              </span>
            </button>
            <button
              type="button"
              onClick={() => setUserType('client')}
              className={`flex-1 p-3 rounded-xl border-2 transition-all ${
                userType === 'client'
                  ? 'border-[#286672] bg-gradient-to-b from-[#286672]/10 to-transparent'
                  : 'border-gray-200 hover:border-[#286672]/50'
              }`}
            >
              <span className={`font-medium ${userType === 'client' ? 'text-[#1d4a54]' : 'text-gray-600'}`}>
                Client
              </span>
            </button>
          </div>


          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#286672] focus:ring-2 focus:ring-[#286672]/30"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#286672] focus:ring-2 focus:ring-[#286672]/30"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#286672] to-[#1d4a54] text-white py-3 rounded-lg font-medium hover:shadow-md transition-all relative"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                </div>
              ) : (
                'Sign In'
              )}
            </button>

            {message && (
              <div className={`p-3 rounded-lg text-sm ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                {message}
              </div>
            )}

            <div className="text-center text-sm text-gray-600">
              <button 
                type="button"
                className="text-[#286672] hover:text-[#1d4a54] font-medium cursor-pointer"
                onClick={() => {
                  setShowForgetPassword(true);
                }}
              >
                Forgot password?
              </button>
            </div>

            <div className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <button 
                className="text-[#286672] hover:text-[#1d4a54] font-medium cursor-pointer"
                onClick={() => {
                  setShowRegister(true);
                }}
              >
                Create account
              </button>
            </div>
          </form>
        </div>
      )}

      {showForgetPassword && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Forget onClose={() => setShowForgetPassword(false)} />
        </div>
      )}

      {showRegister && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Register onClose={() => {
            setShowRegister(false);
            onClose();
          }} />
        </div>
      )}
    </div>
  );
}
