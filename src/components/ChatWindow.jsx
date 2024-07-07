import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import MessageBubble from './ui/MessageBubble';
import MicrophoneSvg from '../../public/images/microphone.svg'; 
import TitleBar from './ui/TitleBar';

const ChatWindow = ({ chat }) => {
  const currentChat = chat.id
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [inputMessage, setInputMessage] = useState(''); 
  const chatContainerRef = useRef(null);
  const bottomRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    setMessages([]);
    setPage(1);
  }, [currentChat]);

  useEffect(() => {
    if (!currentChat) {
      setMessages([]);
      return;
    }

    const fetchMessages = async (chatId, pageNum) => {
      setLoading(true);
      try {
        const response = await axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}&page=${pageNum}`);
        const newMessages = response.data.data.reverse(); // Reverse the order of new messages
        setMessages(prevMessages => [...prevMessages, ...newMessages]); // Prepend new messages to the existing ones
        setLoading(false);
      } catch (error) {
        console.error('Error fetching messages:', error);
        setLoading(false);
      }
    };

    fetchMessages(currentChat, page);
  }, [currentChat, page]);

  const getSenderName = () => {
    if (messages.length > 0) {
      const otherSender = messages.find(message => message.sender_id !== 1);
      if (otherSender) {
        return otherSender.sender.name || 'Deleted User';
      }
    }
    return 'Deleted User';
  };

  const handleScroll = () => {
    if (chatContainerRef.current) {
      const { scrollTop, clientHeight, scrollHeight } = chatContainerRef.current;
      // Check if the user is near the top (e.g., within 100px)
      if (scrollTop < 100 && !loading && page < 10) {
        const previousScrollHeight = scrollHeight;
        setPage(prevPage => prevPage + 1);
        // Restore the scroll position after loading messages
        setTimeout(() => {
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight - previousScrollHeight;
        }, 100);
      }
      setShowScrollButton(scrollHeight - scrollTop > clientHeight + 100); // Show button if not at the bottom
    }
  };

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.addEventListener('scroll', handleScroll);
      return () => {
        chatContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, [loading, page]);

  const scrollToBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return; // Prevent sending empty messages

    // Simulate sending message to server (you can replace this with actual server code)
    const newMessage = {
      id: messages.length + 1, // Generate a unique ID (replace with actual ID logic)
      message: inputMessage,
      sender: { name: 'BeyondChat' }, // Assuming sender is the current user
      sender_id: 1, // Assuming sender ID for current user
    };

    setMessages(prevMessages => [...prevMessages, newMessage]);
    setInputMessage(''); // Clear input after sending

    // Scroll to bottom after sending message
    scrollToBottom();
  };

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  if (!currentChat) {
    return null;
  }

  return (
    <div className="flex flex-col h-full w-full overflow-hidden
    style={{ backgroundImage: `url(${BackgroundImage})` }}
    ">
      <TitleBar chat={chat} />
      <div
        ref={chatContainerRef}
        className="flex-1 p-4 overflow-y-auto bg-cover bg-center relative"
        style={{background: "none" }}
      >
        <div className='lg:max-w-[60%] md:max-w-[90%] mx-auto'>
          {messages.map(message => (
            <MessageBubble
              key={message.id}
              date = {new Date(message.created_at)}
              message={message.message}
              sender={message.sender.name || 'Deleted User'}
              isOwnMessage={message.sender_id === 1}
            />
          ))}
          {loading && <div className="text-center">Loading...</div>}
          <div ref={bottomRef} /> {/* Ensure bottomRef is correctly positioned */}
        </div>
        {showScrollButton && (
          <button
            onClick={scrollToBottom}
            className="fixed bottom-16 right-4 bg-blue-500 text-white rounded-full p-2 shadow-lg"
          >
            ⬇ Scroll to Bottom
          </button>
        )}
      </div>
      <div className="flex justify-center px-[8px] py-[5px] min-h-[44px] mb-5   border-gray-800">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full focus:outline-none lg:max-w-[60%] md:max-w-[90%]  p-4 border rounded-xl"
          value={inputMessage}
          onChange={handleInputChange}
          onKeyPress={handleInputKeyPress}
        />
        <div className="text-sm font-semibold bg-blue-500 text-white rounded-full w-[54px] h-[54px] p-4 ml-3 flex items-center justify-center">
          <img src={MicrophoneSvg} color='white'  alt="" />
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
