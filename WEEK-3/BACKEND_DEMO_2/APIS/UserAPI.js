import exp from 'express';
import {UserModel} from '../models/UserModel.js';
export const userApp=exp.Router();
//USER API ROUTES

//Create User
userApp.post('/users',async(req,res)=>
{
    let newUser=req.body;
    let newUserDoc=new UserModel(newUser)
    await newUserDoc.save()
    res.status(201).json({message:"User created successfully",payload:newUserDoc})
})


//Read Users
userApp.get('/users',async(req,res)=>
{
    //read users from DB
    let usersList=await UserModel.find()
    //send res
    res.status(200).json({message:"users",payload:usersList})

})


//read usrer by ObjectId
userApp.get('/users/:id',async(req,res)=>
{
    //get ObjectId from url param
    let objId=req.params.id;
    //find user in DB
    let userObj=await UserModel.findById(objId)
    //send res
    res.status(200).json({message:"user",payload:userObj})
})


//update user
userApp.put('/users/:id',async(req,res)=>
{
    //get objid from url params
    let objId=req.params.id;
    //get modified user from req
    let modifiedUser=req.body;
    //make update
    let latestUser= await UserModel.findByIdAndUpdate(objId,{$set:{...modifiedUser}},{new:true},{runValidators:true})
    //send res
    res.status(200).json({message:"user modified",payload:latestUser})
})

//Delete user
userApp.delete('/users/:id', async(req,res)=>{
    let objId=req.params.id
    let deletedUser=await UserModel.findByIdAndDelete(objId)
    res.status(200).json({message:"User deleted",payload:deletedUser})
})