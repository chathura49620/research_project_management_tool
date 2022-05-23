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

//Supervisor Topic APIs
route.post("/api/topic-details/", contoller.topicDetails.create);
route.get("/api/topic-details/", contoller.topicDetails.find);
route.put("/api/topic-details/", contoller.topicDetails.update);
route.delete("/api/topic-details/", contoller.topicDetails.delete);

//Marking Rublic Topic APIs
route.get("/api/marking-rubrics", contoller.markingrubricsDetails.find);
// route.put("/api/topic-details/", contoller.topicDetails.update);
// route.delete("/api/topic-details/", contoller.topicDetails.delete);

module.exports = route;
