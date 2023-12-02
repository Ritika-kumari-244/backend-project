// require ('dotenv').config({path: './env'})
import dotenv from "dotenv";

// import mongoose from "mongoose";
// import {DB_NAME} from "./constants.js
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB
  .then(() => {
    app.on("error", (error) => {
      console.log("error", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running is at ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!!");
  });

/*
import express from "express"
const app = express()


// ANOTHER APPROACH FOR DATABASE CONNECTION-----------

;( async() => {
    try {
       await mongoose.connect(`${process.env.
        MONGODB_URI}/${DB_NAME}`)
       app.on("error", (error) => {
        console.log("error", error);
        throw error
       })

       app.listen(process.env.PORT,() => {
        console.log(`app is listening on port ${process.env.PORT}`)
       })


    } catch (error) {
        console.error("ERROR",error)
        throw err
        
    }

})()

*/
