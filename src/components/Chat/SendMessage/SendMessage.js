import React, { useState } from "react";
import ButtonScrip from "./ButtonScrip";
import ButtonMicrophoneSend from "./ButtonMicrophoneSend";
import { TextareaAutosize } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { sendMessage } from "../../../redux/actions/chat";
import { useHotkeys } from "react-hotkeys-hook";

function SendMessage() {
  const dispatch = useDispatch();

  const myId = useSelector((state) => state.profile.myId);

  const opened = useParams().id;

  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const sentMessage = () => {
    dispatch(sendMessage(opened, myId, content));
  };

  /**
   * Перенос строки при клике на shift+enter
   */
  useHotkeys(
    "shift+enter",
    (event) => {
      event.preventDefault();
      setContent((content) => content + "\n");
    });

  useHotkeys(
    "enter",
    (e) => {
      e.preventDefault();
      sentMessage();
    },
    [content]
  );
  return (
    <div className="form">
      <TextareaAutosize
        onChange={handleChange}
        value={content}
        className="send-form"
        placeholder="Write a message..."
        maxRows="5"
      />
      <ButtonScrip />
      <ButtonMicrophoneSend
        sentMessage={sentMessage}
        message={content?.length > 0}
      />
    </div>
  );
}

export default SendMessage;
