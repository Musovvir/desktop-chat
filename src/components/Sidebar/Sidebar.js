import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Contact from "./Contact";
import {loadContacts} from "../../redux/actions/actions";

function Sidebar() {
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch])

  return (
    <div>
      {contacts.map((contact) => {
        return <Contact contact={contact} />;
      })}
    </div>
  );
}

export default Sidebar;
