import React from "react";
import { useSelector } from "react-redux";
import ItemChat from "../Item-chat";

function Chat() {
  const loading = useSelector((state) => state.chat.loading);
  const opened = useSelector((state) => state.chat.opened);
  const chats = useSelector((state) => state.chat.chats);

  if (opened === null) {
    return (
      <div className="chat-please">
        <div className="please">Please, select a chat to start messaging</div>
      </div>
    );
  }
  return (
    <div className="chat-please">
      {loading
        ? "Идёт загрузка"
        : chats.map((chat) => {
            return <ItemChat key={chat._id} chat={chat} />;
          })}
    </div>
  );
}

export default Chat;
