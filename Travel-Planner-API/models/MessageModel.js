const mongoose = require("mongoose");
const msgSchema = mongoose.Schema(
  {
    trip : {
      type: mongoose.Types.ObjectId
    },
    message: {
      text: {
        type: String,
        required: true,
      },
    },
    users: Array,
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Messages", msgSchema);
