import express from 'express'
import {connect} from 'mongoose'
import {config} from "dotenv"
import { UserApp } from "./APIS/UserAPI.js"
import cors from "cors"
config();
const port = process.env.PORT
//create http server
const app = express()
//Add body parser middleware
app.use(express.json())
app.use(cors{{
  origin:['http://localhost:5173']
}})
//forward request to userAPI if path starts with
app.use('/user-api',UserApp)

//connect to db
async function connectDB() {
    try{
        await connect(process.env.DB_URL)
        console.log("Connected to DB")
        //assign port no.
        app.listen(port, ()=>console.log(`Server started ${port}`))
    } catch(err) {
    console.log("Error in DB Connection",err)
    }
}
connectDB()

//error handling
app.use((err,req,res,next)=>
{
    console.log("ERROR in the Middleware",err)
    res.status(500).json({message:"Error",reason:err.message})
})


app.use((err, req, res, next) => {
  // Mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    });
  }
  // Invalid ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  // Duplicate key
  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value",
    });
  }
  res.status(500).json({
    message: "Internal Server Error",
  });
});


