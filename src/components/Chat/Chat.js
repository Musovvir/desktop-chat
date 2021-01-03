import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemChat from "../Item-chat/ItemChat";
import HeaderChat from "./HeaderChat/HeaderChat";
import SendMessage from "./SendMessage/SendMessage";
import { loadChat } from "../../redux/actions/chat";
import { useParams } from "react-router-dom";

function Chat() {
  const loading = useSelector((state) => state.chat.loading);
  const chats = useSelector((state) => state.chat.chats);
  const dispatch = useDispatch();
  const opened = useParams().id;
  const myId = useSelector((state) => state.profile.myId);

  useEffect(() => {
    if (opened) {
      dispatch(loadChat(myId, opened));
    }
  }, [dispatch, opened, myId]);

  if (!opened) {
    return (
      <div className="chat-please">
        <div className="please">Please, select a chat to start messaging</div>
      </div>
    );
  }
  return (
    <div className="chat">
      <HeaderChat />
      <div className="chat-please" id="chat-window">
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
