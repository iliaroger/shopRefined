const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  available: { type: Boolean, required: true },
  productCollection: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
});

const Products = mongoose.model('Products', productsSchema);

module.exports = Products;
