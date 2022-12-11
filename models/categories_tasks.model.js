const mongoose = require("mongoose");

const Categories_tasks = mongoose.model(
  "Categories_tasks",
  new mongoose.Schema({
    title: String,
    progress: Number,
    Config: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Config"
      }
  })
);

module.exports = Categories_tasks;