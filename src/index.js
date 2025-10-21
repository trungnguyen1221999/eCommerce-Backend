import express from "express";
import userRouter from "./router.js/userRouter.js";
import dotenv from "dotenv";
import connectDB from "./db/connectMongoDB.js";
dotenv.config();
// Create an Express application
const app = express();
app.use(express.json());
connectDB();
const PORT = process.env.PORT || 3000;
// Define a route for the root URL

// Start the server on port 3000

app.use("api/users", userRouter);
app.listen(PORT, (req, res) => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
