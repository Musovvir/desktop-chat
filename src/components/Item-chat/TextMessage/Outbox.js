import React from "react";
import dayjs from "dayjs";

function Outbox({chat}) {
  return <div className='outbox'>
    <div className='outbox-message'>
      {chat.content}
      <div className="date">
        <div>{dayjs(chat.time).format("hh:mm")}</div>
      </div>
    </div>
  </div>;
}

export default Outbox;
