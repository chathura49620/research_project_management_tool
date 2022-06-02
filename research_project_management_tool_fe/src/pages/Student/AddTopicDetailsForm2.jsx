import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, FormGroup } from "react-bootstrap";
import swal from "sweetalert";
import axios from "axios";
import "./styles.css";


class AddTopicDetailsForm2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snackbaropen: false,
      snackbarmsg: "",     
      groupIDError: "",
      researchProblemError: "",
      researchSolutionError: "",
      technologyError: "",
     
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 

  handleSubmit(event, props) {
    console.log(event.target.groupID.value);
    console.log(event);
    const isValid = this.validate(event);
    event.preventDefault();

    if (isValid) {
      fetch("http://localhost:5000/api/topic-details", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          username: "thirnaya",
        },
        body: JSON.stringify({
            groupID: event.target.groupID.value,
            researchProblem: event.target.researchProblem.value,
            researchSolution: event.target.researchSolution.value,
            technology: event.target.technology.value,
        
     
        }),
      })
        .then((res) => res.json())
        .then(
          (result) => {
            swal({
              title: "Topic Details Added Succesfully",
              icon: "success",
              button: "Done",
            });
            setTimeout(
              function () {
                window.location.reload();
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
    let groupIDError = "";
    let researchProblemError = "";
    let researchSolutionError = "";
    let technologyError = "";

    if (!event.target.groupID.value) {
        groupIDError = "Group ID Field Can Not Be Blank";
    }
    if (!event.target.researchProblem.value) {
        researchProblemError = "Research Problem Field Can Not Be Blank";
    }
    if (!event.target.researchSolution.value) {
        researchSolutionError = "Research Solution Field Can Not Be Blank";
    }
    if (!event.target.technology.value) {
        technologyError = "Technology Field Can Not Be Blank";
    }

    if (groupIDError || researchProblemError || researchSolutionError || technologyError ) {
      this.setState({
        groupIDError: groupIDError,
        researchProblemError: researchProblemError,
        researchSolutionError: researchSolutionError,
        technologyError: technologyError,
     
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
          <img src={addorder} alt="leavepic" />
        </div>

        <div className="row">
          <div className="col-3"></div>

          <div className="col">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Group controlId="groupID">
                  <Form.Label style={{ fontWeight: "bold" }}>
                  Group ID
                  </Form.Label>
                  <Form.Control
                    style={{ border: "1px solid #050139" }}
                    type="text"
                    name="groupID"
                    placeholder="Group ID"
                  />
                  <div style={{ background: "#f8d7da" }}>
                    {this.state.groupIDError}
                  </div>
                </Form.Group>
                <Form.Group controlId="researchProblem">
                  <Form.Label style={{ fontWeight: "bold" }}>
                  Research Problem
                  </Form.Label>
                  <Form.Control
                    style={{ border: "1px solid #050139" }}
                    type="text"
                    name=" researchProblem "
                    placeholder=" Research Problem"
                  />
                  <div style={{ background: "#f8d7da" }}>
                    {this.state.researchProblemError}
                  </div>
                </Form.Group>
              </Form.Group>
              <Form.Group controlId="researchSolution">
                <Form.Label style={{ fontWeight: "bold" }}>
                Research Solution
                </Form.Label>
                <Form.Control
                  style={{ border: "1px solid #050139" }}
                  type="text"
                  name="researchSolution"
                  placeholder=" Research Solution"
                />
                <div style={{ background: "#f8d7da" }}>
                  {this.state.researchSolutionError}
                </div>
              </Form.Group>                         
              <Form.Group controlId="technology">
                <Form.Label style={{ fontWeight: "bold" }}>
                Technology
                </Form.Label>
                <Form.Control
                  style={{ border: "1px solid #050139" }}
                  type="text"
                  name="technology"
                  placeholder="Technology"
                />
                <div style={{ background: "#f8d7da" }}>
                  {this.state.technologyError}
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
              </Form.Group>
            </Form>
          </div>

          <div className="col-1"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddTopicDetailsForm2;