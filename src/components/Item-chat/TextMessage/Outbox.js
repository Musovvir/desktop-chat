import React from "react";
import dayjs from "dayjs";
import CheckMessage from "../../Chat/HeaderChat/CheckMessage";

function Outbox({ chat }) {
  return (
    <div className="outbox">
      <div className="outbox-message">
        <div className="content">{chat.content}</div>
        <div className="date-check">
          <div className="date">{dayjs(chat.time).format("hh:mm")}</div>
          <CheckMessage read={chat.read} />
        </div>
      </div>
    </div>
  );
}

export default Outbox;
