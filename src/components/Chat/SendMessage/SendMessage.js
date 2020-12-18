import React, {useState} from "react";
import ButtonScrip from "./ButtonScrip";
import ButtonMicrophone from "./ButtonMicrophone";
import {TextareaAutosize} from "@material-ui/core";

function SendMessage() {
    const [content, setContent] = useState("");

    const handleChange = (e) => {
        setContent(e.target.value)
    };
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
      <ButtonMicrophone />
    </div>
  );
}

export default SendMessage;
