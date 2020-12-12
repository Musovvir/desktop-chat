import React from "react";
import PropTypes from "prop-types";
import TextMessage from "./TextMessage/TextMessage";
import Infobox from "./Infobox";

function ItemChat({ chat }) {
  if (chat.type === "text") {
    return <TextMessage chat={chat} />;
  }
  return <Infobox content={chat.content} />;
}

ItemChat.propTypes = {
  chat: PropTypes.object,
};

export default ItemChat;
