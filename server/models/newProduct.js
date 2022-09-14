const mongoose = require('mongoose');

const { Schema } = mongoose;

const newProductSchema = new Schema({
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String
    },
    price: {
      type: Number,
      required: true,
      min: 0.99
    },
    brand: {
        type: String
    },
    thumbnail: {
      type: String
    }
  });
  
  const newProduct = mongoose.model('newProduct', newProductSchema);
  
  module.exports = newProduct;
  