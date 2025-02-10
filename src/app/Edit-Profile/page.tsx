'use client';

import React, { useState } from 'react';

const EditProfile = () => {
  const [profileData, setProfileData] = useState({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    address: '123 Main St, Anytown, USA',
    linkedIn: 'linkedin.com/in/johndoe',
    github: 'github.com/johndoe',
    portfolio: 'johndoe.com',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Profile data submitted:', profileData);
    alert('Profile updated!');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex items-center justify-center">
      <div className="max-w-3xl w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-[#286672] text-white py-4 px-6">
          <h1 className="text-3xl font-semibold text-center">Edit Your Profile</h1>
        </div>
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={profileData.fullName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={profileData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={profileData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                rows={3}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={profileData.address}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="linkedIn" className="block text-gray-700 text-sm font-bold mb-2">
                LinkedIn Profile
              </label>
              <input
                type="text"
                name="linkedIn"
                id="linkedIn"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={profileData.linkedIn}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="github" className="block text-gray-700 text-sm font-bold mb-2">
                GitHub Profile
              </label>
              <input
                type="text"
                name="github"
                id="github"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={profileData.github}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="portfolio" className="block text-gray-700 text-sm font-bold mb-2">
                Portfolio URL
              </label>
              <input
                type="text"
                name="portfolio"
                id="portfolio"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={profileData.portfolio}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-[#286672] hover:bg-[#1d4d5a] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;


