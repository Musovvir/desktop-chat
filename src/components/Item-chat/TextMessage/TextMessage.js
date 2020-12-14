import React from "react";
import { useSelector } from "react-redux";
import Outbox from "./Outbox";
import Inbox from "./Inbox";

function TextMessage({ chat }) {
  const myId = useSelector((state) => state.profile.myId);

  const isOutgoing = myId === chat.toUserId;
  if (!isOutgoing) {
    return <Outbox chat={chat} />;
  }
  return <Inbox chat={chat} />;
}

export default TextMessage;
