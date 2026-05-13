import exp from 'express';
import {authenticate, register} from "../services/authService.js";
import { verifyToken } from '../middlewares/verifyToken.js';
import { checkUser } from '../middlewares/checkUser.js'
import {ArticleModel} from "../models/articleModel.js";

export const userRoute=exp.Router()

// Register user 
userRoute.post('/users',async(req,res)=>
 {
    try {
        //get user obj from req
        let userObj = req.body;
         //call register
         const newUserObj = await register({...userObj,role:"USER"})
         //send res
         res.status(201).json({message:"user created",payload:newUserObj})
    } catch (error) {
        if (error.code === 11000) {
            // Duplicate key error
            res.status(409).json({ error: "User with this email already exists" })
        } else {
            res.status(500).json({ error: error.message || "Internal server error" })
        }
    }
 });

// //Authenticate user
// userRoute.post('/authenticate',async(req,res)=>
// {
//     //get user cred Object
//     let userCred = req.body
//     //call authenticate service
//     let{token,user}=await authenticate(userCred)
//     //save token as http only cookie
//     res.cookie("token",token,{
//         httpOnly:true,
//         sameSite:"lax",
//         secure:false,
// })
// res.status(200).json({message:"Login Successful",payload:user})
// })




//Read all articels (protected route)
userRoute.get('/articles',verifyToken,async(req,res)=>
{       
        const newArticleList = await ArticleModel.find({isArticleActive:true}) //in find we can also add isArticleActive=true and .populate("author,"firstName email")
        //or also can be
        //let newArticleList = await ArticleModel.find({isArticleActive:true})
        //.populate("author","firstName email")

        //send response 
        res.status(200).json({message:"All Articles",payload:newArticleList})
})


//add comment to an article
        // userRoute.put('/user/:uid/article/:aid',verifyToken,checkUser,async(req,res)=>{
        //     // getting the userid and article id where we have to comment 
        //     let {uid,aid} = req.params;
        //     // check if the article exist as the user is already checked
        //     let articeOfDB = await ArticleModel.findOne({_id:aid,isArticleActive:true});
        //     // now if the article is not there then can't comment 
        //     if(!articeOfDB){
        //         return res.status(404).json({message:"article not available"})
        //     }

        //     let newArticle = await ArticleModel.findOneAndUpdate(
        //         {_id:aid},
        //         {$push:{"comments":{user:uid,comment:req.body.comment}}},
        //         {new:true}
        //     )

        //     res.status(200).json({message:"comment added",payload:newArticle});

        // })

userRoute.put('/articles',verifyToken("USER"),checkUser,async(req,res)=>
{    // get comment obj fromreq
    const { user,articleId,comment}=req.body;
    // find article by id 
    // find article id and update
    console.log(req.user)

    if (user!==req.user.userId)
    {
    res.status(403).json({message:"Forbidden"});

    }
    let articleWaitComment=await ArticleModel.findByIdAndUpdate(
    articleId,
    {$push:{comments:{user,comment}}},
    { new :true, runValidators:true}
);


// if a
if (!articleWaitComment)
{
     return res.status(404).json({message:"article not available"})
}
// send res
 return res.status(200).json({message:"comment added successfully"})


})