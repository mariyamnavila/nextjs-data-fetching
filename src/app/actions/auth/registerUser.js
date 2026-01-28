'use server'

import dbConnect, { collectionNames } from "@/lib/dbConnect"

export async function registerUser(userInfo) {
    try {
        const result = await dbConnect(collectionNames.TEST_USERS).insertOne(userInfo)
        return result
    } catch (error) {
        console.log(error);
        return null
    }
}