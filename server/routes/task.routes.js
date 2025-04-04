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

router.get("/tasks", authenticateUser, getAllTasks);
router.get("/tasks/:id", authenticateUser, getTask);
router.post("/tasks", authenticateUser, createTask);
router.put("/tasks/:id", authenticateUser, updateTask);
router.delete("/tasks/:id", authenticateUser, deleteTask);

export default router;
