import Task from "../models/task.model.js";
import mongoose from "mongoose";

export const getAllTasks = async (req, res, next) => {
  try {
    const { userId } = req.user;

    const sortBy = req.query.sortBy;
    let sortOption = {};
    switch (sortBy) {
      case "done":
        sortOption = { done: -1 };
        break;
      case "priority-asc":
        sortOption = { priority: 1 };
        break;
      case "priority-desc":
        sortOption = { priority: -1 };
        break;
      case "active-first":
        sortOption = { done: 1 };
        break;
      case "default":
        sortOption = { createdAt: -1 };
        break;
      default:
        sortOption = { createdAt: -1 }; // Podrazumevano sortiranje
        break;
    }

    const tasks = await Task.find({ user: userId }).sort(sortOption);

    if (tasks.length === 0) {
      res
        .status(200)
        .json({ success: true, message: "There are no tasks yet" });
      return;
    }

    res.status(200).json({
      success: true,
      tasks: tasks,
    });
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};

export const getTask = async (req, res, next) => {
  const { userId } = req.user;
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error("Invalid task ID");
      error.statusCode = 400;
      throw error;
    }

    const task = await Task.findOne({ _id: id, user: userId });

    if (!task) {
      const error = new Error("Task not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({ success: true, task: task });
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};

export const createTask = async (req, res, next) => {
  const { userId } = req.user;
  const { title, description, priority } = req.body;

  try {
    const newTask = await Task.create({
      title: title,
      description: description,
      priority: priority,
      user: userId,
    });

    res.status(201).json({
      success: true,
      message: "Task created successfully",
      task: newTask,
    });
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  const { userId } = req.user;
  const { id } = req.params;
  const { title, description, priority, done } = req.body;

  try {
    const task = await Task.findOneAndUpdate(
      {
        _id: id,
        user: userId,
      },
      {
        title: title,
        description: description,
        priority: priority,
        done: done,
      },
      { new: true }
    );

    if (!task) {
      const error = new Error("Task not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      success: true,
      message: "Task updated successfully",
      task: task,
    });
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  const { userId } = req.user;
  const { id } = req.params;
  try {
    const task = await Task.findOneAndDelete({ _id: id, user: userId });

    if (!task) {
      const error = new Error("Task not found");
      error.statusCode = 404;
      throw error;
    }

    res
      .status(200)
      .json({ success: true, message: "Task deleted successfully" });
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};
