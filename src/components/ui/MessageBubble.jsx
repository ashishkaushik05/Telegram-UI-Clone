import React from 'react';

const MessageBubble = ({ message, sender, isOwnMessage }) => {
  return (
    <div className={` max-w-[60%] ${isOwnMessage ? 'ml-auto' : ''} flex ${isOwnMessage ? 'justify-end' : 'justify-start'} mb-2  `}>
      <div className={`p-2 rounded-lg ${isOwnMessage ? "bg-violet-700" : "bg-white"} `}>
        <div className={`text-sm  ${isOwnMessage ? 'text-white' : 'text-gray-950'} font-bold`}>{message}</div>
        <div className="text-xs{`text-sm  ${isOwnMessage ? 'text-white' : 'text-gray-950'}">{sender}</div>
      </div>
    </div>
  );
};

export default MessageBubble;
