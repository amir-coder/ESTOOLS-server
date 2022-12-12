const mongoose = require("mongoose");

const Folder = mongoose.model(
  "folders",
  new mongoose.Schema({
    title: String,
    color: String,
    priority: Number,
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "folders",
    },
    config: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "configs",
    },
  })
);

module.exports = Folder;
