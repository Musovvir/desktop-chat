import React from "react";
import classNames from "classnames";

function Avatar({ fullname, size }) {
  const switchClass = classNames(
    "avatar",
    { small: size === "small" },
    { medium: size === "medium" },
    { large: size === "large" }
  );
  return (
    <div className={switchClass}>
      <div className="avatar-profile">{fullname}</div>
    </div>
  );
}

export default Avatar;
