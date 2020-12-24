import React from "react";

function CheckMessage({ read }) {
  return (
    <div className='check-message'>
      {read ? (
        <div className="material-icons check">done_all</div>
      ) : (
        <div className="material-icons check">done</div>
      )}
    </div>
  );
}

export default CheckMessage;
