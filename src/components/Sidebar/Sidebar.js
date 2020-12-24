import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "./Contact";
import SearchContact from "./SearchContact";
import { loadContacts } from "../../redux/actions/contacts";
import Skeleton from "react-loading-skeleton";
import ContactSkeleton from "./ContactSkeleton";

function Sidebar() {
  const loading = useSelector((state) => state.contacts.loading);
  const contacts = useSelector((state) => {
    const searchContactValue = state.application.searchContactValue;

    return state.contacts.contacts.filter((contact) => {
      return (
        contact.fullname
          .toUpperCase()
          .indexOf(searchContactValue.toUpperCase()) !== -1
      );
    });
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);

  return (
    <div className="sidebar">
      <SearchContact />
      {loading ? (
        <ContactSkeleton />
      ) : (
        contacts.map((contact) => {
          return <Contact key={contact._id} contact={contact} />;
        })
      )}
    </div>
  );
}

export default Sidebar;
