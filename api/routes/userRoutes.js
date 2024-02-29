import express, { Router } from "express";
import { test } from "../controllers/userControllers.js";
const router = Router();

router.get("/test", test);

export default router;
