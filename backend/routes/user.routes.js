import express from 'express'
import mongoose from 'mongoose';
import { createNewUser, getAllUsers} from '../controllers/user.controller.js';


const userRouter = express.Router(); //Creating the express router to be used

//Post method to create a new user
userRouter.post('/api/userlist', createNewUser)

//Method to get all users 
userRouter.get('/api/userlist', getAllUsers)

export default userRouter