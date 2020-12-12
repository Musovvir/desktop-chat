import React from "react";
import SearchMessage from "./SearchMessage";
import SettingsProfile from "./SettingsProfile";
import ProfileHeader from "./ProfileHeader";

function HeaderChat(props) {
  return (
    <div className="header-chat">
      <SearchMessage />
      <ProfileHeader />
      <SettingsProfile />
    </div>
  );
}

export default HeaderChat;
