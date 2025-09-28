import { NextResponse } from "next/server";
import getDBconnectionn from "@/lib/mongodb";
import Todo from "@/models/Todo";

export async function GET(){
    await getDBconnectionn();
    const todos = await Todo.find().sort({createdAt: -1});
    return NextResponse.json(todos);
}

export async function POST(req : Request){
    await getDBconnectionn();
    const {name, description} = await req.json();

    if(!name) return NextResponse.json({error: "Name is reqired"}, {status: 400});

    const newTodo = await Todo.create({name,description});
    return NextResponse.json(newTodo,{status:201});
}

