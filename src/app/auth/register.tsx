'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';


interface RegisterProps {
  onClose: () => void;
  onSwitchToLogin?: () => void;
}

export default function Register({ onClose }: RegisterProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [userType, setUserType] = useState<'applicant' | 'client'>('applicant');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    if (password !== confirmPassword) {
      setMessage('Error: Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (!agreeTerms) {
      setMessage('Error: You must agree to the terms and conditions');
      setIsLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        name,
        email,
        userType,
        agreeTerms,
        createdAt: new Date(),
      });

      setMessage('Registration successful! Redirecting...');
      setTimeout(onClose, 2000);
    } catch (error: any) {
      console.error("Error registering user:", error);
      setMessage(`Error: ${error.message.split('/')[1]?.replace(').', '') || 'Registration failed'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-xl border border-[#286672]/10">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1d4a54] mb-4 flex items-center justify-center gap-2">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Create Account
          </h1>
          <p className="text-gray-600 text-sm mb-6">Select your account type to continue</p>
        </div>

        <div className="flex gap-3 mb-6">
          <button
            type="button"
            onClick={() => setUserType('applicant')}
            className={`flex-1 p-3 rounded-lg border-2 transition-colors ${
              userType === 'applicant' 
                ? 'border-[#286672] bg-[#286672]/10'
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
            className={`flex-1 p-3 rounded-lg border-2 transition-colors ${
              userType === 'client'
                ? 'border-[#286672] bg-[#286672]/10'
                : 'border-gray-200 hover:border-[#286672]/50'
            }`}
          >
            <span className={`font-medium ${userType === 'client' ? 'text-[#1d4a54]' : 'text-gray-600'}`}>
              Employer
            </span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#286672] focus:ring-2 focus:ring-[#286672]/30"
              placeholder="John Doe"
              required
            />
          </div>

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
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#286672] focus:ring-2 focus:ring-[#286672]/30"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#286672] focus:ring-2 focus:ring-[#286672]/30"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="h-4 w-4 text-[#286672] focus:ring-[#286672]/30 border-2 border-gray-300 rounded"
              required
            />
            <label className="ml-2 text-sm text-gray-600">
              I agree to the{' '}
              <Link href="/terms" className="text-[#286672] hover:text-[#1d4a54] font-medium">
                Terms & Conditions
              </Link>
            </label>
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
              'Create Account'
            )}
          </button>

          {message && (
            <div className={`p-3 rounded-lg text-sm ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
              {message}
            </div>
          )}

          <div className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <button 
              onClick={onClose}
              className="text-[#286672] hover:text-[#1d4a54] font-medium transition-colors cursor-pointer"
            >
              Sign in here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
