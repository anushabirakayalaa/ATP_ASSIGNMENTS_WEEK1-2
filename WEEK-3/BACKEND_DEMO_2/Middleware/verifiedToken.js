//import cookieParser from "cookie-parser";   
import jwt from "jsonwebtoken"
export function verifiedToken(req,res,next){
    //token verification logic

    //1.get the token from req
        //npm install cookie-parser
        let signedToken=req.cookies.token;
        if(!signedToken)
        {
            return res.status(401).json({Message:"Please login first"})
        }

    //2. verify token(decode)
        let decodedToken=jwt.verify(signedToken,'abcdef')
        console.log("Decoded Token:",decodedToken)

}