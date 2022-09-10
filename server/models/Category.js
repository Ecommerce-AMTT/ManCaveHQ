const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
  _id: Number,
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
