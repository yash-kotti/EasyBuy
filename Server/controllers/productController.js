const Product = require("../models/productModel");

// Get all products with pagination & category filtering
const getProducts = async (req, res) => {
  try {
    console.log("Get Products Query Params:", req.query);
    const { page = 1, limit = 24, category } = req.query;

    // Convert page and limit to numbers (as they come as strings from query params)
    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);

    // Build query object
    const query = category ? { type: category } : {}; // Apply category filter if present

    // Get total count of matching products
    const totalProducts = await Product.countDocuments(query);
    const totalPages = Math.ceil(totalProducts / pageSize);

    // Fetch products with pagination
    const products = await Product.find(query)
      .sort({ title: -1 }) // 1 for ascending, -1 for descending
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize);

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
const searchProducts = async (req, res) => {
  try {
    console.log("Search Products Query Params:", req.query);
    const { query, page = 1, limit = 24, category } = req.query;

    // Convert page and limit to numbers (as they come as strings from query params)
    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);

    // Base search conditions
    let searchConditions = [];

    // Only add title regex if query is valid
    if (query && query.trim()) {
      searchConditions = [
        { title: { $regex: query, $options: "i" } }, // Case-insensitive title search
        { variantSKU: { $regex: query, $options: "i" } }, // Case-insensitive SKU search
      ];
    }

    // Build search query
    let searchQuery = {};

    // If there are search conditions (query) add them to the query
    if (searchConditions.length > 0) {
      searchQuery.$or = searchConditions;
    }

    // If category is provided, build category search condition
    if (category) {
      const categoriesArray = category.split(","); // Convert to array
      searchQuery.type = { $in: categoriesArray }; // Match multiple categories
    }

    console.log("Search Query ", JSON.stringify(searchQuery));

    // Get total count of matching products
    const totalProducts = await Product.countDocuments(searchQuery);

    // Fetch products with pagination
    const products = await Product.find(searchQuery)
      .sort({ title: -1 }) // 1 for ascending, -1 for descending
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize);

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
