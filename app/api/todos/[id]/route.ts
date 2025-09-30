import { NextResponse } from "next/server";
import getDBconnection from "@/lib/mongodb";
import Todo from "@/models/Todo";

export async function PUT(req: Request,
    { params } : { params : {id: string }}
) {
    try{
        await getDBconnection();
        const { id } = await params;
        const body = await req.json();

        const updatedTodo = await Todo.findByIdAndUpdate(id, body, {new:true}).lean();
        if(!updatedTodo){
            return NextResponse.json({error: "Update Failed"},{ status:404});
        }
        return NextResponse.json(updatedTodo);
    }
    catch(Error){
        return NextResponse.json({error:"Failed to update - Error"},{status:500});
    }
}

export async function DELETE(
    req: Request,
    { params } : { params : {id : String}}
){
    try{
        await getDBconnection();
        const { id } = await params;
        const deletedTodo = await Todo.findByIdAndDelete(id);

        if(!deletedTodo){
            return NextResponse.json({error: "Failed to deleted - Todo not found"},{status:404});
        }
        return NextResponse.json(deletedTodo);
    }
    catch(Error){
        return NextResponse.json({error: Error},{status: 500});
    }
}




