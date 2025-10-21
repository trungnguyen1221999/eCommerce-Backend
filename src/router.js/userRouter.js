import { Router } from "express";
import {
  register,
  login,
  getAllUsers,
  changeUserRole,
  deleteUser,
} from "../controllers/userController.js";
import { AuthMiddleware, isAdmin } from "../middleware.js/AuthMiddleware.js";

const userRouter = Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/users", AuthMiddleware, isAdmin, getAllUsers);
userRouter.put("/users/:id/role", AuthMiddleware, isAdmin, changeUserRole);
userRouter.delete("/users/:id", AuthMiddleware, isAdmin, deleteUser);
userRouter.put("/users/:id/password", AuthMiddleware, changeUserRole);
export default userRouter;
