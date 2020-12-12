import React from "react";
import ButtonScrip from "./ButtonScrip";
import ButtonMicrophone from "./ButtonMicrophone";

function SendMessage(props) {
  return (
    <div className="send-form">
      <input type="text" placeholder="Write a message" />
      <ButtonScrip />
      <ButtonMicrophone />
    </div>
  );
}

export default SendMessage;
