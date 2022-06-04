import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import MainContent from "./AdminDashboard/MainContent";
//import "./TravellerDashboard/dashboard.css"
import image1 from "./utils/on-off-button.png";

import styled from "styled-components";

class AdminDashboard extends Component {
  state = {
    members: [],
    documents: [],
    groups: [],
    adminCount: 0,
    panelCount: 0,
    supervisorCount: 0,
    studentCount: 0,
  };

  async componentDidMount() {
    const response = await fetch("http://localhost:5000/api/users", {
      method: "GET",
    });
    const data = await response.json();
    const response2 = await fetch("http://localhost:5000/api/documents/", {
      method: "GET",
    });

    const data2 = await response2.json();

    const response3 = await fetch("http://localhost:5000/api/groups/", {
      method: "GET",
    });

    const data3 = await response3.json();

    const adminCount = data.filter((d) => d.type == "Admin").length;
    const panelCount = data.filter((d) => d.type == "Panel Member").length;
    const supervisorCount = data.filter((d) => d.type == "Supervisor").length;
    const studentCount = data.filter((d) => d.type == "Student").length;

    this.setState({
      members: data,
      documents: data2,
      adminCount,
      panelCount,
      supervisorCount,
      studentCount,
      groups: data3,
    });
    console.log(data, data2);
  }

  logout() {
    localStorage.removeItem("user_full_name");
    localStorage.removeItem("user_email");
    localStorage.removeItem("is_login");
    window.location.reload();
  }

  render() {
    return (
      <Container>
        <MainContent
          NumOfReserved={this.state.members.length}
          NumOfAvailable={this.state.documents.length}
          reservedRooms={this.state.members}
          adminCount={this.state.adminCount}
          panelCount={this.state.panelCount}
          supervisorCount={this.state.supervisorCount}
          studentCount={this.state.studentCount}
          numOfGroups={this.state.groups.length}
        />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  height: 97vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default AdminDashboard;
