import exp from "express"; 

import { userApp } from './APIS/UserAPI.js';//importing userApp
import { productApp } from "./APIS/ProductAPI.js"; //importing productApp
import { connect } from "mongoose";//importing connect function from mongoose
import cookieParser from "cookie-parser";

//creating express app
const app=exp();
//assign port
const port = 4000;

//body parsing middleware
app.use(exp.json())

//add cookie-parser
app.use(cookieParser())


//mount the user API router
app.use('/user-api', userApp);//using userApp for routes starting with /user-api
app.use('/product-api', productApp);//using productApp for routes starting with /product-api

//now connect to db server
async function connectDB()
{
    try{
    //connecting to mongodb database
    await connect('mongodb://localhost:27017/anuragdb')
    console.log("DB Connected success")
    //listening to port
    app.listen(port,()=>console.log("server is listening to port 4000"));

    }catch(err){//if error occurs during connection
        console.log("Error in DB Connection:",err)
    }

    //.then(()=>console.log("Connected to Database"))
    //.catch((err)=>console.log("Error in connecting to DB",err))
    //to deal with blocking operations or time takin operations asynchronously we use promises
    //all blocking operations return promises
    //consuming the promise .then().catch()--to know if promise is fullfilled or rejected
    //we can use async and await

}
connectDB()//calling connectDB function to connect db and call server

//error handling middleware
