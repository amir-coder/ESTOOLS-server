const mongoose = require("mongoose");

const Config = mongoose.model(
  "configs",
  new mongoose.Schema({
    title: { type: String, default: "Config0" },
    notes: [
      {
        title: String,
        description: String,
        add_date: Date,
        category: String,
      },
    ],
    reminders: [
      {
        dates: [{ type: Date }],
        time: String,
        repeat: Number,
        daily: Boolean,
        weekly: Boolean,
        alarm: Boolean,
        notification: Boolean,
      },
    ],
    tasks: [
      {
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
      },
    ],
    resources: [
      {
        // categories
        categorie: String,
        color: String,
        priority: Number,
        content: [
          //list of resources in categorie
          {
            title: String,
            url: String,
            color: String,
          },
        ],
      },
    ],
  })
);

module.exports = Config;
