import React from "react";
import classNames from "classnames";

function Avatar({ fullname, size, online }) {
  const cx = classNames(
    "avatar",
    { small: size === "small" },
    { medium: size === "medium" },
    { large: size === "large" }
  );
  return (
    <div className={cx}>
      {online && <div className="online" />}
      <div className="avatar-profile">{fullname}</div>
    </div>
  );
}

export default Avatar;
