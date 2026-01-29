import dbConnect, { collectionNames } from "./dbConnect";
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Your username" },
                password: { label: "Password", type: "password" },
                email: { label: "Email", type: "email", placeholder: "Your email" }
            },

            async authorize(credentials, req) {

                const { username, password, email } = credentials;
                const user = await dbConnect(collectionNames.USERS).findOne({ username: username, email: email });
                const isPasswordValid = user && user.password === password;

                if (user && isPasswordValid) {
                    return {
                        id: user._id.toString(),
                        username: user.username,
                        email: user.email,
                        role: user.role || "user",
                    };
                } else {
                    return null
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ],
    callbacks: {
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.
            // session.user.id = token.id;
            if (token) {
                session.user.username = token.username;
                session.user.role = token.role;
            }
            return session;
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            // Add access_token to the token right after signin
            if (user) {
                token.username = user.username;
                token.role = user.role;
            }
            return token;
        }
    }
};