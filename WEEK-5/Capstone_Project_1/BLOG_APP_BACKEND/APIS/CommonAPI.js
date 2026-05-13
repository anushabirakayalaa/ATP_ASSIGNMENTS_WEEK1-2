import exp from 'express';
import { authenticate } from '../services/authService.js';
export const commonRoute=exp.Router()

//login
commonRoute.post("/login",async(req,res)=>
{
    //get user cred Object
        let userCred = req.body
        //call authenticate service
        let{token,user}=await authenticate(userCred)
        //save token as http only cookie
        res.cookie("token",token,{
            httpOnly:true,
            sameSite:"lax",
            secure:false,
    })
    //send response
    res.status(200).json({message:"Login Successful",payload:user})
})

//logout
commonRoute.get('/logout',(req,res)=>
{
    //clear the cookie named token
    res.clearCookie('token',{
        httpOnly:true, //Must match origunal settings
        secure:false, //Must match origunal settings
        sameSite:"lax" //Must match origunal settings
    })
    res.status(200).json({message:"Logged out successfully"})
})

//change password
// commonRoute.put('/change-password/:userId',async(req,res)=>
// {
//     //get current pass and new pass
//     //let user=req.params.userId
//     //check the current pass and new password
//     //replace current password 
//     //send res
// })