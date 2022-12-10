const mongoose = require("mongoose");

const Reminders = mongoose.model(
  "Reminders",
  new mongoose.Schema({
    dates: date,
    time: String,
    repeat : int,
    daily: boolean,
    weekly: boolean,
    alarm: boolean,
    notification: boolean,
    Config: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Config"
        }
    ]
  })
);

module.exports = Reminders;