import jwt from 'jsonwebtoken';
export const verifyToken=(...allowedRoles)=>
    {
        return async (req,res,next)=>{
    try{
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
    if(!allowedRoles.includes(decodedToken.role))
    {
        return res.status(403).json({message:"Forbidden, You dont "})
    }
    // Attach the user info to req for use in router
    res.user = decodedToken;
    next();

}catch(err)
// if we wanna know what type of errors may occur ...we can simply print err and check for posiible errors
{
    // jwt.vwrify throws if token is invalid/expired
    if(err.name==="TokenExpiredError")
    {
        return res.status(401).json({message:"Session Expired! Please check"})
    }
    if(err.name==="JsonWebTokenError")
    {
        return res.status(401).json({message:"Invalid Token! Please check"})
    }
    // next(err)
};
}}
