const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/user.routes");
const authRoute = require("./routes/auth.routes");
const app = express();
const db = require("./models");
const Role = db.role;

//config
const dbConfig = require("./config/db.config");
const apiConfig = require("./config/api.config");

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoute);
app.use("/auth", authRoute);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to ESTOOLS application." });
});

// set port, listen for requests
const APP_PORT = apiConfig.PORT || 8085;
const APP_HOST = apiConfig.HOST || "localhost";
app.listen(APP_PORT, () => {
  console.log(`Server is running on ${APP_HOST}:${APP_PORT}.`);
});

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection established with db");
    initiale();
  })
  .catch((error) => {
    console.log("ERROR: cannot connect to db: ", error);
    process.exit();
  });

const initiale = () => {
  Role.estimatedDocumentCount((error, count) => {
    if (!error && count === 0) {
      // inserting roles
      new Role({
        name: "student",
      }).save((error) => {
        if (error) {
          console.log("error", error);
        }

        console.log("added student role.");
      });

      new Role({
        name: "moderator",
      }).save((error) => {
        if (error) {
          console.log("error", error);
        }

        console.log("added moderator role.");
      });

      new Role({
        name: "admin",
      }).save((error) => {
        if (error) {
          console.log("error", error);
        }

        console.log("added admin role.");
      });
    }
  });
};
