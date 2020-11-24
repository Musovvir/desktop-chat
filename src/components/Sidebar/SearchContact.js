import React from 'react';

function SearchContact(props) {
    return (
        <div className="inputBlock">
            <input className="inputSearch" placeholder="Search contact"/>
            <i className="material-icons">search</i>
        </div>
    );
}

export default SearchContact;
