const mongoose = require("mongoose");

const Config = mongoose.model(
  "Config",
  new mongoose.Schema({
    titre: String,
    //TODO: create config realtions after creating the models
  })
);

module.exports = Config;
