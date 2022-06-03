import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, FormGroup } from "react-bootstrap";
import swal from "sweetalert";
import axios from "axios";
import "./styles.css";
// import addorder from "../../pages/assets/addorderpic.png";

class AddFourthStudentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snackbaropen: false,
      snackbarmsg: "",     
      studentIdError: "",
      studentNameError: "",
      emailError: "",
      phoneNumberError: "",      
      specializationError: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 

  handleSubmit(event, props) {
    // console.log(event.target.studentID.value);
    // console.log(event);
    const isValid = this.validate(event);
    event.preventDefault();

    if (isValid) {
      fetch("http://localhost:5000/api/stuGroupDet-details", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          username: "thirnaya",
        },
        body: JSON.stringify({
            studentID: event.target.studentID.value,
            studentName: event.target.studentName.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            specilization: event.target.specilization.value,
     
        }),
      })
        // .then((res) => res.json())
        .then(
          (result) => {
            // alert("test");
            swal({
              title: "Student Details Added Succesfully",
              icon: "success",
              button: "Done",
            });
            setTimeout(
              function () {
                window.location.href = 'http://localhost:3000/';
              }.bind(this),
              1500
            );
          },
          (error) => {
            this.setState({ snackbaropen: true, snackbarmsg: "Failed" });
          }
        );
    }
  }

  validate(event) {
    let studentIdError = "";
    let studentNameError = "";
    let emailError = "";
    let phoneNumberError = "";
    let specializationError = "";

    if (!event.target.studentID.value) {
        studentIdError = "Student Id Field Can Not Be Blank";
    }
    if (!event.target.studentName.value) {
        studentNameError = "Student Name Field Can Not Be Blank";
    }
    if (!event.target.email.value) {
        emailError = "Email Field Can Not Be Blank";
    }
    if (!event.target.phone.value) {
        phoneNumberError = "Phone Number Field Can Not Be Blank";
    }if (!event.target.specilization.value) {
        specializationError = "Specialization Field Can Not Be Blank";
    }


    if (studentIdError || studentNameError || emailError || phoneNumberError ||specializationError) {
      this.setState({
        studentIdError: studentIdError,
        studentNameError: studentNameError,
        emailError: emailError,
        phoneNumberError: phoneNumberError,
        specializationError: specializationError,
      });
      return false;
    }

    return true;
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="heading">Add First Student Details</h1>

        <div className="center">
          {/* <img src={addorder} alt="leavepic" /> */}
        </div>

        <div className="row">
          <div className="col-3"></div>

          <div className="col">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Group controlId="studentID">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Student Id
                  </Form.Label>
                  <Form.Control
                    style={{ border: "1px solid #050139" }}
                    type="text"
                    name="studentID"
                    placeholder=" Student Id"
                  />
                  <div style={{ background: "#f8d7da" }}>
                    {this.state.studentIdError}
                  </div>
                </Form.Group>
                <Form.Group controlId="studentName">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Student Name
                  </Form.Label>
                  <Form.Control
                    style={{ border: "1px solid #050139" }}
                    type="text"
                    name="studentName"
                    placeholder=" Student Name"
                  />
                  <div style={{ background: "#f8d7da" }}>
                    {this.state.studentNameError}
                  </div>
                </Form.Group>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Email
                </Form.Label>
                <Form.Control
                  style={{ border: "1px solid #050139" }}
                  type="text"
                  name="email"
                  placeholder="Student Email"
                />
                <div style={{ background: "#f8d7da" }}>
                  {this.state.emailError}
                </div>
              </Form.Group>
              <Form.Group controlId="phone">
                <Form.Label style={{ fontWeight: "bold" }}>Phone Number</Form.Label>
                <Form.Control
                  style={{ border: "1px solid #050139" }}
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                />
                <div style={{ background: "#f8d7da" }}>
                  {this.state.phoneNumberError}
                </div>
              </Form.Group>
              <Form.Group controlId="specilization">
                <Form.Label style={{ fontWeight: "bold" }}>Specialization</Form.Label>
                <Form.Control
                  style={{ border: "1px solid #050139" }}
                  type="text"
                  name="specilization"
                  placeholder="Specialization"
                />
                <div style={{ background: "#f8d7da" }}>
                  {this.state.specializationError}
                </div>
              </Form.Group>              
              
              <Form.Group>
                <Button
                  className="my-1"
                  style={{ backgroundColor: "#7121AD", color: "white" }}
                  type="submit"
                >
                  Next
                </Button>
                {/* <Button
                  className="my-1"
                  style={{ backgroundColor: "#7121AD", color: "white" }}
                  type="submit"
                >
                  Previous
                </Button> */}
              </Form.Group>
            </Form>
          </div>

          <div className="col-1"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddFourthStudentDetails;