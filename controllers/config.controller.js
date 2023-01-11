const db = require("../models");
const User = db.user;
const Configuration = db.config;

module.exports.post = async (req, res) => {
  try {
    User.findById(req.userId).exec((err, user) => {
      if (err) {
        console.log("ERR", err);
        req.status(500).send({ message: err.message });
        return;
      }
      if (user) {
        Configuration.findById(user.configs[0]).exec((err, configuration) => {
          if (err) {
            console.log("ERR", err);
            req.status(500).send({ message: err.message });
            return;
          }
          if (configuration) {
            if (req.body.reminders) {
              configuration.reminders = configuration.reminders.concat(
                req.body.reminders
              );
            }
            if (req.body.notes) {
              configuration.notes = configuration.notes.concat(req.body.notes);
            }
            if (req.body.tasks) {
              configuration.tasks = configuration.tasks.concat(req.body.tasks);
            }
            if (req.body.resources) {
              configuration.resources = configuration.resources.concat(
                req.body.resources
              );
            }
            configuration.save();
            res.status(200).send({ messsage: "Success!", body: configuration });
          }
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }
};

module.exports.put = async (req, res) => {
  try {
    User.findById(req.userId).exec((err, user) => {
      if (err) {
        console.log("ERR", err);
        req.status(500).send({ message: err.message });
        return;
      }
      if (user) {
        Configuration.findById(user.configs[0]).exec((err, configuration) => {
          if (err) {
            console.log("ERR", err);
            req.status(500).send({ message: err.message });
            return;
          }
          if (configuration) {
            //reminders
            if (req.body.reminders) {
              for (let i = 0; i < req.body.reminders.length; i++) {
                for (
                  let i_saved = 0;
                  i_saved < configuration.reminders.length;
                  i_saved++
                ) {
                  if (
                    configuration.reminders[i_saved]._id.toString() ===
                    req.body.reminders[i]._id
                  ) {
                    configuration.reminders[i_saved] = Object.assign(
                      configuration.reminders[i_saved],
                      req.body.reminders[i]
                    );
                  }
                }
              }
            }
            //tasks
            if (req.body.tasks) {
              for (let i = 0; i < req.body.tasks.length; i++) {
                for (
                  let i_saved = 0;
                  i_saved < configuration.tasks.length;
                  i_saved++
                ) {
                  if (
                    configuration.tasks[i_saved]._id.toString() ===
                    req.body.tasks[i]._id
                  ) {
                    configuration.tasks[i_saved] = Object.assign(
                      configuration.tasks[i_saved],
                      req.body.tasks[i]
                    );
                  }
                }
              }
            }
            //notes
            if (req.body.notes) {
              for (let i = 0; i < req.body.notes.length; i++) {
                for (
                  let i_saved = 0;
                  i_saved < configuration.notes.length;
                  i_saved++
                ) {
                  if (
                    configuration.notes[i_saved]._id.toString() ===
                    req.body.notes[i]._id
                  ) {
                    configuration.notes[i_saved] = Object.assign(
                      configuration.notes[i_saved],
                      req.body.notes[i]
                    );
                  }
                }
              }
            }
            //resources
            if (req.body.resources) {
              for (let i = 0; i < req.body.resources.length; i++) {
                for (
                  let i_saved = 0;
                  i_saved < configuration.resources.length;
                  i_saved++
                ) {
                  if (
                    configuration.resources[i_saved]._id.toString() ===
                    req.body.resources[i]._id
                  ) {
                    configuration.resources[i_saved] = Object.assign(
                      configuration.resources[i_saved],
                      req.body.resources[i]
                    );
                  }
                }
              }
            }
            configuration.save();
            res.status(200).send({ messsage: "Success!", body: configuration });
          }
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }
};

//Array.splice(index, 1)
module.exports.delete = async (req, res) => {
  try {
    User.findById(req.userId).exec((err, user) => {
      if (err) {
        console.log("ERR", err);
        req.status(500).send({ message: err.message });
        return;
      }
      if (user) {
        Configuration.findById(user.configs[0]).exec((err, configuration) => {
          if (err) {
            console.log("ERR", err);
            req.status(500).send({ message: err.message });
            return;
          }
          if (configuration) {
            //reminders
            if (req.body.reminders) {
              for (let i = 0; i < req.body.reminders.length; i++) {
                for (
                  let i_saved = 0;
                  i_saved < configuration.reminders.length;
                  i_saved++
                ) {
                  if (
                    configuration.reminders[i_saved]._id.toString() ===
                    req.body.reminders[i]._id
                  ) {
                    configuration.reminders[i_saved] = Object.assign(
                      configuration.reminders[i_saved],
                      req.body.reminders[i]
                    );
                  }
                }
              }
            }
            //tasks
            if (req.body.tasks) {
              for (let i = 0; i < req.body.tasks.length; i++) {
                for (
                  let i_saved = 0;
                  i_saved < configuration.tasks.length;
                  i_saved++
                ) {
                  if (
                    configuration.tasks[i_saved]._id.toString() ===
                    req.body.tasks[i]._id
                  ) {
                    configuration.tasks[i_saved] = Object.assign(
                      configuration.tasks[i_saved],
                      req.body.tasks[i]
                    );
                  }
                }
              }
            }
            //notes
            if (req.body.notes) {
              for (let i = 0; i < req.body.notes.length; i++) {
                for (
                  let i_saved = 0;
                  i_saved < configuration.notes.length;
                  i_saved++
                ) {
                  if (
                    configuration.notes[i_saved]._id.toString() ===
                    req.body.notes[i]._id
                  ) {
                    configuration.notes[i_saved] = Object.assign(
                      configuration.notes[i_saved],
                      req.body.notes[i]
                    );
                  }
                }
              }
            }
            //resources
            if (req.body.resources) {
              for (let i = 0; i < req.body.resources.length; i++) {
                for (
                  let i_saved = 0;
                  i_saved < configuration.resources.length;
                  i_saved++
                ) {
                  if (
                    configuration.resources[i_saved]._id.toString() ===
                    req.body.resources[i]._id
                  ) {
                    configuration.resources[i_saved] = Object.assign(
                      configuration.resources[i_saved],
                      req.body.resources[i]
                    );
                  }
                }
              }
            }
            configuration.save();
            res.status(200).send({ messsage: "Success!", body: configuration });
          }
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }
};
