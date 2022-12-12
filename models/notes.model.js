const mongoose = require("mongoose");

const notes = mongoose.model(
  "notes",
  new mongoose.Schema({
    title: String,
    description: String,
    date_add: Date,
    category: String,
    config: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "configs",
    },
  })
);

module.exports = notes;
