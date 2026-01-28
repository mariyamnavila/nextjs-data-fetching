'use server'

import dbConnect from "@/lib/dbConnect"

export async function registerUser(userInfo) {
    try {
        const result = await dbConnect('test-users').insertOne(userInfo)
        return result
    } catch (error) {
        console.log(error);
        return null
    }
}