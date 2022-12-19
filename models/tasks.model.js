const mongoose = require("mongoose");

const Tasks = mongoose.model(
  "tasks",
  new mongoose.Schema({
    content: String,
    done: Boolean,
    duration: Number,
    duration_recorded: Number,
    date_ajout: Date,
    repeat: Number,
    daily: Boolean,
    weekly: Boolean,
    alarm: Boolean,
    notification: Boolean,
    progress: Number,
    category: String,

    config: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "configs",
    },
  })
);

module.exports = Tasks;
