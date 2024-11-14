import express from 'express'
import { connectDB } from './config/db.js'
import { user } from './models/users.model.js'


const myApp = express()

myApp.listen(5170, ()=>{
    connectDB()
    console.log("New server started at: http://localhost:5170")
})
myApp.use(express.json())


myApp.post('/api/userlist', async (req, resp) =>{

    const user1 = req.body;

    const newUser = new user(user1)

    try{
        (await newUser.save()),
        resp.status(200).json({success: true, data:newUser})}
    catch(error){
        console.log(`New user was not created`, error.message)
        resp.status(500).json({success: false, message:'Server error'})
    }


})

