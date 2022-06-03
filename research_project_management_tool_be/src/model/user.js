/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path');

const p = path.join(rootDir, 'data', 'users.json');

const getUserFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    return cb(JSON.parse(fileContent));
  });
};

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  save() {
    getUserFile((users) => {
      const userData = users;
      if (this.id) {
        const index = userData.findIndex((user) => user.id === this.id);
        let user = userData[index];
        user = this;
        userData[index] = user;
      } else {
        this.id = Math.random().toString();
        userData.push(this);
      }
      fs.writeFile(p, JSON.stringify(userData), (err) => {
        console.log(err);
      });
    });
  }

  static getById(id, cb) {
    this.getuserFile((users) => {
      const user = users.find((obj) => obj.id === id);
      cb(user);
    });
  }

  static getAll(cb) {
    this.getuserFile(cb);
  }

  static delete(id) {
    this.getuserFile((users) => {
      const index = users.findIndex((user) => user.id === id);
      users.splice(index, 1);
      fs.writeFile(p, JSON.stringify(users), (err) => {
        if (!err) {
          return true;
        }
        console.log(err);
        return false;
      });
    });
  }
}

module.exports = User;
