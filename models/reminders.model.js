const mongoose = require("mongoose");

const Reminders = mongoose.model(
  "reminders",
  new mongoose.Schema({
    dates: [{ type: Date }],
    time: String,
    repeat: Number,
    daily: Boolean,
    weekly: Boolean,
    alarm: Boolean,
    notification: Boolean,
    config: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "configs",
    },
  })
);

module.exports = Reminders;
