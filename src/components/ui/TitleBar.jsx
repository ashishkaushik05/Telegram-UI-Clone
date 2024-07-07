import React from "react";

const TitleBar = ({ chat }) => {
  return (
    <div className="flex  h-[60px] items-center justify-between p-4 bg-white border-b border-gray-200">
<div className="flex flex-row items-center">
<div className="w-12 h-12  ml-3">
        <img src={chat.imageUrl} alt="profile" className="rounded-full" />
      </div>
      <div className="font-bold text-lg ml-5">{"Ashish"}</div>
</div>
      <div className="flex items-center space-x-2">
        <button className="p-2">Search</button>
        <button className="p-2">Options</button>
      </div>
    </div>
  );
};

export default TitleBar;
