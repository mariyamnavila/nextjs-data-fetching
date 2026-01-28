"use client";
import React from 'react';
import { signIn, signOut } from "next-auth/react"

const LoginButton = () => {
    return (
        <div >
            <button onClick={() => signIn('credentials')}>Login</button>
            <button onClick={() => signOut()}>Log Out</button>
        </div>
    );
};

export default LoginButton;