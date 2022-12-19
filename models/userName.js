const { Schema, Types } = require("mongoose");

const userNameSchema = new Schema(
  {
    userNameId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    userNameName: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 4,
      default: "Unnamed userName",
    },
    score: {
      type: Number,
      required: true,
      default: () => Math.floor(Math.random() * (100 - 70 + 1) + 70),
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

module.exports = userNameSchema;
