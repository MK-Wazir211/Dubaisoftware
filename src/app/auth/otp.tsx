"use client";
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface OTPProps {
  onClose: () => void;
}

export default function OTP({ onClose }: OTPProps) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [resendMessage, setResendMessage] = useState('');
  const inputs = useRef<Array<HTMLInputElement | null>>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    
    if (otp.some(digit => digit === '')) {
      setMessage('Error: Please fill all OTP digits');
      setIsLoading(false);
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage('Verification successful! Redirecting...');
    } catch (error) {
      setMessage('Error: Verification failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    setResendMessage('New OTP sent to your email');
    setTimeout(() => setResendMessage(''), 5000);
  };

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== '' && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  return (
    <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
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
          OTP Verification
        </h1>
        <p className="text-gray-600">Enter the 6-digit code sent to your email</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-center gap-3 mb-8">
          {otp.map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={otp[index]}
              onChange={(e) => handleChange(index, e.target.value)}
              ref={(el) => {
                inputs.current[index] = el;
              }}
              className="w-12 h-12 text-2xl text-center border-2 border-gray-200 rounded-lg focus:border-[#286672] focus:ring-2 focus:ring-[#28667230]"
              autoFocus={index === 0}
            />
          ))}
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
            'Verify OTP'
          )}
        </button>

        {message && (
          <div className={`p-4 rounded-xl text-sm ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {message}
          </div>
        )}

        <div className="text-center text-sm text-gray-600">
          Didn't receive code?{' '}
          <button
            onClick={handleResend}
            className="text-[#286672] hover:text-[#1d4a54] font-semibold transition-colors cursor-pointer"
          >
            Resend OTP
          </button>
          {resendMessage && (
            <div className="mt-2 text-green-600 text-sm">
              {resendMessage}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
