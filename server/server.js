import express from "express";
import connectDB from "./database/mongodb.js";
import cors from "cors";
import { PORT } from "./config/env.js";
import errorMiddleware from "./middleware/error.middleware.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the server");
});

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
