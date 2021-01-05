import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Avatar from "./Avatar";
import Communication from "./Communication";
import Social from "./Social";
import Media from "./Media";
import { useParams } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./ProfileContact.css";
import {useHotkeys} from "react-hotkeys-hook";
import {profileToggle} from "../../redux/actions/application";

function ProfileContact() {

  const dispatch = useDispatch();

  const opened = useParams().id;

  const loading = useSelector((state) => state.contacts.loading);

  const openProfile = useSelector((state) => state.application.openProfile);

  const profile = useSelector((state) =>
    state.contacts.contacts.find((contact) => {
      return opened === contact._id;
    })
  );

  useHotkeys(
      "shift+p",
      () => {
        dispatch(profileToggle());
      },
      {
        filter: () => true,
      }
  );

  if (loading || !opened) {
    return null;
  }

  return (
    <CSSTransition in={openProfile} timeout={1000} unmountOnExit>
      <div className="profile-contact">
        <div className="profile-block">
          <Avatar size={"large"} fullname={profile?.fullname[0]} />
          <div className="name-profile">{profile?.fullname}</div>
          <div className="username">@{profile?.username}</div>
          <Communication />
          <Social socials={profile?.socials} />
          <Media fileName="Desktop-chat.pdf" />
        </div>
      </div>
    </CSSTransition>
  );
}

export default ProfileContact;
