const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  sales: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value'
    }
  },
  rating: {
    type: Number,
    required: true,
    enum: [1, 2, 3, 4, 5],
    message: '{VALUE} is not a valid rating'
  },
  discount: {
    type: Number,
    required: true,
    enum: [10, 20, 30, 40, 50],
    message: '{VALUE} is not a valid discount'
  }
});

const Products = mongoose.model('Product', productSchema);

module.exports = Products;
