import React from 'react';

const SidebarHeader = () => {
  return (
    <div className="flex items-center gap-2 bg-white px-4 py-2">
      <button className="w-10 h-10 flex justify-center items-center bg-white rounded-full hover:bg-slate-100">
        <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M4 8h16M4 12h16M4 16h16"
            ></path>
        </svg>
        </button>



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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 20l-4.583-4.583M10 16a6 6 0 100-12 6 6 0 000 12z"
            />
          </svg>
        </div>
      </div>

    </div>
  );
};

export default SidebarHeader;
