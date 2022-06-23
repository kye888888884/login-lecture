"use strict";

// Module
const express = require("express");
const app = express();

// Routing
const home = require("./src/routes/home");

// App settings
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use("/", home); // use -> method to regist the middle ware

module.exports = app;