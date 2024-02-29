import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database conneted");
  })
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running!!");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/user", userRouter);
