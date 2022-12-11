const mongoose = require("mongoose");

const Resources = mongoose.model(
  "Resources",
  new mongoose.Schema({ 
    title: String,
    url: String,
    color: String,
    folder:
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Folder"
      }, 
    Config: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Config"
      } 
  })
);

module.exports = Resources;