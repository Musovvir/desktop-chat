import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {loadChat} from "../../redux/actions/chat";


function Contact(props) {
  const opened = useSelector((state) => state.chat.opened);
  const myId = useSelector((state) => state.chat.myId);
  const dispatch = useDispatch();

  const handleClick = (contactId) => {
    dispatch(loadChat(myId, contactId));
  };
  return (
    <div>
      <div
        className={`contact ${opened === props.contact._id ? "active" : ""}`}
        onClick={() => handleClick(myId, props.contact._id)}
      >
        {props.contact.fullname}
      </div>
    </div>
  );
}

export default Contact;
