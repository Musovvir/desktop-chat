import React from "react";
import SearchMessage from "./SearchMessage";
import SettingsProfile from "./SettingsProfile";
import ProfileHeader from "./ProfileHeader";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Updating from "./Updating";

function HeaderChat() {
  const opened = useParams().id;

  const loading = useSelector((state) => state.chat.loading);

  const profile = useSelector((state) =>
    state.contacts.contacts.find((contact) => {
      return opened === contact._id;
    })
  );

  return (
    <div className="header-chat">
      <div className="search-message">
        <SearchMessage />
      </div>
      {loading ? (
        <Updating />
      ) : (
        <div className="header-name">
          <ProfileHeader online={profile?.online} name={profile?.fullname} />
        </div>
      )}
      <SettingsProfile />
    </div>
  );
}

export default HeaderChat;
