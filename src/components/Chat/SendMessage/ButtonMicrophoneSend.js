import React from "react";

function ButtonMicrophoneSend({ message, sentMessage }) {
  return (
    <button className="send click">
        <div classNames="sendIcon">
          <i className="material-icons microphone" onClick={sentMessage}>
            {message ? "send" : "mic"}
          </i>
        </div>
    </button>
  );
}

export default ButtonMicrophoneSend;
