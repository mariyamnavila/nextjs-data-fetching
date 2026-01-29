import dbConnect, { collectionNames } from "./dbConnect";
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

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
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account) {
                try {
                    const { providerAccountId, provider } = account
                    const { email: user_email, image, name } = user
                    const payload = { role: 'user', providerAccountId, provider, user_email, image, name }

                    const userCollection = dbConnect(collectionNames.TEST_USERS)
                    const isUserExists = await userCollection.findOne({ providerAccountId: providerAccountId });
                    if (!isUserExists) {
                        await userCollection.insertOne(payload);
                    }
                } catch (error) {
                    console.log(error);
                    return false;
                }
            }
            return true;
        },
        async session({ session, token, user }) {
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