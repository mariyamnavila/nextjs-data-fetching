"use server"

import dbConnect from "@/lib/dbConnect";

export async function getProducts() {
    try {
        const data = await dbConnect('items').find({}).toArray();
        return data;
    }
    catch (err) {
        console.log(err);
    }
}