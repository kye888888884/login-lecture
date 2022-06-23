"use strict";

// Module
const express = require("express");
const app = express();

// Routing
const home = require("./routes/home");

// App settings
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use -> method to regist the middle ware

module.exports = app;