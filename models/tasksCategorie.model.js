const mongoose = require("mongoose");

const TasksCategorie = mongoose.model(
  "TasksCategorie",
  new mongoose.Schema({
    title: String,
    progress: Number,
    Config: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Config",
    },
  })
);

module.exports = Categories_tasks;
