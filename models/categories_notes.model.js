const mongoose = require("mongoose");

const Categories_notes = mongoose.model(
  "Categories_tasks",
  new mongoose.Schema({
    title: String,
    Config: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Config"
      }
  })
);

module.exports = Categories_notes;