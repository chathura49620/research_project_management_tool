import React, { Component } from "react";
import { Route } from "react-router-dom";
import RegisterUser from "./components/admin/forms/registerUser";
import LoginUser from "./components/admin/forms/loginUser";
import Sidebar from "./components/admin/sideNav/Sidebar";
import ViewMember from "./pages/viewMembers";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ViewResearchGroup from "./pages/Admin/ViewResearchGroups";
import AddDocuments from "./components/admin/forms/addDocuments";
import ViewUploadedDocuments from "./pages/Admin/viewUploadedDocuments";

import EvaPanelDashboard from "./pages/EvaPanel/EvaPanelDashboard";
import EvaPanelSideNav from "./components/EvaPanel/sideNav/Sidebar";
import SupervisorSideNav from "./components/Supervisor/sideNav/Sidebar";
import MarkingRubricPage from "./components/EvaPanel/marking-files-upload-component";
import TopicEval from "./pages/EvaPanel/TopicEval";

//Student
import StudentDashboard from './pages/Student/StudentDashboard';
import AddTopicDetailsForm1 from './pages/Student/AddTopicDetailsForm1';
import AddTopicDetailsForm2 from './pages/Student/AddTopicDetailsForm2';
import AddFirstStudentDetails from './pages/Student/AddFirstStudentDetails';
import AddSecondStudentDetails from './pages/Student/AddSecondStudentDetails';
import AddThirdStudentDetails from './pages/Student/AddThirdStudentDetails';
import AddFourthStudentDetails from './pages/Student/AddFourthStudentDetails';
import SupervisorEmail from './pages/Student/SupervisorEmail';
import StudentSideNav from "./components/Student/sideNav/Sidebar"; 
import StudentProfileDetails from "./pages/Student/StudentProfileDetails"
import ResearchTopics from "./pages/Supervisor/ResearchTopics";
import Messages from "./pages/Supervisor/Messages";
import StudentLists from "./pages/Supervisor/Messages";
import SupervisorDashboard from "./pages/Supervisor/SupervisorDashboard";
import RegisterStudent  from "./components/admin/forms/registerStudent"

class Dashboard extends Component {
  state = {};
  render() {
    console.log(localStorage.getItem("logged"));

    if (localStorage.getItem("logged") === "ok") {
      if (localStorage.getItem("type") === "Admin") {
        return (
          <div>
            <Sidebar />
            <Route path="/" exact component={AdminDashboard}></Route>
            <Route path="/registerMember" component={RegisterUser} />
            <Route path="/viewMembers" component={ViewMember} />
            <Route path="/groups" component={ViewResearchGroup} />
            <Route path="/documents" component={AddDocuments} />
            <Route path="/uploaded" component={ViewUploadedDocuments} />
            <Route path="/Addstudent" component={RegisterStudent} />
          </div>
        );
      } else if (localStorage.getItem("type") === "Panel Member") {
        return (
          <div>
            <EvaPanelSideNav />
            <Route path="/" exact component={StudentDashboard}></Route>
            <Route path="/topic-evaluation" exact component={TopicEval}></Route>
            <Route path="/marking-rubrics" exact component={MarkingRubricPage}></Route>
            
          </div>
        );
      }
      else if (localStorage.getItem("type") === "Student") {
        return (
          <div>
            <StudentSideNav />
            <Route path="/" exact component={StudentDashboard}></Route>
            <Route path="/topic-registration" exact component={AddTopicDetailsForm1}></Route>
            <Route path="/document-substu" exact component={AddDocuments}></Route>
            <Route path="/stuGroup-registration" exact component={AddFirstStudentDetails}></Route>
            <Route path="/stuGroup-registration-2" exact component={AddSecondStudentDetails}></Route>
            <Route path="/stuGroup-registration-3" exact component={AddThirdStudentDetails}></Route>
            <Route path="/stuGroup-registration-4" exact component={AddFourthStudentDetails}></Route>
            <Route path="/topic-registration-2" exact component={AddTopicDetailsForm2}></Route>
            <Route path="/email-sending" exact component={SupervisorEmail}></Route>
            <Route path="/student-profile-details" exact component={StudentProfileDetails}></Route>
            <Route path="/" exact component={EvaPanelDashboard}></Route>
            <Route
              path="/marking-rubrics"
              exact
              component={MarkingRubricPage}
            ></Route>
          </div>
        );
      } else if (localStorage.getItem("type") === "Superviosor") {
        return (
          <div>
            <SupervisorSideNav />
            <Route path="/" exact component={SupervisorDashboard}></Route>
            <Route
              path="/research-topics"
              exact
              component={ResearchTopics}
            ></Route>
            <Route path="/messages" exact component={Messages}></Route>
            <Route path="/student-lists" exact component={StudentLists}></Route>
          </div>
        );
      }
       else {
      }
    } else {
      return (
        <>
        <Route path="/" exact component={LoginUser}></Route>
        <Route path="/registerStudent" exact component={RegisterStudent}></Route>

        </>
        

      )
    }
  }
}

export default Dashboard;