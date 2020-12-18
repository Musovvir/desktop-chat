import React, { useState } from "react";

function SearchMessage() {
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div className="search-message">
      <input onChange={handleChange} value={message} />
      <div className="material-icons">search</div>
    </div>
  );
}

export default SearchMessage;
