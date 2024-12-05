import express from 'express'
import dotenv from "dotenv"
import { connectDB } from './config/db.js'
import userRoutes from './routes/user.routes.js'

dotenv.config()

const myApp = express()

myApp.use(express.json()) //Allows for JSON data to be used in request body. It is middleware

myApp.use("/api/userlist", userRoutes)

myApp.listen(5170, ()=>{
    connectDB()
    console.log("New server started at: http://localhost:5170")
})


