const { Schema, model } = require("mongoose");
const thoughtSchema = require("./Thought");

// Schema to create User model
const userSchema = new Schema(
  {
    Username: {
      type: String,
      unique: true,
      required: true,
      // trimmed?
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // match?
    },
    thoughts: [thoughtSchema],
    friends: [userSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
 userSchema.virtual('friendCount').get(function (){
  return this.friends.length;
 });

const User = model("user", userSchema);

module.exports = User;
