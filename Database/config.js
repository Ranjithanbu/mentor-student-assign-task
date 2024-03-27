import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()
const Mconnection=process.env.MONGOCONNECTION
const connectDB=async()=>{

try {
    console.log("connection string",Mconnection)

    const connection=await mongoose.connect(Mconnection)
console.log('connected success to db')
return connection
} catch (error) {
    
console.log("Error",error);

}


}

export default connectDB;