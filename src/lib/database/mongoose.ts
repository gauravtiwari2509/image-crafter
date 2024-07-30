import mongoose from 'mongoose'
type ConnectionObject={
    isConnected?:number
}
const connection:ConnectionObject={}
async function ConnectToDatabase():Promise<void>{
    if(connection.isConnected){ 
        return
    }
    try{
       const db= await mongoose.connect(process.env.MONGODB_URI || "",{})
       connection.isConnected=db.connections[0].readyState
       console.log("connected to database")
    }catch(error){
        console.log("database connection failed: ",error);
        process.exit(1)
    }
}
export default ConnectToDatabase;
/*
import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose

if(!cached) {
  cached = (global as any).mongoose = { 
    conn: null, promise: null 
  }
}

export const connectToDatabase = async () => {
  if(cached.conn) return cached.conn;

  if(!MONGODB_URL) throw new Error('Missing MONGODB_URL');

  cached.promise = 
    cached.promise || 
    mongoose.connect(MONGODB_URL, { 
      dbName: 'imaginify', bufferCommands: false 
    })

  cached.conn = await cached.promise;

  return cached.conn;
}
*/ 