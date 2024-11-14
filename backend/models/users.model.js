import mongoose from "mongoose";

//Schema for creating a user profile
const userSchema = new mongoose.Schema({

    userName: String,
    password: String
    
})

//Exporting the model to create an instance 
export const user = mongoose.model('user', userSchema)

