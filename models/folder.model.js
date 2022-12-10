const mongoose = require("mongoose");

const Folder = mongoose.model(
  "Folder",
  new mongoose.Schema({
    title: String,
    color: String,
    priority: int,
    parent: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Folder"
      }
    ], 
    Config: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Config"
        }
    ]
  })
);

module.exports = Folder;