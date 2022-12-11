const mongoose = require("mongoose");

const Reminders = mongoose.model(
  "Tasks",
  new mongoose.Schema({
    content: String,
    done: boolean,
    duration: int,
    duration_recorded: int,
    date_ajout: date,
    pregress: Number,
    Config: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Config"
        }
    ],
    Category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories"
      }
    ]
  })
);

module.exports = Tasks;