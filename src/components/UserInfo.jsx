"use client";
import { useSession } from 'next-auth/react';
import React from 'react';

const UserInfo = () => {
    const session = useSession()
    return (
        <div>
            {session.data && (
                <div>
                    <p>Name: {session.data.user.name}</p>
                    <p>Email: {session.data.user.email}</p>
                </div>
            )}
        </div>
    );
};

export default UserInfo;