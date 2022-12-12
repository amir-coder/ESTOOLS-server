const mongoose = require("mongoose");

const Reminders = mongoose.model(
  "Tasks",
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

    Config: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Config",
    },
  })
);

module.exports = Tasks;
