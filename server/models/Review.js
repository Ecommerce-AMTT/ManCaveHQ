const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  title: String,
  rating: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = reviewSchema;
