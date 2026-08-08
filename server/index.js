import cloudinary from "./src/config/cloudinary.config.js";
import express from  "express";
import connectDB from "./src/config/dbConnection.config.js";
import AuthRouter from "./src/routers/auth.route.js";
import PublicRouter from "./src/routers/public.route.js"
import UserRouter from "./src/routers/user.route.js";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials:true}));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use("/auth",AuthRouter);
app.use("/public",PublicRouter);
app.use("/user",UserRouter);

app.get("/", (req, res) => {
  console.log("Server Started Default Get API hit");
  res.json({ message: "Welcome to my first backend project" });
});

app.use((err,req,res,next)=>{
  const ErrMessage = err.message || "Internal Server Error";
  const ErrStatusCode = err.statusCode || 500;

  res.status(ErrStatusCode).json({message:ErrMessage})
})

const port = process.env.PORT || 5000;

app.listen(port, async() => {
  console.log("Server Started at port :", port);
  connectDB();
  try{
    const result = await cloudinary.api.ping();
    console.log("Cloudinary Connected :");
    console.log(result);
  }catch(error){
    console.warn("Cloudinary ping failed; continuing without Cloudinary:", error.message);
    // Do not exit the process here — allow the server to run even if Cloudinary ping fails.
  }
});
