"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
}

const process = {
    login: (req, res) => {
        const id = req.body.id;
        const pw = req.body.pw;

        const users = UserStorage.getUsers("id", "pw", "name");
        
        const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.pw[idx] === pw) {
                response.success = true;
                response.name = users.name[idx];
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "로그인에 실패했습니다.";
        return res.json(response);
    },
}

// {key} ==> {key: key} (automatic)
module.exports = {
    output,
    process,
};