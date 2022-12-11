const mongoose = require("mongoose");

const Tasks = mongoose.model(
  "Tasks",
  new mongoose.Schema({
    content: String,
    done: Boolean,
    duration: Number,
    duration_recorded: Number,
    date_add: Date,
    repeat : Boolean,
    daily: Boolean,
    weekly: Boolean,
    alarm: Boolean,
    notification: Boolean,
    progress: Number,
    Config: 
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Config"
        }
    ,
    Category: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories_tasks"
      }
  })
);

module.exports = Tasks;