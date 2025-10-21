import { Router } from "express";
import {
  register,
  login,
  getAllUsers,
  changeUserRole,
  deleteUser,
} from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/users", getAllUsers);
userRouter.put("/users/:id/role", changeUserRole);
userRouter.delete("/users/:id", deleteUser);
userRouter.put("/users/:id/password", changeUserRole);
export default userRouter;
