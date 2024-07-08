import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import BackgroundImage from "../public/images/BackGroundImage.png";

function App() {
  const [currentChat, setCurrentChat] = useState(null);
  const [showSideBar, setShowSideBar] = useState(true);

  const handleChatItemClick = (chat) => {
    setCurrentChat(chat);
    setShowSideBar(false);
  };

  return (
    <div className="flex flex-row h-screen">
 (
        <div className={`sideBar flex flex-col md:max-w-[600px] h-full md:w-full md:${showSideBar ? "hidden" : ""}` }>
        <Sidebar
          setCurrentChat={handleChatItemClick}
          currentChat={currentChat}
          showSideBar={showSideBar}
        />
        </div>  
      )
      <div
        className={`flex flex-col h-full w-full overflow-hidden`}
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {currentChat && (
          <>
            <ChatWindow
              className="flex-1"
              chat={currentChat}
              setShowSideBar={setShowSideBar}
            />
            {/* <UserInfo chat={currentChat} /> */}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
