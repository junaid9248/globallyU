import express from 'express'
import dotenv from "dotenv"
import { connectDB } from './config/db.js'
import userRoutes from './routes/user.routes.js'

dotenv.config()
const myApp = express()

myApp.listen(5170, ()=>{
    connectDB()
    console.log("New server started at: http://localhost:5170")
})


myApp.use(express.json()) //Allows for JSON data to be used in request body 

myApp.use("/api/products", userRoutes)


