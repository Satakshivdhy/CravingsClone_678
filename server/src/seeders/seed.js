import dotenv from "dotenv";
dotenv.config();

import connectDB from "../config/dbConnection.config.js";
import adminSeed from "./adminSeed.js";
import userSeed from "./userSeed.js";

const seed = async () => {
  try {
    connectDB();

    await adminSeed();
    await userSeed();
  } catch (error) {
    console.log(error.message);
  } finally {
    process.exit(1);
  }
};

seed();
