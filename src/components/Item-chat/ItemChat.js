import React from "react";
import TextMessage from "./TextMessage/TextMessage";
import Infobox from "./Infobox";

function ItemChat({ chat }) {
  if (chat.type === "text") {
    return <TextMessage chat={chat} />;
  }

  return <Infobox content={chat.content} />;
}

export default ItemChat;
