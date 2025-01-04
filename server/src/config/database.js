// server/src/config/database.js
const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config({
  path:"server/src/.env"
})

console.log(process.env.MONGODB_URI)
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
