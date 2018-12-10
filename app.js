const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

//Require Index Route
const indexRoute = require("./api/routes/index");
//Require Artcile Route
const articleRoute = require("./api/routes/article");

//Require DBConnection
const DBConnection = require("./api/config/database");

//Setup Http-Logger Morgan Middleware
app.use(logger('dev'));

//Setup body-parser & cookie-parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api', indexRoute);
app.use('/api', articleRoute);

module.exports = app;