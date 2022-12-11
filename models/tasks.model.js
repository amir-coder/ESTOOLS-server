const mongoose = require("mongoose");

const Reminders = mongoose.model(
  "Tasks",
  new mongoose.Schema({
    content: String,
    done: boolean,
    duration: int,
    duration_recorded: int,
    date_ajout: date,
    Config: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Config"
        }
    ],
    Category: [
      
    ]
  })
);

module.exports = Tasks;