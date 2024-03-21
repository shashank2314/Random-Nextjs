import mongoose from "mongoose"

if (!process.env.MONGODB_URI) {
    throw new Error("Please add your Mongo URI to .env.local");
}

const uri: string = process.env.MONGODB_URI;
const dbconnect = (handler:any) =>  async(req:Request,res:Response) =>{
    if(mongoose.connections[0].readyState){
        return handler(req,res);
    }
    await mongoose.connect(uri)
    .then(()=>{
        console.log("db connection successfully");
    }
    )
    .catch((err:any)=>{
        console.log("db connection failed");
        console.log(err);
        process.exit(1);
    })
}

export default dbconnect;