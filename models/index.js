const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.folder = require("./folder.model");
db.reminders = require("./reminders.model");
db.resources = require("./resources.model");
db.tasks = require("./tasks.model");
db.config = require("./config.model");
db.categories_tasks = require("./categories_tasks.model");
db.categories_notes = require("./categories_notes.model");
db.notes = require("./notes.model");
db.ROLES = ["student", "moderator", "admin"];

module.exports = db;
