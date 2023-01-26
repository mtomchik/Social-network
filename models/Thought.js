const { Schema, Types } = require('mongoose');
const userSchema = require('./User')

const thoughtSchema = new Schema(
  {
    thoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
  username:{userSchema
  },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    reactions:{
    reactionSchema
    }
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = thoughtSchema;
