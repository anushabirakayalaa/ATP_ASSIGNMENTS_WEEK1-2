import exp from 'express';
import {UserModel} from '../models/UserModel.js';
import {hash,compare} from "bcryptjs"
import {} from "jsonwebtoken"
import { verifiedToken } from '../Middleware/verifiedToken.js';
//export userapp router it is used to create modular mountable route handlers for user related apis
export const userApp=exp.Router();
//USER API ROUTES

//Create User=>POST request to create new user
//It is for adding new user to the database and 
// if the condition is met, it saves the user and returns a success response.
userApp.post('/users',async(req,res)=>
{
    let newUser=req.body;
    //console.log(newUser)
    //hash the password...
    //let hashedPassword=await hash(newUser.password,12)
    //replace plain password with hashed password
    //newUser.password=hashedPassword
    //create new user document
    let newUserDoc=new UserModel(newUser)
    await newUserDoc.save()
    // saving new user document to the database
    res.status(201).json({message:"User created successfully",payload:newUserDoc})
})


// //user authentication(Login) Route
// userApp.post('/auth',async(req,res)=>
// {
//     //ge6b user cred obj
//     let userCred=req.body
//     //check for username
//     let userOfDB=await UserModel.findOne({username:userCred.username})
//     //if uset not found
//     if(userOfDB===null)
//     {
//         return res.status(404).json({messagw:"Invalid username"})
//     }
//     //compares passwords
//     let status=compare(userCred.password,userOfDB.password)
//     //if passwords not  matched
//     if(status===false)
//     {
//         return res.status(404).json({message:"Invalid password"})
//     }
//     //created signed token
//     let signedToken=jwt.sign({username:userCred.username},'abcdef',{expiresIn:30})
//     //10--secs
//     //"10"--millisecs
//     //SAVE TOKEN AS httpOnly cookie
//     res.cookie('token',signedToken,{
//         httpOnly:true,//its httpOnly cookie
//         secure:false,//if we use httpYes protocol then we use True...but we use httpOnly here
//         sameSite:"lax",//non->no restriction,lax->moderate restriction,
//     });
//     //SEND TOKEN
//     res.status(200).json({message:"Login Success",token:signedToken})
// })




//Read Users
userApp.get('/users',async(req,res)=>
{
    //read users from DB
    let usersList=await UserModel.find()
    //send res
    res.status(200).json({message:"users",payload:usersList})

})


//read user by ObjectId
//It retrieves a user by its ID from the database and returns it in the response.
userApp.get('/users/:id',async(req,res)=>
{
    //get ObjectId from url param
    let objId=req.params.id;
    //find user in DB
    let userObj=await UserModel.findById(objId)
    //send res
    res.status(200).json({message:"user",payload:userObj})
})


//update user=>PUT request to modify user by id
//it updates an existing user's details in the database based on the provided ID and new data.

userApp.put('/users/:id',async(req,res)=>
{
    //get objid from url params
    let objId=req.params.id;
    //get modified user from req
    let modifiedUser=req.body;
    //make update
    let latestUser= await UserModel.findByIdAndUpdate(objId,{$set:{...modifiedUser}},{new:true},{runValidators:true})
    //the runvalidators:true is used to run the validators defined in the schema while updating the document
    //send res
    res.status(200).json({message:"user modified",payload:latestUser})
})

//Delete user
//it deletes a user from the database based on the provided ID.

userApp.delete('/users/:id', async(req,res)=>{
    let objId=req.params.id
    let deletedUser=await UserModel.findByIdAndDelete(objId)
    res.status(200).json({message:"User deleted",payload:deletedUser})
})

// //test route (protected route)
// userApp.get('/test',verifiedToken,(req,res)=>{
// res.json({message:"test route"})    
// })