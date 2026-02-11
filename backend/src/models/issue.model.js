const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const issueSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true
    },
    description: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true,
      enum: ['admin', 'user', 'guest']
    },
    priority: {
      type: String,
      required: true,
      enum: ['low', 'medium', 'high'],
    },
    assignedTo :{
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  }, {timestamps: true}
)

const Issue = mongoose.model("Issue", issueSchema);
module.exports = Issue;