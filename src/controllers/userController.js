import UserModel from "../models/userModels.js";

export const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
      return res.status(400).json({ message: "All fields are required." });
    }
    const isExist = await UserModel.findOne({ email });
    if (isExist) {
      return res.status(400).json({ message: "Email already exists." });
    }
    const newUser = UserModel.create({ username, password, email });
    return res
      .status(201)
      .json({ message: "User registered successfully.", user: newUser });
  } catch (error) {
    return res.status(500).json({ message: "Server error." });
  }
};
export const login = async (req, res) => {};
export const getAllUsers = (req, res) => {};
export const changeUserRole = (req, res) => {};
export const deleteUser = (req, res) => {};
export const changePassword = (req, res) => {};
