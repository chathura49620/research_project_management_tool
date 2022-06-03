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
import RegisterStudent from "./components/admin/forms/registerStudent";

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
      } else {
      }
    } else {
      return <LoginUser />;
    }
  }
}

export default Dashboard;
