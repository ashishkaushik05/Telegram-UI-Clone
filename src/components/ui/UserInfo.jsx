import React from "react";
import CrossImage from "../../../public/images/cross.png"

const UserInfo = (chat) => {

  return (
    <div>
      <div className="flex flex-row">
        <button className="hover:bg-slate-200 rounded-full p-2 max-h-[40px] max-w-[40px]"><img src={CrossImage} alt=""  /></button>
        <p  className=" ml-3 text-[1.5rem]">User Info</p>
      </div>
      <div>
        <img src={"https://xsgames.co/randomusers/assets/avatars/female/45.jpg "} alt="" />
      </div>
    </div>
  );
};

export default UserInfo;
