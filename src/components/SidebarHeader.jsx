import React, { useState } from 'react';

const ToggleSwitch = ({checked, onChange}) => {
  return (
    <label className="relative inline-block w-10 h-6 bg-gray-200 rounded-full cursor-pointer">
      <input
        type="checkbox"
        className="absolute appearance-none cursor-pointer w-full h-full rounded-full bg-gray-400 border-2 border-gray-200 outline-none checked:bg-Primary checked:border-transparent checked:right-0 transition-all duration-300"
        checked={checked}
        onChange={onChange}
      />
      <span
        className={`absolute inline-block w-4 h-4 bg-white rounded-full border-2 border-gray-200 transform duration-300 ${checked ? 'translate-x-4' : ''}`}
      />
    </label>
  );
};

const SidebarHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hasAnimations, setHasAnimations] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Add logic to apply dark mode theme
  };

  const toggleAnimations = () => {
    setHasAnimations(!hasAnimations);
    // Add logic to toggle animations
  };

  return (
    <div className="flex items-center gap-2 bg-white px-4 py-2 relative">
      <button
        className="w-10 h-10 flex justify-center items-center bg-white rounded-full hover:bg-slate-100 focus:outline-none"
        onClick={toggleDropdown}
      >
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 8h16M4 12h16M4 16h16"></path>
        </svg>
      </button>

      {isDropdownOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-lg w-56">
          <ul className="p-2">
            <li className="flex items-center text-gray-800 px-4 py-1 hover:bg-gray-100 hover:rounded-md cursor-pointer text-nowrap text-sm font-bold">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              Saved Messages
            </li>
            <li className="flex items-center text-gray-800 px-4 py-2 hover:bg-gray-100 cursor-pointer text-nowrap text-sm font-bold">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              My Story
            </li>
            <li className="flex items-center text-gray-800 px-4 py-2 hover:bg-gray-100 cursor-pointer text-nowrap text-sm font-bold">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              Contacts
            </li>
            <li className="flex items-center text-gray-800 px-4 py-2 hover:bg-gray-100 cursor-pointer text-nowrap text-sm font-bold">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              Settings
            </li>
            <li className="flex gap-10 items-center text-gray-800 px-4 py-2 hover:bg-gray-100 cursor-pointer text-nowrap text-sm font-bold">
              <div className='flex'>
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              Dark Mode
              </div>
              <ToggleSwitch checked={isDarkMode} onChange={toggleDarkMode} />
            </li>
            <li className="flex gap-10 items-center text-gray-800 px-4 py-2 hover:bg-gray-100 cursor-pointer text-nowrap text-sm font-bold">
              <div className='flex'>
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              Animations
              </div>
              <ToggleSwitch checked={hasAnimations} onChange={toggleAnimations} />
            </li>
            <li className="flex items-center text-gray-800 px-4 py-2 hover:bg-gray-100 cursor-pointer text-nowrap text-sm font-bold">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              Telegram Features
            </li>
            <li className="flex items-center text-gray-800 px-4 py-2 hover:bg-gray-100 cursor-pointer text-nowrap text-sm font-bold">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              Report Bug
            </li>
            <li className="flex items-center text-gray-800 px-4 py-2 hover:bg-gray-100 cursor-pointer text-nowrap text-sm font-bold">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              Switch to a Version
            </li>
            <li className="flex items-center text-gray-800 px-4 py-2 hover:bg-gray-100 cursor-pointer text-nowrap text-sm font-bold">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              Install App
            </li>
          </ul>
        </div>
      )}

      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="p-2 pl-10 pr-4 border rounded-3xl focus:outline-1 focus:outline-blue-600 hover:outline-1 hover:outline-slate-200"
          style={{ width: '334px' }}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 20l-4.583-4.583M10 16a6 6 0 100-12 6 6 0 000 12z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SidebarHeader;
