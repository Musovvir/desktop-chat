import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadChat } from "../../redux/actions/chat";

function Contact({ contact: { _id, fullname } }) {
  const opened = useSelector((state) => state.chat.opened);
  const myId = useSelector((state) => state.profile.myId);
  const dispatch = useDispatch();

  const isAlreadyOpenedContact = () => {
    return _id === opened;
  };

  const handleClick = () => {
    if (!isAlreadyOpenedContact()) {
      dispatch(loadChat(myId, _id));
    }
  };
  return (
    <div>
      <div
        className={`contact ${opened === _id ? "active" : ""}`}
        onClick={() => handleClick(myId, _id)}
      >
        {fullname}
      </div>
    </div>
  );
}

export default Contact;
