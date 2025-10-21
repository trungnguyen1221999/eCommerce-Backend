import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// 1️⃣ Tạo transporter chung
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: false, // false cho 587 (STARTTLS)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // app password
  },
});

/**
 * 2️⃣ Hàm gửi mail
 * @param {string} to - Email người nhận
 * @param {string} subject - Tiêu đề mail
 * @param {string} text - Nội dung plain-text
 * @param {string} html - Nội dung HTML (tuỳ chọn)
 */
export const sendVerifyEmail = async function sendMail({
  to,
  subject,
  text,
  html,
}) {
  try {
    const info = await transporter.sendMail({
      from: `"Kai Nguyen" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html,
    });
    console.log("Message sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending mail:", error);
    throw error;
  }
};
