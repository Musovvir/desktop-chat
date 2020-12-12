import React from "react";
import {useDispatch} from "react-redux";
import {profileToggle} from "../../../redux/actions/application";

function SettingsProfile(props) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(profileToggle());
    }

  return (
    <div className='settings-profile'>
      <div className="material-icons"
      onClick={handleClick}
      >settings</div>
    </div>
  );
}

export default SettingsProfile;
