import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [2, "Title must be at least 2 characters long"],
      maxlength: [80, "Title can't be more than 80 characters long"],
      trim: true,
    },

    description: {
      type: String,
      maxlength: [500, "Description can't be more than 500 characters long"],
      trim: true,
    },

    priority: {
      type: Number,
      enum: {
        values: [1, 2, 3],
        message:
          "{VALUE} is not a supported priority level (must be 1, 2, or 3)",
      },
      default: 1,
    },

    done: {
      type: Boolean,
      default: false,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
  },
  { timestamps: true }
);

taskSchema.index({ priority: 1, done: 1 });

const Task = mongoose.model("Task", taskSchema);

export default Task;
