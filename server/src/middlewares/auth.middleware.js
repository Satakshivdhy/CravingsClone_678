export const AuthPerfect = async (req,res,next)=>{
    try{
        // Controller Logic
        next();  // no parmeter because it contain controller logic and there is nothing next to controller

    } catch(error){
        console.log(error.message);
        const error = new Error("Unknown Error At Midleware");
        error.statusCode = 500;
        next(error);
        
    }

}