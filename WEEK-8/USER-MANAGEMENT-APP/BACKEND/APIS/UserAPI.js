//create min-express app
import exp from 'express'
import {UserModel} from '../models/UserModel.js'
export const UserApp=exp.Router()
//User API ROUTES

//1.Create user
UserApp.post('/users',async(req,res)=>
{
    //get new user
    const newUser=req.body
    // create user documnet
    const newUSerDocument=new UserModel(newUser)
    // save new user
    let user=await newUSerDocument.save()
    // send res
    res.status(201).json({message:"User created",payload:user})

})

//2.Read all users
UserApp.get('/users',async(req,res)=>{
    //read all users
    let userList=await UserModel.find()
    //send res
    res.status(200).json({message:"users",payload:userList})
})

//3.Read USer by ID
UserApp.get('/users/:id',async(req,res)=>{
    //get user id from url
    let uid=req.params.id;
    //find user by id
    let user=await UserModel.findOne({_id:uid,status:true});
    // chechk user
    if(!user)
    {
        return res.status(404).json({message:"user not found"})
    }
    //send res
    res.status(200).json({message:"user found",payload:user})
})

//4.Delete user by id
UserApp.delete('/users/:id',async(req,res)=>{
    //get user id from url
    let uid=req.params.id;
    //
     let user=await UserModel.findByIdAndUpdate(uid,{$set:{status:false}})
    if(!user)
    {
        res.status(404).json({message:' user not found '})
    }
    res.status(404).json({message:"updated",payload:user})
})



// Activate User(change status to true)
UserApp.patch("/users/:id",async(req,res)=>
{
    //get user id from url
    let uid=req.params.id;
    //
     let user=await UserModel.findByIdAndUpdate(uid,{$set:{status:true}})
    //send res
    res.status(404).json({message:"User Activated",payload:user})
})
//PUT (Complete chnage in the resource) & PATCH(Partial changes)




//5.Upadte User by id

