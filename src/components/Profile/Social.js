import React from "react";

function Social({ socials }) {
  return (
    <div className="profile-social">
      <div>Social</div>
      <div className="social-block">
        {socials &&
          Object.keys(socials).map((icon) => {
            return (
              <div className="social-icons click">
                <i className={`fab fa-${icon}`} />
                {socials[icon]}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Social;
