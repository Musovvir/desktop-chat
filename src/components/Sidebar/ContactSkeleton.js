import React from 'react';
import Skeleton from 'react-loading-skeleton';

function ContactSkeleton() {
    return (
        <div className='skeleton-contact'>
            <div className="skeleton-avatar">
                <Skeleton circle={true} width={50} height={50} />
            </div>
            <div className="skeleton">
                <Skeleton count={2} />
            </div>
        </div>
    );
}

export default ContactSkeleton;
