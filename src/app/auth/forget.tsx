"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import OTP from './otp';

interface ForgetProps {
  onClose: () => void;
}

export default function Forget({ onClose }: ForgetProps) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowOTP(true);
      setEmail('');
    } catch (error) {
      setMessage('Error sending reset instructions. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
      {showOTP ? (
        <OTP onClose={onClose} />
      ) : (
        <>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
          
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#1d4a54] mb-2 flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Reset Password
            </h1>
            <p className="text-gray-600">Enter your email to receive reset instructions</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#286672] focus:ring-2 focus:ring-[#286672]/30 transition-all"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#286672] to-[#1d4a54] text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all relative"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                </div>
              ) : (
                'Reset Password'
              )}
            </button>

            {message && (
              <div className={`p-4 rounded-xl text-sm ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                {message}
              </div>
            )}

            <div className="text-center text-sm text-gray-600">
              Remember your password?{' '}
              <Link 
                href="/auth/login" 
                className="text-[#286672] hover:text-[#1d4a54] font-semibold transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                }}
              >
                Sign in
              </Link>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
