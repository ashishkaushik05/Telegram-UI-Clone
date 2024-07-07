import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ChatItem from './ChatItem';
import SidebarHeader from './SidebarHeader';

const Sidebar = ({ setCurrentChat, currentChat }) => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://devapi.beyondchats.com/api/get_all_chats?page=${page}`);
        setChats(prevChats => [...prevChats, ...response.data.data.data]);
        setLoading(false);
        setHasMore(response.data.data.data.length > 0);
      } catch (error) {
        console.error('Error fetching chats:', error);
        setLoading(false);
      }
    };

    fetchChats();
  }, [page]);

  const handleScroll = () => {
    if (
      sidebarRef.current.scrollHeight - sidebarRef.current.scrollTop <=
        sidebarRef.current.clientHeight + 50 && // add a small buffer for scroll precision
      !isFetching &&
      hasMore
    ) {
      setIsFetching(true);
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    const sidebarElement = sidebarRef.current;
    if (sidebarElement) {
      sidebarElement.addEventListener('scroll', handleScroll);
      return () => {
        sidebarElement.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isFetching, hasMore]);

  useEffect(() => {
    if (isFetching) {
      setIsFetching(false);
    }
  }, [chats]);

  return (
    <div className='flex flex-col h-full'>
      {/* Sidebar Header */}
      <div className="bg-white border-r h-[60px] border-gray-200 sidebar-hidden sidebar-min-width ">
        <SidebarHeader />
      </div>

      {/* Sidebar Chats */}
      <div
        className="bg-white border-r border-gray-200 sidebar-hidden sidebar-min-width px-2 overflow-y-auto flex-grow"
        ref={sidebarRef}
        style={{ height: 'calc(100vh - 100px)' }} // Ensure height is set for scrolling
      >
        {chats.length === 0 && !loading ? (
          <div>No chats available</div>
        ) : (
          chats.map(chat => (
            <ChatItem
              key={chat.id}
              className="p-2 border-b border-gray-200 hover:bg-Primary"
              name={chat.creator.name ? chat.creator.name : 'Deleted User'}
              msgCount={chat.msg_count}
              createdAt={chat.updated_at}
              id={chat.id}
              status={chat.status}
              chat={chat}
              setCurrentChat={setCurrentChat}
              isActive={currentChat && currentChat.id === chat.id}
            />
          ))
        )}
        {loading && <div className="text-center py-4">Loading...</div>}
        {isFetching && <div className="text-center py-4">Loading more chats...</div>}
      </div>
    </div>
  );
};

export default Sidebar;
