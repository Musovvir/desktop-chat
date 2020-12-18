import React from 'react';

function ProfileHeader({name, online}) {
    return (
        <div className="block-name">
            <div className='fullname-contact'>
                {name}
            </div>
            {online && <div className="online" />}
        </div>
    );
}

export default ProfileHeader;
