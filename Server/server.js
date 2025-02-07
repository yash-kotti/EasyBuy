const express = require("express");
const connectDB = require("./config");
const Product = require("./models/productModel");
const productRoutes = require("./routes/productRoutes");
const cors = require("cors");
require("dotenv").config();
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

const seedData = async () => {
  try {
    const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
    // console.log(data);
    await Product.deleteMany();
    await Product.insertMany(data);
    console.log("Data Inserted Successfully");
  } catch (error) {
    console.error("Error Seeding Data:", error);
  }
};

// Uncomment this to seed the database once
// seedData();

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
