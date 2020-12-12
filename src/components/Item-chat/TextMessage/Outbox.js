import React from "react";
import PropTypes from "prop-types";

function Outbox({chat}) {
  return <div className='outbox'>
    <div className='outbox-message'>
      {chat.content}
    </div>
  </div>;
}

Outbox.propTypes = {
  chat: PropTypes.object,
};

export default Outbox;
