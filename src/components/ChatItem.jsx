import React, { useState, useEffect } from "react";
import { formatMessageDate, getRandomImageUrl } from "../../../utils";

const ChatItem = ({
  name,
  msgCount,
  createdAt,
  id,
  setCurrentChat,
  status,
  chat
}) => {
  const [profilePic, setProfilePic] = useState("");

  const handleChatClick = () => {
    chat.imageUrl = profilePic;
    console.log(chat)
    setCurrentChat(chat);
  };

  useEffect(() => {
    const fetchImage = async () => {
      const imageUrl = getRandomImageUrl();
      setProfilePic(imageUrl);
    };

    fetchImage();
  }, []);

  const date = formatMessageDate(createdAt);

  return (
    <div
      className="flex items-center py-4 border-b border-gray-100  cursor-pointer hover:bg-gray-100 hover:rounded-10"
      onClick={handleChatClick}
    >
      <div className="w-12 h-12">
        <img src={profilePic} alt="profile" className="rounded-full" />
      </div>
      <div className="ml-4 flex-1">
        <div className="text-sm font-semibold">{name} </div>
      </div>
      <div className="ml-auto flex flex-col items-end">
        <div className="text-xs text-gray-500 mb-1">{date}</div>
        {status === "new" && (
          <div className="text-sm font-semibold bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
            {msgCount}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatItem;
