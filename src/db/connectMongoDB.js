import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
// URL kết nối MongoDB (thay bằng URL của bạn)
const mongoURI = process.env.MONGO_URI;

// Hàm kết nối MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Thoát ứng dụng nếu kết nối thất bại
  }
};

export default connectDB;
