import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

function ButtonScrip() {
  return (
      <button className="send click">
          <SwitchTransition>
              <CSSTransition timeout={100}>
                  <div className="material-icons scrip">attach_file</div>
              </CSSTransition>
          </SwitchTransition>
      </button>
  );
}

export default ButtonScrip;
