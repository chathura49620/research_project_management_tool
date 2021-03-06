exports.users = require("./user.controller");

exports.topicDetails = require("./topicDetails.controller");
exports.markingrubricsDetails = require("./marking-rubrics.controller");
exports.groups = require("./group.controller");
exports.documents = require("./document.controller");

//student
exports.stuGroupDetails = require("./studentGroupDetails.controller");
exports.studentTopicRegistrationDetails = require("./topics.controller");
exports.superviserEmailDet = require("./supervisorEmailDetails.contoller");
exports.messageDetails = require("./messages.controller");


//eva panel
exports.topicApproveAndReject = require("./topicApprovAndReject.controller");

//profile management controller
exports.EvaluvationPanelMemberProfileDetailschema = require("./evaluvationPanelMemberProfile.contoller");
exports.SupervisorProfileDetschema = require("./supervisorProfileDetails.controller");
exports.StuProfileDetailschema = require("./studentProfileDetails.controller");
