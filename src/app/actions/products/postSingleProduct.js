"use server"

import dbConnect from "@/lib/dbConnect";

export async function postSingleProduct(postedData) {
    try {
        const result = await dbConnect('items').insertOne(postedData);
        revalidatePath('/products');
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}