import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";
import SearchContact from "./SearchContact";

function Sidebar() {
  const contacts = useSelector((state) => state.contacts.items);

  return (
    <div className="sidebar">
      <SearchContact />
      {contacts.map((contact) => {
        return <Contact key={contact._id} contact={contact} />;
      })}
    </div>
  );
}

export default Sidebar;
