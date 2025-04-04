import express from "express";
import connectDB from "./database/mongodb.js";
import cors from "cors";
import { PORT } from "./config/env.js";
import errorMiddleware from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";
import taskRoutes from "./routes/task.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1", taskRoutes);

// Custom error middleware
app.use(errorMiddleware);

// Start a server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start a server: ", error.message);
    process.exit(1);
  }
};

startServer();
