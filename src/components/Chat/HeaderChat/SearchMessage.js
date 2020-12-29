import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

function SearchMessage() {
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div className="search-message">
      <input onChange={handleChange} value={message} />
      <SwitchTransition>
        <CSSTransition timeout={100}>
          <div className="material-icons click">search</div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default SearchMessage;
