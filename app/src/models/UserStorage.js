"use strict";

class UserStorage {
    static #users = {
        id: ["dengol4477", "안뇽", "hi"  ],
        pw: ["1234",       "4321", "369!"],
        name: ["뎅골",     "안녕",  "과장님"]
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser
        }, {});
        return userInfo;
    }
}

module.exports = UserStorage;