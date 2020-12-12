import React from "react";
import PropTypes from "prop-types";

function Inbox({chat}) {
  return <div className='inbox'>
    <div className='inbox-message'>
      {chat.content}
    </div>
  </div>;
}
Inbox.propTypes = {
  chat: PropTypes.object,
};
export default Inbox;
