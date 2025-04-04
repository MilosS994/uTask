import { Router } from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTask,
  updateTask,
} from "../controllers/task.controller.js";
import authenticateUser from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", authenticateUser, getAllTasks);
router.get("/:id", authenticateUser, getTask);
router.post("/", authenticateUser, createTask);
router.put("/:id", authenticateUser, updateTask);
router.delete("/:id", authenticateUser, deleteTask);

export default router;
