import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "./Avatar";
import Communication from "./Communication";
import Social from "./Social";
import Media from "./Media";
import { useParams } from "react-router-dom";

function ProfileContact() {
  const loading = useSelector(state => state.contacts.loading)
  const openProfile = useSelector((state) => state.application.openProfile);

  const opened = useParams().id;

  const profile = useSelector((state) =>
      state.contacts.contacts.find((contact) => {
        return opened === contact._id;
      })
  );

  if (loading || !opened) {
    return null;
  }

  return (
    <div className={openProfile ? "open-profile" : "closed-profile"}>
      <Avatar fullname={profile?.fullname[0]} />
      <div className="name-profile">{profile?.fullname}</div>
      <div className="username">@{profile?.username}</div>
      <Communication />
      <Social socials={profile?.socials}/>
      <Media />
    </div>
  );
}

export default ProfileContact;
