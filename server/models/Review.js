const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  currentRating: Number,
  comment: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Review = model("Review", reviewSchema);
module.exports = Review;
