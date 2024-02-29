import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRoute.js";
dotenv.config();

const app = express();

app.use(express.json());

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
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
