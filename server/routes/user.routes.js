import { Router } from "express";
import { getUserInfo, updateUserInfo } from "../controllers/user.controller.js";
import authenticateUser from "../middleware/auth.middleware.js";

const router = Router();

router.get("/me", authenticateUser, getUserInfo);
router.patch("/me", authenticateUser, updateUserInfo);

export default router;
