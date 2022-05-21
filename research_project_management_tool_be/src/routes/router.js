const express = require("express");
const route = express.Router();

const contoller = require("../controller/controller");

route.get("/api/users", contoller.users.create);

//Supervisor Topic APIs
route.post("/api/topic-details/", contoller.topicDetails.create);
route.get("/api/topic-details/", contoller.topicDetails.find);
route.put("/api/topic-details/", contoller.topicDetails.update);
route.delete("/api/topic-details/", contoller.topicDetails.delete);

module.exports = route;
