import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const middleware = async (req) => {

    const token  = await getToken({req, secret: process.env.NEXTAUTH_SECRET});
    const isToken = Boolean(token);
    const isAdminUser = token?.role === 'admin';
    const isAdminSpecificRoute = req.nextUrl.pathname.startsWith('/dashboard');

    if (isAdminSpecificRoute && !isAdminUser) {
        return NextResponse.redirect(new URL('/api/auth/signin', req.url));
    }

    return NextResponse.next();
}