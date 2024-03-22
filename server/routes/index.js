import express from "express";
import authRoute from "./authRoutes.js";
import userRoute from "./userRoutes.js";
const router = express.Router();
router.use(`/auth`, authRoute); //This goes like  - /auth/register or login
router.use(`/users` , userRoute);
export default router;
