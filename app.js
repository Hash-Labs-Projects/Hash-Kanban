const express = require("express");
const app = express();

// @dev Node.js body parsing middleware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false })); // @dev parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // @dev parse application/json

// @dev HTTP request logger middleware
const morgan = require("morgan");
app.use(morgan("dev")); // @dev response status for development use

// @dev Connect/Express middleware that can be used to enable CORS with various options.
const cors = require("cors");
app.use(cors());

// @dev mongodb server configuration
const mongoose = require("mongoose");
const dbUri = process.env.DB_URI;

mongoose.connect(
  dbUri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    // @dev inline error handling rather than .then().catch()
    if (err) return console.log(err);
    console.log(`Database Running => Hash Kanban...`);
  }
  );

module.exports = app;