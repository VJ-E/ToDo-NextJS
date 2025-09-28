import getDBconnection from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const conn = await getDBconnection();

        if(!conn){
            throw new Error("Connection Failed 1");
        }

        return NextResponse.json({
            status: 'Success',
            message: 'Successfully connected to Mongo Db'
        });
    }
    catch(err){
        console.error("DB Connection Failed : ",err);
        return NextResponse.json({
            status: 'Error',
            message: 'Failed to Connect to MongoDB',
            error: err instanceof Error ? err.message : 'Unknown error'
        },
        {
            status : 500
        });
    }
}