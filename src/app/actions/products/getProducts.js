"use server"

import dbConnect, { collectionNames } from "@/lib/dbConnect";

export async function getProducts() {
    try {
        const data = await dbConnect(collectionNames.ITEMS).find({}).toArray();
        return data;
    }
    catch (err) {
        console.log(err);
    }
}