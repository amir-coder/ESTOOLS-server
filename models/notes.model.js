const mongoose = require("mongoose");

const notes = mongoose.model(
  "notes",
  new mongoose.Schema({
    title: String,
    description: String,
    Category: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories_notes"
      },
    Config: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Config"
      }
  })
);

module.exports = notes;