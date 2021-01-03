import React from "react";
import dayjs from "dayjs";
import Avatar from "../../Profile/Avatar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Inbox({ chat }) {
  const opened = useParams().id;

  const {fullname}  = useSelector((state) =>
    state.contacts.contacts.find((contact) => {
      return opened === contact._id;
    })
  );
  return (
    <div className="inbox">
      <Avatar size={"small"} fullname={fullname[0]} />
      <div className="inbox-message">
        <div className="content">{chat.content}</div>
        <div className="date">
          <div>{dayjs(chat.time).format("hh:mm")}</div>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
