const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  handle: { type: String, alias: "Handle" },
  title: { type: String, alias: "Title" },
  body: { type: String, alias: "Body" },
  vendor: { type: String, alias: "Vendor" },
  type: { type: String, alias: "Type" },
  tags: { type: String, alias: "Tags" },
  option1Name: { type: String, alias: "Option1 Name" },
  option1Value: { type: String, alias: "Option1 Value" },
  option2Name: { type: String, alias: "Option2 Name" },
  option2Value: { type: String, alias: "Option2 Value" },
  option3Name: { type: String, alias: "Option3 Name" },
  option3Value: { type: String, alias: "Option3 Value" },
  variantSKU: { type: String, alias: "Variant SKU" },
  variantGrams: { type: Number, alias: "Variant Grams" },
  variantInventoryTracker: { type: String, alias: "Variant Inventory Tracker" },
  variantInventoryQty: { type: Number, alias: "Variant Inventory Qty" },
  variantInventoryPolicy: { type: String, alias: "Variant Inventory Policy" },
  variantFulfillmentService: {
    type: String,
    alias: "Variant Fulfillment Service",
  },
  variantPrice: { type: Number, alias: "Variant Price" },
  variantCompareAtPrice: { type: String, alias: "Variant Compare At Price" },
  imageSrc: { type: String, alias: "Image Src" },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
