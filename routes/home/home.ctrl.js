"use strict";

const home = (req, res) => {
    // Tasks
    res.render("home/index");
};

const login = (req, res) => {
    // Tasks
    res.render("home/login");
};

// {key} ==> {key: key} (automatic)
module.exports = {
    home,
    login,
};