
import jwt from 'jsonwebtoken';

export const verifyToken=async(req,res,next)=>
{
    //read token from req
    let token = req.cookies?.token;//{token:"token-value"}
    console.log("token:",token)
    if(token===undefined)
    {
        return res.status(400),json({message:"Unauthorized req. Please login"})
    }
    //verify the validity(decoding the token)
    let decodedToken=jwt.verify(token,process.env.JWT_SECRET)
    //forward req to next middleware or route
    next()
}

