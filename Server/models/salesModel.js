const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  saleDate: String,
  items: Array,
  storeLocation: String,
  customer: Object,
  couponUsed: Boolean,
  purchaseMethod: String,
});

module.exports = mongoose.model("Sales", userSchema);
