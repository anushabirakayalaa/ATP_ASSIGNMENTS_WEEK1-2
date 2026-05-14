import express from 'express'
import mongoose, {connect} from 'mongoose'
import {config} from "dotenv"
import { UserApp } from "./APIS/UserAPI.js"
import cors from "cors"
config({ path: new URL('.env', import.meta.url) });
const port = process.env.PORT
//create http server
const app = express()
//Add body parser middleware
app.use(express.json())
app.use(cors({
    origin: [
        'http://localhost:5173',
        process.env.FRONTEND_URL,
    ].filter(Boolean)
}))
//forward request to userAPI if path starts with
app.use('/user-api',UserApp)

//connect to db
let dbConnectionPromise;

export async function connectDB() {
    if (mongoose.connection.readyState === 1) {
        return mongoose.connection;
    }

    if (!process.env.DB_URL) {
        throw new Error('DB_URL environment variable is required');
    }

    if (dbConnectionPromise) {
        return dbConnectionPromise;
    }

    try{
        dbConnectionPromise = connect(process.env.DB_URL)
        await dbConnectionPromise
        console.log("Connected to DB")
        return mongoose.connection;
    } catch(err) {
        dbConnectionPromise = undefined;
        console.log("Error in DB Connection",err)
        throw err;
    }
}

if (process.env.NODE_ENV !== 'production' || process.env.VERCEL !== '1') {
    connectDB()
        .then(() => app.listen(port || 4000, ()=>console.log(`Server started ${port || 4000}`)))
        .catch((err) => {
            console.error(err.message);
            process.exit(1);
        });
}

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

export default app;


