"use client";

import React from "react";
import { registerUser } from "../actions/auth/registerUser";

const RegisterPage = () => {
    const handleRegister = async (e) => {
        e.preventDefault();

        const form = e.target;
        const userInfo = {
            username: form.name.value,
            email: form.email.value,
            password: form.password.value,
        };

        console.log("Register data:", userInfo);

        const result = await registerUser(userInfo);
        console.log("Registration result:", result);
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow">
                <h1 className="text-2xl font-semibold text-slate-800 text-center">
                    Register
                </h1>
                <p className="mt-1 text-sm text-slate-500 text-center">
                    Create your account
                </p>

                <form onSubmit={handleRegister} className="mt-6 space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full name"
                        className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 py-2 text-white font-medium hover:bg-blue-700 transition"
                    >
                        Create account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;