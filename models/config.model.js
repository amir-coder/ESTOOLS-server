const mongoose = require("mongoose");

const Config = mongoose.model(
  "Config",
  new mongoose.Schema({
    title: String,
    User: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
      }
    ]

  })
);

module.exports = Config;
