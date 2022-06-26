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
}

module.exports = UserStorage;