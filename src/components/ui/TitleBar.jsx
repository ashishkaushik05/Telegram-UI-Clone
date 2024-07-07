import React from "react";
import { FiSearch, FiMoreVertical, FiPhone } from "react-icons/fi"; // Import icons from react-icons

const TitleBar = ({ chat }) => {
  console.log(chat);
  return (
    <div className="flex h-[60px] items-center justify-between p-4 bg-white border-b border-gray-200">
      <div className="flex flex-row items-center">
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
        <button className="p-2 text-gray-500">
          <FiMoreVertical size={24} />
        </button>
      </div>
    </div>
  );
};

export default TitleBar;
