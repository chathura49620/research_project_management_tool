const express = require("express");
const route = express.Router();

const contoller = require("../controller/controller");

route.post("/api/users", contoller.users.create);
route.get("/api/users/:email/:password", contoller.users.getLogins);
route.get("/api/users", contoller.users.getAllMembers);
route.delete("/api/users/:id", contoller.users.RemoveUser);
route.put("/api/users/:id", contoller.users.EditUser);

route.post("/api/groups", contoller.groups.create);
route.get("/api/groups", contoller.groups.getAllGroups);

route.post("/upload", contoller.documents.create);

module.exports = route;
