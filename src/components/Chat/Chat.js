import React from "react";
import { useSelector } from "react-redux";
import ItemChat from "../Item-chat/ItemChat";
import HeaderChat from "./HeaderChat/HeaderChat";
import SendMessage from "./SendMessage/SendMessage";

function Chat() {
  const loading = useSelector((state) => state.chat.loading);
  const opened = useSelector((state) => state.chat.opened);
  const chats = useSelector((state) => state.chat.chats);
  const contacts = useSelector(state => state.contacts.contacts);

  if (opened === null) {
    return (
      <div className="chat-please">
        <div className="please">Please, select a chat to start messaging</div>
      </div>
    );
  }
  return (
    <div className="chat">
      <HeaderChat />
      <div className="chat-please">
        {!loading &&
           chats.map((chat, index) => {
              return <ItemChat key={index} chat={chat} />;
            })}
      </div>
      <SendMessage />
    </div>
  );
}

export default Chat;
