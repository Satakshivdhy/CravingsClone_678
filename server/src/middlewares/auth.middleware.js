import jwt from "jsonwebtoken";
import User from "../models/user.model.js";


export const AuthProtect = async (req,res,next)=>{
    try{
        // Controller Logic
        // next();  // no parmeter because it contain controller logic and there is nothing next to controller
        const token = req.cookies.Oreo;
        if (!token){
            const error = new Error("Session Expired");
            error.statusCode = 401;
            return next(error);
        }
        console.log(("Token Form MiddleWare :", token));

        const decode = await jwt.verify(token, process.env.JWT_SECRET);
        if(!decode){
            const error = new Error ("Session Expired");
            error.statusCode =401;
            return next(error);
        }
        console.log("Decode:", decode);

        const verifiedUser = await User.findById(decode.id);
        console.log("VerifiedUser:", verifiedUser);
        if(!verifiedUser){
            const error = new Error("Session Expired");
      error.statusCode = 401;
      return next(error);
        }

        req.user = verifiedUser;
        next();
    } catch(error){
        console.log(error.message);
        next(error);
        
    }

}