const { Schema, model } = require("mongoose");

// Schema to create a course model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
 
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Course = model("course", courseSchema);

module.exports = Course;
