import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderChat from "./HeaderChat/HeaderChat";
import SendMessage from "./SendMessage/SendMessage";
import { loadChat } from "../../redux/actions/chat";
import { useParams } from "react-router-dom";
import Messages from "./Messages";

function Chat() {
  const loading = useSelector((state) => state.chat.loading);

  const dispatch = useDispatch();

  const opened = useParams().id;

  const myId = useSelector((state) => state.profile.myId);

  const chats = useSelector((state) => {
    const searchValue = state.application.searchValue;

    return state.chat.chats.filter((item) => {
      return (
        item.content.toUpperCase().indexOf(searchValue.toUpperCase()) !== -1
      );
    });
  });

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
      <Messages chats={chats} loading={loading} />
      <SendMessage />
    </div>
  );
}

export default Chat;
