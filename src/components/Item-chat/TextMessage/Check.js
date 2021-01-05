import React from "react";

function Check({ read }) {
  return (
    <div className="check-message">
      <i className="material-icons check">{read ? "done_all" : "done"}</i>
    </div>
  );
}

export default Check;
