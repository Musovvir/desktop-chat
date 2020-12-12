import React from "react";

function Social({socials}) {
  return (
    <div className="profile-social">
      <div>Social</div>
      <div className="profile-icons">
        <div className='social-icons'>
          <i className="fab fa-instagram" />
        </div>
        <div className='social-icons'>
          <i className="fab fa-twitter" />
        </div>
        <div className='social-icons'>
          <i className="fab fa-facebook-f" />
        </div>
      </div>
    </div>
  );
}

export default Social;
