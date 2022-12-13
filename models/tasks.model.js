const mongoose = require("mongoose");

const Reminders = mongoose.model(
  "tasks",
  new mongoose.Schema({
    content: String,
    done: Boolean,
    duration: int,
    duration_recorded: int,
    date_ajout: date,
    repeat: int,
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
