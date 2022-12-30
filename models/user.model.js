const mongoose = require("mongoose");

const user = mongoose.model(
  "users",
  new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    isValid: {
      type: Boolean,
      default: false,
    },
    configs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Config",
      },
    ],
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "roles",
      },
    ],
  })
);

module.exports = user;
