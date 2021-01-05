import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

function ButtonMicrophoneSend({ message, sentMessage }) {
  return (
    <button className="send click">
      <SwitchTransition>
        <CSSTransition key={message} timeout={100} classNames="sendIcon">
          <i className="material-icons microphone" onClick={sentMessage}>
            {message ? "send" : "mic"}
          </i>
        </CSSTransition>
      </SwitchTransition>
    </button>
  );
}

export default ButtonMicrophoneSend;
