const mongoose = require("mongoose");

const Reminders = mongoose.model(
  "tasks",
  new mongoose.Schema({
    content: String,
    done: boolean,
    duration: int,
    duration_recorded: int,
    date_ajout: date,
    repeat: int,
    daily: boolean,
    weekly: boolean,
    alarm: boolean,
    notification: boolean,
    progress: Number,
    category: String,

    config: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "configs",
    },
  })
);

module.exports = Tasks;
