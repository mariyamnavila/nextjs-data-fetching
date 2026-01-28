"use server"

import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function postSingleProduct(postedData) {
    try {
        const result = await dbConnect(collectionNames.ITEMS).insertOne(postedData);
        revalidatePath('/products');
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}