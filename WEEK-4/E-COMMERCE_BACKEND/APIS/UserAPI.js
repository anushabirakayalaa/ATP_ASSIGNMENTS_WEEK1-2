//importing the Schema
import exp from "express";
import {UserModel} from '../models/UserModel.js';
import { ProductModel } from "../models/ProductModel.js";
import {hash,compare} from "bcrypt"
import { Types } from 'mongoose'
 
export const userRoute=exp.Router();
//create user
userRoute.post('/users',async(req,res,next)=>
{
    try{
    //create new user document
    const newUser=req.body;
    //run validator--shld do before creating the hash
    await new UserModel(newUser).validate()
    //hash password
    let hashedPassword=await hash(newUser.password,10);
    //replace plain passwrd with hashed password
    newUser.password=hashedPassword
    const newUserDoc=new UserModel(newUser)
    //save---this run the validator 2nd time alkso
    await newUserDoc.save({validateBeforeSave:false})
    res.status(201).json({message:"User created successfully",payload:newUserDoc})
    }
    catch(err){
        next(err);
    }
})



userRoute.put('/user-cart/user-id/:uid/product-id/:pid',async(req,res)=>
{
    //read uid and pid from ural params
    let {uid,pid} =req.params; //Firstly req.params--is an object---it has url 2 parametsrs--{uid,pid}
    //check user
    let user=await UserModel.findById(uid)
    if(!user)
    {
        return res.status(401).json({message:"USer not found"})
    }
    
    //check product
     let product=await ProductModel.findById(pid)
    if(!product)
    {
        return res.status(401).json({message:"Product not found"})
    }
//CHECK IF PROD IN CART
let found=false
for (let i = 0; i<user.cart.length;i++)
{
    if(user.cart[i]&& user[i].product.toString()===pid)
    {
        user.cart[i].quantity+=1,
        found=true
        break
    }
}
if (!found)
{
    user.cart.push({product:pid,quantity:1})
}
userRoute.get('/user',async(req,res)=>
{
    let productId=new Types.ObjectId(req.params.id)
    

})
//compare the ids
//using equals method






//perform update
    let modifiedUser = await UserModel.findByIdAndUpdate(
    uid,
    {$push:{cart:{product:pid}}},
    {new:true}).populate("cart.product")
    //res
    res.status(200).json({message:"Product Added to cart",payload:modifiedUser})

})

//cart1={product:{}} =>cart1.product
//cart2=[{product:" "}]

//Read user by id
userRoute.get('/users/:uid',async(req,res)=>
{
    let {uid} = req.params
    let userObj = await UserModel.findById(uid).populate("cart.product","productName price")
    res.status(200).json({message:"user",payload:userObj})
})

















//check available in cart or not
    // if(cart.product.quantity===1)
    // {
    //      let modifiedUser = await UserModel.findByIdAndUpdate(
    //     uid,
    //     {$push:{cart:{product:pid}}},
    //     {new:true}).populate("cart.product")
    // //res
    // res.status(200).json({message:"Product Added to cart"})    
    // }
    // else if(cart.product.quantity>1){

    //     let modifiedUser = await UserModel.findByIdAndUpdate(
    //     uid,
    //     {$push:{cart:{product:pid}+1}},
    //     {new:true}).populate("cart.product")
    //     cart.product.quantity+=1,    
    //     //res
    // res.status(200).json({message:"Product Added Again to cart"})
    // }