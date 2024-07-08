import React, { useState } from "react";
import { FiSearch, FiMoreVertical, FiPhone } from "react-icons/fi";
import backArrow from '../../../public/images/backArrow.svg';

const TitleBar = ({ chat , setShowSideBar}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex h-[60px] items-center justify-between p-4 bg-white border-b border-gray-200">
      <div className="flex flex-row items-center">
      <div className="w-12 h-12 ml-3 hover:bg-slate-300 hover:cursor-pointer rounded-full" 
      onClick={()=>{
        setShowSideBar((prev) => !prev);
      }}>
          <img src={backArrow} alt="Back Button" className="rounded-full w-12 h-12 opacity-80" />
        </div>
        <div className="w-12 h-12 ml-3">
          <img src={chat.imageUrl} alt="profile" className="rounded-full" />
        </div>
        <div className="font-bold text-lg ml-5">{chat.creator.name || "Deleted User"}</div>
      </div>
      <div className="flex items-center space-x-2">
        <button className="p-2 text-gray-500">
          <FiPhone size={24} />
        </button>
        <button className="p-2 text-gray-500">
          <FiSearch size={24} />
        </button>
        <div className="relative">
          <button
            className="p-2 text-gray-500"
            onClick={toggleDropdown}
          >
            <FiMoreVertical size={24} />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-lg w-36">
              <ul className="py-1">
                <li className="flex items-center text-gray-800 px-4 py-1 hover:bg-gray-100 cursor-pointer text-nowrap text-sm font-bold">Mute</li>
                <li className="flex items-center text-gray-800 px-4 py-1 hover:bg-gray-100 cursor-pointer text-nowrap text-sm font-bold">Call</li>
                <li className="flex items-center text-gray-800 px-4 py-1 hover:bg-gray-100 cursor-pointer text-nowrap text-sm font-bold">Video Call</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
