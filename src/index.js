import express from "express";
import userRouter from "./router.js/userRouter.js";
import dotenv from "dotenv";
dotenv.config();
// Create an Express application
const app = express();
const PORT = process.env.PORT || 3000;
// Define a route for the root URL

// Start the server on port 3000
app.use(express.json());
app.use("api/users", userRouter);
app.listen(PORT, (req, res) => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
