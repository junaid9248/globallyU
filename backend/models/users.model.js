import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    username: { type: String, required: true} ,
    password:{ type: String, required: true},

    fname: {type:String},
    lname: {type:String},
    dob: {type:String},
    country: {type:String},
    uni:{type:String},
    yr: {type:String},
    major: {type:String},
  }, {timestamps:true});


//Exporting the model to create an instance 
const User = mongoose.model('User', userSchema)

export default User;
