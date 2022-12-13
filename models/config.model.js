const mongoose = require("mongoose");

const Config = mongoose.model(
  "configs",
  new mongoose.Schema({
    title: String,
    User: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  })
);

module.exports = Config;
