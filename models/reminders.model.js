const mongoose = require("mongoose");

const Reminders = mongoose.model(
  "Reminders",
  new mongoose.Schema({
    dates: [Date],
    time: String,
    repeat : Number,
    daily: Boolean,
    weekly: Boolean,
    alarm: Boolean,
    notification: Boolean,
    Config: 
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Config"
        }
  })
);

module.exports = Reminders;