/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { formatMessageDate, getRandomImageUrl } from "../../utils";

const ChatItem = ({
  name,
  msgCount,
  createdAt,
  id,
  setCurrentChat,
  status,
  chat,
  isActive
}) => {
  const [profilePic, setProfilePic] = useState("");
  // const [mostRecentMessage, setMostRecentMessage] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const imageUrl = getRandomImageUrl();
      setProfilePic(imageUrl);
    };

    fetchImage();
  }, []);

  // useEffect(() => {
  //   const fetchRecentMessage = async () => {
  //     try {
  //       const response = await axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${id}`);
  //       const recentMessage = findMostRecentEntry(response.data); // Assuming response.data is an array of messages
  //       setMostRecentMessage(recentMessage.message); // Update state with the most recent message content
  //     } catch (error) {
  //       console.error('Error fetching messages:', error);
  //     }
  //   };

  //   fetchRecentMessage();
  // }, [id]); // Fetch again when id changes

  const handleChatClick = () => {
    chat.imageUrl = profilePic;
    setCurrentChat(chat);
  };

  const date = formatMessageDate(createdAt);

  return (
    <div
      className={`flex items-center py-1 border-b border-gray-100 cursor-pointer hover:rounded-xl ${
        isActive ? "bg-Primary text-white rounded-xl" : ""
      }`}
      onClick={handleChatClick}
    >
      <div className="w-16 h-16 pl-2">
        <img src={profilePic} alt="profile" className="rounded-full" />
      </div>
      <div className="ml-4 flex-1">
        <div className="text-md font-semibold">{name}</div>
        <div className="text-sm font-semibold text-gray-400">{"mostRecentMessage"}</div>
      </div>
      <div className="ml-auto flex flex-col items-end">
        <div className={`text-xs pr-2 text-gray-500 mb-1 ${
          isActive ? "bg-Primary text-white rounded-xl" : ""
        }`}>{date}</div>
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
