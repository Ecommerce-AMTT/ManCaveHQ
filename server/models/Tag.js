const { Schema, Types } = require("mongoose");

const tagSchema = new Schema(
  {
    tagId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    tagName: {
      type: String,
      maxlength: 25,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = tagSchema;
