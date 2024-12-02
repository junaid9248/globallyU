import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    userName: { type: String, required: true, unique: true} ,
    password:{ type: String, required: true },
    firstName: {type:String},
    lastName: {type:String},
    dateOfBirth: {type:String},
    country: {type:String},
    uni:{type:String},
    year: {type:String},
    major: {type:String},
  }, {timestamps:true});


//Exporting the model to create an instance 
const User = mongoose.model('User', userSchema)

export default User;
