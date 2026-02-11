import exp from 'express'
import {connect} from 'mongoose'
import {config} from 'dotenv'
import { userRoute } from "./APIS/UserAPI.js"
import { authorRoute } from './APIS/AuthorAPI.js'
import { adminRoute } from './APIS/AdminAPI.js'
import cookieParser from "cookie-parser";
import { commonRoute } from './APIS/CommonAPI.js'
config()//process.env
//craete express application    
const app = exp()
//ADDING BODY PARSER MIDDLEWARE
app.use(exp.json())//function.function? why
//add cookie parser middleware
app.use(cookieParser())
//Connect APIs
app.use('/user-api',userRoute)
app.use('/author-api',authorRoute)
app.use('/common-api',commonRoute) 
app.use('/admin-api',adminRoute)

//logout for user,author and admin
// app.post('/logout',(req,res)=>
// {
//     //clear the cookie named token
//     res.clearCookie('token',{
//         httpOnly:true, //Must match origunal settings
//         secure:false, //Must match origunal settings
//         sameSite:"lax" //Must match origunal settings
//     })
// })
//connect to db
const connectDB = async()=>
{   try{
    await connect(process.env.DB_URL)//access from .env file
    console.log("DB Connection succesful")
    //start http server
    app.listen(process.env.PORT,()=>console.log("Serevr started"))
   }catch(err)
   {
    console.log("Eroor in DB Connection",err)
   }
}
connectDB()

// //random test route--not required, its only to check if the server is working or not  
// app.get('/test',(req,res)=>{
//     res.send("Server working")
// })


//dealing with invalid-path----keep it always on top of the error handling (To handle any inavlid urls in req.http)
app.use((req,res,next)=>
{
    console.log(req.url)
    res.json({message:`${req.url} is invalid path`})
})

//error handling
app.use((err,req,res,next)=>
{
    console.log("ERROR",err)
    res.json({message:"Error",reason:err.message})
})

