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
route.put("/api/groups/:id", contoller.groups.EditGroup);
route.delete("/api/groups/:id", contoller.groups.RemoveGroup);

route.post("/upload", contoller.documents.create);
route.post("/addDocuments", contoller.documents.AddDocuments);
route.get("/api/documents", contoller.documents.getAllDocuments);
route.delete("/api/documents/:id", contoller.documents.RemoveDocument);

module.exports = route;
