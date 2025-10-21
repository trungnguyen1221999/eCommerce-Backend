import { Router } from "express";
import {
  register,
  login,
  getAllUsers,
  changeUserRole,
  deleteUser,
} from "../controllers/userController.js";
import {
  AuthMiddleware,
  isAdmin,
  isVerifyEmail,
} from "../middleware.js/AuthMiddleware.js";

const userRouter = Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/users", isVerifyEmail, AuthMiddleware, isAdmin, getAllUsers);
userRouter.put(
  "/users/:id/role",
  isVerifyEmail,
  AuthMiddleware,
  isAdmin,
  changeUserRole
);
userRouter.delete(
  "/users/:id",
  isVerifyEmail,
  AuthMiddleware,
  isAdmin,
  deleteUser
);
userRouter.put(
  "/users/:id/password",
  isVerifyEmail,
  AuthMiddleware,
  changeUserRole
);
export default userRouter;
