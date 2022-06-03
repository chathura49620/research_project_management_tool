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


//Marking Rublic Topic APIs
route.get("/api/marking-rubrics", contoller.markingrubricsDetails.find);
// route.put("/api/topic-details/", contoller.topicDetails.update);
// route.delete("/api/topic-details/", contoller.topicDetails.delete);


//Supervisor Topic APIs
route.post("/api/topic-details/", contoller.topicDetails.create);
route.get("/api/topic-details/", contoller.topicDetails.find);
route.put("/api/topic-details/", contoller.topicDetails.update);
//route.delete("/api/topic-details/", contoller.topicDetails.delete);


//Student Group Registration APIs
route.post("/api/stuGroupDet-details/", contoller.stuGroupDetails.create);
route.get("/api/stuGroupDet-details/", contoller.stuGroupDetails.find);
route.post("/api/stuTopicRegDet-details/", contoller.studentTopicRegistrationDetails.create);
route.get("/api/stuTopicRegDet-details/", contoller.studentTopicRegistrationDetails.find);

//Superviser/Cosuperviser Email APIs
route.post("/api/supervisorEmail-details/", contoller.superviserEmailDet.create);

//Supervisor Topic APIs
route.put("/api/topic-details-update/", contoller.topicApproveAndReject.update);

//Evaluvation Panel Member Profile Registration APIs
route.post("/api/evalPanelMember-details/", contoller.EvaluvationPanelMemberProfileDetailschema.create);
route.get("/api/evalPanelMember-details/", contoller.EvaluvationPanelMemberProfileDetailschema.find);
route.put("/api/evalPanelMember-details/", contoller.EvaluvationPanelMemberProfileDetailschema.update);
route.delete("/api/evalPanelMember-details/", contoller.EvaluvationPanelMemberProfileDetailschema.delete);

//Supervisor Profile Registration APIs
route.post("/api/supervisorProf-details/", contoller.SupervisorProfileDetschema.create);
route.get("/api/supervisorProf-details/", contoller.SupervisorProfileDetschema.find);
route.put("/api/supervisorProf-details/", contoller.SupervisorProfileDetschema.update);
route.delete("/api/supervisorProf-details/", contoller.SupervisorProfileDetschema.delete);

//Student Profile Registration APIs
route.post("/api/studentrof-details/", contoller.StuProfileDetailschema.create);
route.get("/api/studentrof-details/", contoller.StuProfileDetailschema.find);
route.put("/api/studentrof-details/", contoller.StuProfileDetailschema.update);
route.delete("/api/studentrof-details/", contoller.StuProfileDetailschema.delete);



module.exports = route;
