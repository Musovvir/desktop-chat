import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSearchContact } from "../../redux/actions/application";

function SearchContact() {
  const dispatch = useDispatch();

  const searchContact = useSelector(
    (state) => state.application.searchContactValue
  );

  const handleChange = (e) => {
    dispatch(loadSearchContact(e.target.value));
  };

  const clearSearch = () => {
    dispatch(loadSearchContact(""));
  };

  return (
    <div className="input">
      <div className="inputBlock">
        <input
          className="inputSearch"
          type="text"
          placeholder="Search contact"
          value={searchContact}
          onChange={handleChange}
        />
        <i className="material-icons">search</i>
        {searchContact.length !== 0 && (
            <i onClick={clearSearch} className="material-icons clearIcon">
              clear
            </i>
        )}
      </div>
    </div>
  );
}

export default SearchContact;
