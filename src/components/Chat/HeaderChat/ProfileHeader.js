import React from 'react';
import {useSelector} from "react-redux";

function ProfileHeader(props) {
    const fullname = useSelector(state => state.contacts.contacts.fullname);
    return (
        <div className='fullname-contact'>
            {fullname}
        </div>
    );
}

export default ProfileHeader;
