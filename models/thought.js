const { Schema, model } = require("mongoose");
const moment = require('moment');

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    require: true,
    maxlength: 280,
  },
  username: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: newDate => moment(newDate).format("MM DD, YYYY"),
  },
});

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    requird: true,
    maxlength: 280,
    minlength: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: newDate => moment(newDate).format("MM DD, YYYY"),
  },
  username: {
    type: String,
    require: true,
  },
  reactions: [reactionSchema],
});


thoughtSchema.virtual("reactionCount").get(() => {
  return this.reactions.length;
});

const thought = model("thought", thoughtSchema);

module.exports = thought;
