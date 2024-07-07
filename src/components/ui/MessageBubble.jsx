import React from 'react';
import { formatMessageDate } from '../../../utils';

const MessageBubble = ({ message, sender, isOwnMessage , date }) => {
  date = formatMessageDate(date)
  return (
    <div className={` max-w-[60%] ${isOwnMessage ? 'ml-auto' : ''} flex ${isOwnMessage ? 'justify-end' : 'justify-start'} mb-2  `}>
      <div className={`p-2 rounded-lg ${isOwnMessage ? "bg-Primary" : "bg-white"} `}>
        <div className={`text-sm  ${isOwnMessage ? 'text-white' : 'text-gray-950'} font-bold`}>{message}</div>
        <div className='flex justify-between mt-1'>
        {/* <div className="text-xs{`text-sm  ${isOwnMessage ? 'text-white' : 'text-gray-950'}">{sender}</div> */}
        <div className=" ml-5 text-xs{`text-xs  ${isOwnMessage ? 'text-gray-500' : 'text-gray-100'}">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
