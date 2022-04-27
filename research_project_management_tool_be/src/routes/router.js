const express = require("express");
const route = express.Router();

const contoller = require("../controller/controller");

route.get("/api/users", contoller.users.create);

module.exports = route;
