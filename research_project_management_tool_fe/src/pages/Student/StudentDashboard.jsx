import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import MainContent from "./TravellerDashboard/MainContent"
//import "./TravellerDashboard/dashboard.css"

import styled from "styled-components";



class StudentDashboard extends Component {
  state = {
    reservedRooms: [],
    availableRooms: [],
  };

  async componentDidMount() {

    // const response = await fetch("http://localhost:8083/reservedRooms", {
    //   method: "GET",
    // });

    // const data = await response.json();


    // const response2 = await fetch("http://localhost:8083/rooms", {
    //   method: "GET",
    // });

    // const data2 = await response2.json();
    // const availableRooms = data2.filter(d => d.status === "available")
    
    // this.setState({reservedRooms: data, availableRooms: availableRooms});
    // console.log(data);
    
  }


  logout(){
    localStorage.removeItem('user_full_name');
    localStorage.removeItem('user_email');
    localStorage.removeItem('is_login');
    window.location.reload();
  }

  render() {
    return (
      <Container>
      <MainContent NumOfReserved={this.state.reservedRooms.length} NumOfAvailable={this.state.availableRooms.length}
      reservedRooms={this.state.reservedRooms}
      />
    </Container>
    );
  }
};


const Container = styled.div`
  display: flex;
  height: 97vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default StudentDashboard;
