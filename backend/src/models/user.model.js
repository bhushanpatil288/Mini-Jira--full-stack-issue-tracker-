const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true
    },
    role: {
      type: String,
      required: true
    },
    task:[ 
      {
        type: Schema.Types.ObjectId,
        ref: "Issue"
      }
    ]
  }, {timestamps: true}
)

const User = mongoose.model("User", userSchema);
module.exports = User;