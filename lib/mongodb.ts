import { error } from "console";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if(!MONGODB_URI){
    throw new Error("Mongo DB for Env var is not defined");
}

type MongooseCache = {
    conn: typeof mongoose | null;
    promise : Promise<typeof mongoose> | null;
};

declare global{
    var _mongooseCache : MongooseCache | undefined;
}

const cache : MongooseCache = global._mongooseCache ?? {conn:null, promise: null};
if(!global._mongooseCache){
    global._mongooseCache = cache;
}

export default async function getDBconnection(){
    if(cache.conn) return cache.conn;

    // const opts = {
    //     bufferCommands: false,
    //     serverSelectionTimeoutMS: 1000,
    //     socketTimeoutMS: 30000,
    // };

    if(!cache.promise){
        cache.promise = mongoose.connect(MONGODB_URI!);
    }

    cache.conn = await cache.promise;
    console.log("MongoDB connection: ",cache.conn.connection.host);

    return cache.conn;
}