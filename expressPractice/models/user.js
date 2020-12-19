const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(require.main.filename), 
    'data', 
    'users.json'
);

const getUsersFromFile = (cb) => {
    return fs.readFile(p, (err, data) => {
        if (err) return cb([]);
        return cb(JSON.parse(data))
    });
}

module.exports = class User {
    constructor(email, user, name, age) {
        this.username = user;
        this.name = name;
        this.age = age;
        this.email = email;
    }

    save() {
        getUsersFromFile(users => {
            users.push(this);
            return fs.writeFile(p, JSON.stringify(users), (err) => {
                if (err) console.log(err);
            });
        });
    };

    static fetchAll(cb) {
        getUsersFromFile(cb);
    }

    static deleteUser()
}