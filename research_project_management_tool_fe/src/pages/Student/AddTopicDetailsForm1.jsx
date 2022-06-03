import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, FormGroup } from "react-bootstrap";
import swal from "sweetalert";
import axios from "axios";
import "./styles.css";
//import addorder from "../../pages/Student/assets/addorder.JPG";
import TextArea from './../../components/admin/reusables/textarea';

class AddTopicDetailsForm1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snackbaropen: false,
      snackbarmsg: "",     
      topicNameError: "",
      abstractError: "",
      topicDescriptionError: "",
     
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 

  handleSubmit(event, props) {
    console.log(event.target.topicName.value);
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
            topicName: event.target.topicName.value,
            abstract: event.target.abstract.value,
            topicDescription: event.target.topicDescription.value,
        
     
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
    let topicNameError = "";
    let abstractError = "";
    let topicDescriptionError = "";
  

    if (!event.target.topicName.value) {
        topicNameError = "Topic Field Can Not Be Blank";
    }
    if (!event.target.abstract.value) {
        abstractError = "Abstract Field Can Not Be Blank";
    }
    if (!event.target.topicDescription.value) {
        topicDescriptionError = "Email Field Can Not Be Blank";
    }
   

    if (topicNameError || abstractError || topicDescriptionError ) {
      this.setState({
        topicNameError: topicNameError,
        abstractError: abstractError,
        topicDescriptionError: topicDescriptionError,
     
      });
      return false;
    }

    return true;
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="heading">Add Topic Details</h1>

        {/* <div className="center">
          <img src={addorder} alt="leavepic" />
        </div> */}

        <div className="row">
          <div className="col-3"></div>

          <div className="col">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Group controlId="topicName">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Topic
                  </Form.Label>
                  <Form.Control
                    style={{ border: "1px solid #050139" }}
                    type="text"
                    name="topicName"
                    placeholder=" Topic Name"
                  />
                  <div style={{ background: "#f8d7da" }}>
                    {this.state.topicNameError}
                  </div>
                </Form.Group>
                <Form.Group controlId="abstract">
                  <Form.Label style={{ fontWeight: "bold" } }>               
                 Abstract               
                  </Form.Label>
                  <Form.Control
                    style={{ border: "1px solid #050139" }}
                    type="text"
                    name="abstract"
                    placeholder=" Abstract"
                  />
                  <div style={{ background: "#f8d7da" }}>
                    {this.state.abstractError}
                  </div>
                </Form.Group>
              </Form.Group>
              <Form.Group controlId="topicDescription">
                <Form.Label style={{ fontWeight: "bold" }}>
                  Topic Description
                </Form.Label>
                <Form.Control
                  style={{ border: "1px solid #050139" }}
                  type="text"
                  name="topicDescription"
                  placeholder=" Topic Description"
                />
                <div style={{ background: "#f8d7da" }}>
                  {this.state.topicDescriptionError}
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

export default AddTopicDetailsForm1;