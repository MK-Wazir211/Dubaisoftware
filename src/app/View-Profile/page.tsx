'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const ViewProfile = () => {
  const [profileData, setProfileData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    linkedIn: '',
    github: '',
    portfolio: '',
  });
  const router = useRouter();

  useEffect(() => {
    // Fetch profile data from an API or database here
    // For now, using dummy data
    const fetchData = async () => {
      // Simulate fetching data
      await new Promise((resolve) => setTimeout(resolve, 500));
      setProfileData({
        fullName: 'John Doe',
        email: 'john.doe@example.com',
        phone: '(555) 123-4567',
        address: '123 Main St, Anytown, USA',
        linkedIn: 'linkedin.com/in/johndoe',
        github: 'github.com/johndoe',
        portfolio: 'johndoe.com',
      });
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   // Check if the component is properly mounted
  //   console.log('ViewProfile component mounted');
  // }, []);

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-semibold text-gray-800">Your Profile</h1>
        <Link href="/Components/editprofile" className="bg-[#286672] text-white px-4 py-2 rounded-md hover:bg-[#1d4d5a] transition-colors">
          Edit Profile
        </Link>
      </div>

      <div className="bg-white shadow overflow-hidden rounded-lg">
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Full name
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {profileData.fullName || 'N/A'}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {profileData.email || 'N/A'}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Phone
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {profileData.phone || 'N/A'}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {profileData.address || 'N/A'}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                LinkedIn
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {profileData.linkedIn ? (
                  <a href={`https://${profileData.linkedIn}`} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    {profileData.linkedIn}
                  </a>
                ) : 'N/A'}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                GitHub
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {profileData.github ? (
                  <a href={`https://${profileData.github}`} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    {profileData.github}
                  </a>
                ) : 'N/A'}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Portfolio
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {profileData.portfolio ? (
                  <a href={`https://${profileData.portfolio}`} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    {profileData.portfolio}
                  </a>
                ) : 'N/A'}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
