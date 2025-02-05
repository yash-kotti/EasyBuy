const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected....");
  } catch (error) {
    console.error("MongoDB Connection Failed: ", error);
  }
};
module.exports = connectDB;
