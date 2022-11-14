const mongoose = require("mongoose");

const Student = mongoose.model(
  "Student",
  new mongoose.Schema({
    config: [
      {
        type: mongoose.model.Schema.types.ObjectId,
        ref: "Config",
      },
    ],
  })
);

model.exports = Student;
