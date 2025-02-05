const Product = require("../models/productModel");

// Get all products with pagination & category filtering
const getProducts = async (req, res) => {
  try {
    console.log("Get Products", req.query);
    const { page = 1, limit = 24, category } = req.query;
    const query = category ? { type: category } : {}; // Adjusted for camelCase field name
    const totalProducts = await Product.countDocuments(); // Get the total number of products
    const totalPages = Math.ceil(totalProducts / limit); // Calculate the total number of pages

    const products = await Product.find(query)
      .limit(Number(limit)) // Ensuring limit is a number
      .skip((page - 1) * limit);

    res.json({
      products,
      totalPages, // Include totalPages in the response
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Search products by Name or SKU
const searchProducts = async (req, res) => {
  try {
    console.log("Search Products", req);
    const { query, page = 1, limit = 24, category } = req.query;

    // Convert page and limit to numbers (as they come as strings from query params)
    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);

    // Build search query
    const searchQuery = {
      $or: [
        { title: { $regex: query, $options: "i" } },
        { variantSKU: { $regex: query, $options: "i" } },
      ],
    };

    // If category filter is provided, include it
    if (category) {
      searchQuery.category = category;
    }

    // Get total count of matching products
    const totalProducts = await Product.countDocuments(searchQuery);

    // Fetch products with pagination
    const products = await Product.find(searchQuery)
      .skip((pageNumber - 1) * pageSize) // Skip previous pages
      .limit(pageSize); // Limit the results per page

    // Calculate total pages
    const totalPages = Math.ceil(totalProducts / pageSize);

    res.json({
      products,
      totalPages,
      currentPage: pageNumber,
      totalProducts,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getProducts, searchProducts };
