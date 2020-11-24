import React from 'react';
import {useSelector} from "react-redux";

function Profile() {
    const profile = useSelector(state => state.profile.profiles);

    return (
        <div></div>
    );
}

export default Profile;
