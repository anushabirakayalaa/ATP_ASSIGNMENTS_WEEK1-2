import exp from "express"; 

import { userApp } from './APIS/UserAPI.js'
import { connect } from "mongoose";
const app=exp();
//assign port
const port = 4000;

//body parsing middleware
app.use(exp.json());

//mount the user API router
app.use('/user-api', userApp);

//now connect to db server

async function connectDB()
{
    try{
    await connect('mongodb://localhost:27017/anuragdb')
    console.log("DB Connected success")
    //listening to port
    app.listen(port,()=>console.log("server is listening to port 4000"));

    }catch(err){
        console.log("Error in DB Connection:",err)
    }

    //.then(()=>console.log("Connected to Database"))
    //.catch((err)=>console.log("Error in connecting to DB",err))
    //to deal with blocking operations or time takin operations asynchronously we use promises
    //all blocking operations return promises
    //consuming the promise .then().catch()--to know if promise is fullfilled or rejected
    //we can use async and await

}
connectDB()

//error handling middleware
