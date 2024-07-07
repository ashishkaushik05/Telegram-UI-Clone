import React from 'react';

const ChatBar = ({ inputMessage, handleInputChange, handleInputKeyPress }) => {
  return (
    <input
      type="text"
      placeholder="Type a message..."
      className="w-full lg:max-w-[60%] md:max-w-[90%] p-4 border rounded-xl bg-transparent"
      value={inputMessage}
      onChange={handleInputChange}
      onKeyPress={handleInputKeyPress}
    />
  );
};

export default ChatBar;
