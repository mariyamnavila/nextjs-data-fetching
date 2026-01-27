import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
    const p = await params;
    const singleData = await dbConnect('items')
        .findOne({ _id: new ObjectId(p.id) });
    return Response.json(singleData);
}

export async function PATCH(req, { params }) {
    const p = await params;
    const updatedData = await req.json();
    const filter = { _id: new ObjectId(p.id) }; 
    const updatedResponse = await dbConnect('items')
        .updateOne(filter, { $set: updatedData });
    return Response.json(updatedResponse);
}

export async function DELETE(req, { params }) {
    const p = await params;
    const response = await dbConnect('items')
        .deleteOne({ _id: new ObjectId(p.id) });
    return Response.json(response);
}
