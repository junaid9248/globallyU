import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

export const connectDB = async()=>{

    try{

        const connection = await mongoose.connect(process.env.mongo_uri);
        console.log(`MongoDB cluster connected:${connection.connection.host}`)
    } catch (error){

        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}