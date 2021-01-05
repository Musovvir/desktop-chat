import React from "react";
import ItemChat from "../Item-chat/ItemChat";

function Messages({ loading, chats }) {
  return (
    <div className="chat-please" id="chat-window">
      {!loading &&
        chats.map((chat, index) => {
          return <ItemChat key={index} chat={chat} />;
        })}
    </div>
  );
}

export default Messages;
