const mongoose = require("mongoose");

const Categories = mongoose.model(
  "Categories",
  new mongoose.Schema({
    title: String,
    progression: Number,
    Config: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Config"
      }
    ]

  })
);

module.exports = Categories;