const mongoose = require("mongoose");

const Resources = mongoose.model(
  "resources",
  new mongoose.Schema({
    title: String,
    url: String,
    color: String,
    folder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "folders",
    },
    config: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "configs",
    },
  })
);

module.exports = Resources;
