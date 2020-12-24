import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

function Social({ socials }) {
  return (
    <div className="profile-social">
      <div>Social</div>
      <div className="social-block">
        {socials &&
          Object.keys(socials).map((icon) => {
            return (
              <SwitchTransition>
                <CSSTransition timeout={100}>
                  <div className="social-icons click">
                    <i className={`fab fa-${icon}`} />
                    {socials[icon]}
                  </div>
                </CSSTransition>
              </SwitchTransition>
            );
          })}
      </div>
    </div>
  );
}

export default Social;
