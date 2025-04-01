import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the server");
});

app.listen(5500, () => {
  console.log("Server is running on port 5500");
});
