import User from "../models/users.model.js";

//Method to create a new user 
export const createNewUser = async (req, resp) =>{
 
    const user = req.body; //This is what user will pass to db

    if(!user.username || !user.password){
        return resp.status(400).json({
            success:false,
            message:"Please provide username AND password to create your account"}) }//Error message 

    const newUser = new User(user)

    try{
        await newUser.save(),
        resp.status(200).json({success: true, data: newUser})} //Note that userdata is what we are going to be posting to the cluster
    catch(error){
        console.log(`New user was not created`, error.message)
        resp.status(500).json({success: false, message:'Server error'})
    }
}

//Method to get the userlist
export const getAllUsers = async(req, resp)=>{

    try{
        const users = await User.find({})
        resp.status(200).json({success:true, data: users})
    }catch (error){
        console.log("Error getting userlist", error.message)
        resp.status(500).json({success: false, message:"Error"})
    }
}