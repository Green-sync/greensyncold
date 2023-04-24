import React from 'react';

const ProfileComponent = () => {
  return (
    <div className="bg-green-50 w-full py-4 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src="https://via.placeholder.com/150"
          alt="Profile picture"
        />
        <div>
          <h3 className="text-lg font-medium text-gray-800">John Doe</h3>
          <p className="text-gray-500">Account Manager</p>
        </div>
      </div>
      <div className="relative">
        <button
          type="button"
          className="py-2 px-4 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg"
        >
          Account settings
        </button>
        <ul className="absolute right-0 z-10 py-1 w-32 mt-2 bg-white rounded-lg shadow-xl hidden">
          <li>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-green-500 hover:text-white">Email address</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-green-500 hover:text-white">Phone number</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-green-500 hover:text-white">Edit profile</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-green-500 hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileComponent;
