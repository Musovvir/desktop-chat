import React from "react";
import { useSelector } from "react-redux";
import Outbox from "./Outbox";
import Inbox from "./Inbox";
import PropTypes from "prop-types";

function TextMessage({ chat }) {
  const myId = useSelector((state) => state.profile.myId);

  const isOutgoing = myId === chat.toUserId;
  if (!isOutgoing) {
    return <Outbox chat={chat} />;
  }
  return <Inbox chat={chat} />;
}

TextMessage.propTypes = {
  chat: PropTypes.object,
};

export default TextMessage;
