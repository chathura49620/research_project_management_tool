import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, FormGroup } from "react-bootstrap";
import swal from "sweetalert";
import axios from "axios";
import "./styles.css";


class SupervisorEmail extends Component {
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
    //console.log(event.target.topicName.value);
    // console.log(event.target.topicName.value);
    console.log(event);
    const isValid = this.validate(event);
    event.preventDefault();

    // if (isValid) {
      fetch("http://localhost:5000/api/supervisorEmail-details/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          username: "thirnaya",
        },
        body: JSON.stringify({
            senderEmail: event.target.senderEmail.value,
            subject: event.target.subject.value,
            from: event.target.from.value,
            message: event.target.message.value,
        
     
        }),
      })
        .then((res) => res.json())
        .then(
          (result) => {
            swal({
              title: "Email Sent Succesfully",
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
    // }
  }

  validate(event) {
    let topicNameError = "";
    let abstractError = "";
    let topicDescriptionError = "";
  

    if (!event.target.senderEmail.value) {
        topicNameError = "Topic Field Can Not Be Blank";
    }
    if (!event.target.subject.value) {
        abstractError = "Abstract Field Can Not Be Blank";
    }
    if (!event.target.message.value) {
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
        <h1 className="heading">Supervisor Email</h1>

        <div className="center">
          {/* <img src={addorder} alt="leavepic" /> */}
        </div>

        <div className="row">
          <div className="col-3"></div>

          <div className="col">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Group controlId="senderEmail">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Sender
                  </Form.Label>
                  <Form.Control
                    style={{ border: "1px solid #050139" }}
                    type="text"
                    name="senderEmail"
                    placeholder=" Sender"
                  />
                  <div style={{ background: "#f8d7da" }}>
                    {this.state.topicNameError}
                  </div>
                </Form.Group>
                <Form.Group controlId="from">
                  <Form.Label style={{ fontWeight: "bold" }}>
                  From
                  </Form.Label>
                  <Form.Control
                    style={{ border: "1px solid #050139" }}
                    type="text"
                    name="from"
                    placeholder=" From"
                  />
                  <div style={{ background: "#f8d7da" }}>
                    {this.state.abstractError}
                  </div>
                </Form.Group>
                <Form.Group controlId="subject">
                  <Form.Label style={{ fontWeight: "bold" }}>
                  Subject
                  </Form.Label>
                  <Form.Control
                    style={{ border: "1px solid #050139" }}
                    type="text"
                    name="subject"
                    placeholder=" Subject"
                  />
                  <div style={{ background: "#f8d7da" }}>
                    {this.state.abstractError}
                  </div>
                </Form.Group>
              </Form.Group>
              <Form.Group controlId="message">
                <Form.Label style={{ fontWeight: "bold" }}>
                Message
                </Form.Label>
                <textarea class="form-control" id="message"  name="message" rows="6"   placeholder="Message" style={{ border: "1px solid #050139" }}></textarea>
                
                <div style={{ background: "#f8d7da" }}>
                  {this.state.topicDescriptionError}
                </div>
              </Form.Group>                         
              
              <Form.Group>
                <Button
                  className="my-1"
                  style={{ backgroundColor: "#478778",  border: "2px solid #023020",color: "Black" }} 
                  type="submit"
                >
                  Submit
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

export default SupervisorEmail;