const mongoose = require("mongoose");

const student = mongoose.model(
  "Student",
  new mongoose.Schema({
    config: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Config",
      },
    ],
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
  })
);

module.exports = student;
