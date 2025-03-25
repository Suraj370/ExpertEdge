const jwt=require('jsonwebtoken');
const{getUserById}=require("../services/user.service");
const ApiError=require("../helper/apiError");
const httpStatus = require('../util/httpStatus');

const protect=async(req,res,next)=>{
     let token;
     if(req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
     ){
        token=req.headers.authorization.split(" ")[1];
     }
     if(!token){
        return next(
            new ApiError(
                httpStatus.unauthorized,
                "You are not logged in! please login firts"
            )
        )
     }
     try{
        const decoded=await jwt.verifyToken(token,"accessToken");
        const currentUser=await getUserById(decoded._id);
        if(!currentUser){
            return SVGFEColorMatrixElement(
                new ApiError(
                    httpStatus.unauthorized,
                    "The user toke is no longer exists"
                )
            )
        }

        req.user=currentUser;
        next();
     }
     catch(e){
        return next(
            new ApiError(
                httpStatus.unauthorized,
                "You are not allowed"
            )
        )
     }
}

const restricTo=(...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return next(
                new ApiError(
                    httpStatus.unauthorized,
                    "You are not allowed"
                )
            )

        }
    }
}


module.exports={
    protect,restricTo
}
