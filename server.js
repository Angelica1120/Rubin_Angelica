import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Create a simple route
app.get("/", (req, res) => {
  res.send("Hello, Express is working!");
});

app.use("/api", userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});