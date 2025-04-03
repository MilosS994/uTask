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

export const getTask = async (req, res, next) => {
  const { id } = req.params;

  try {
    const task = await Task.findOne({ _id: id });

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
  const { title, description, priority } = req.body;

  try {
    const newTask = await Task.create({
      title: title,
      description: description,
      priority: priority,
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
  const { id } = req.params;
  const { title, description, priority, done } = req.body;

  try {
    const task = await Task.findOneAndUpdate({
      _id: id,
      title: title,
      description: description,
      priority: priority,
      done: done,
    });

    if (!task) {
      const error = new Error("Task not found");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};
