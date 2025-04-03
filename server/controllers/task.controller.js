import Task from "../models/task.model.js";

export const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();

    if (tasks.length === 0) {
      res
        .status(200)
        .json({ success: true, message: "There are no tasks yet" });
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
