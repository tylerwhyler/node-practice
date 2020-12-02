const users = [];

module.exports = class User {
    constructor(user) {
        this.username = user;
    }

    save() {
        users.push(this);
    };

    static fetchAll() {
        return users;
    }
}