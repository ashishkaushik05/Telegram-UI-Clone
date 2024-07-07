import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import BackgroundImage from "../public/images/BackGroundImage.png";
import UserInfo from "./components/ui/UserInfo";

function App() {
  const [currentChat, setCurrentChat] = useState(null);

  return (
    <div className="flex flex-row h-screen">
      <Sidebar setCurrentChat={setCurrentChat} currentChat={currentChat} />
      <div
        className="flex flex-col h-full w-full overflow-hidden"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {currentChat && (
          <>
            <ChatWindow className="flex-1" chat={currentChat} />
            {/* <UserInfo chat={currentChat} /> */}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
