import React from 'react';

const ProfilePage = () => (
  <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
    <div className="flex items-center mb-6">
      <div className="w-24 h-24 bg-purple-300 rounded-full mr-4"></div>
      <div>
        <h2 className="text-2xl font-bold text-purple-800">Your NPC</h2>
        <p className="text-purple-600">Level 5 Explorer</p>
      </div>
    </div>
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2 text-purple-700">About Me</h3>
      <p className="text-purple-600">
        I'm an adventurous NPC looking to make friends and explore this virtual world!
      </p>
    </div>
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2 text-purple-700">Skills</h3>
      <div className="flex flex-wrap gap-2">
        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Friendly</span>
        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Curious</span>
        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Adventurous</span>
      </div>
    </div>
    <button className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition duration-300">
      Edit Profile
    </button>
  </div>
);

export default ProfilePage;