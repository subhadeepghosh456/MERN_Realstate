import express, { Router } from "express";
import {
  test,
  updateUserInfo,
  deleteUser,
  getUserListings,
  getUser,
} from "../controllers/userControllers.js";
import { verifyToken } from "../utils/verifyUser.js";
const router = Router();

router.get("/test", test);
router.post("/update/:id", verifyToken, updateUserInfo);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/listings/:id", verifyToken, getUserListings);
router.get("/:id", verifyToken, getUser);

export default router;
