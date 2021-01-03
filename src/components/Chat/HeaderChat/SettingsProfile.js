import React from "react";
import { useDispatch } from "react-redux";
import { profileToggle } from "../../../redux/actions/application";
import { CSSTransition } from "react-transition-group";

function SettingsProfile() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(profileToggle());
  };

  return (
      <CSSTransition timeout={100}>
        <div className="settings-profile">
          <div className="material-icons click" onClick={handleClick}>
            settings
          </div>
        </div>
      </CSSTransition>
  );
}

export default SettingsProfile;
