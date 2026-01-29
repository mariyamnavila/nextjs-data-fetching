import { signOut } from 'next-auth/react';
import React from 'react';

const LogOutButton = () => {
    return (
        <div>
            <button className='ml-5' onClick={() => signOut()}>Log Out</button>
        </div>
    );
};

export default LogOutButton;