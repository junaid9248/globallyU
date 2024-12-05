import express from 'express'
import mongoose from 'mongoose';
import { createNewUser, getAllUsers} from '../controllers/user.controller.js';


const router = express.Router(); //Creating the express router to be used

//Post method to create a new user
router.post('/', createNewUser)

//Method to get all users 
router.get('/', getAllUsers)

export default router;