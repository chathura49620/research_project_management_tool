import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, FormGroup } from "react-bootstrap";
import swal from "sweetalert";
import axios from "axios";
import "./styles.css";
//import {save} from "../../pages/Student/assets/save.jpg";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snackbaropen: false,
      snackbarmsg: "",
      messagesError: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event, props) {
    console.log(event.target.studentID.value);
    console.log(event);
    const isValid = this.validate(event);
    event.preventDefault();

    if (isValid) {
      fetch("http://localhost:5000/api/message-details", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          username: "thirnaya",
        },
        body: JSON.stringify({
          title: event.target.title.value,
          messagedesc: event.target.messagedesc.value,
          type: event.target.email.type,
        }),
      })
        .then((res) => res.json())
        .then(
          (result) => {
            window.location.href =
              "http://localhost:3000/stuGroup-registration-2";
          },
          (error) => {
            this.setState({ snackbaropen: true, snackbarmsg: "Failed" });
          }
        );
    }
  }

  validate(event) {
    let messagesError = "";

    if (!event.target.title.value) {
      messagesError = "Message Title Field Can Not Be Blank";
    }

    if (messagesError) {
      this.setState({
        messagesError: messagesError,
      });
      return false;
    }

    return true;
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="heading">Add a Message</h2>

        {/* <div className="center">
          <img src={save} alt="leavepic" />
        </div> */}

        <div className="row">
          <div className="col-3"></div>

          <div className="col">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Group controlId="title">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Message Title
                  </Form.Label>
                  <Form.Control
                    style={{ border: "1px solid #050139" }}
                    type="text"
                    name="title"
                    placeholder=" Your Title"
                  />
                  <div style={{ background: "#f8d7da" }}>
                    {this.state.messagesError}
                  </div>
                </Form.Group>
                <Form.Group controlId="messagedesc">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Message Desc
                  </Form.Label>
                  <Form.Control
                    style={{ border: "1px solid #050139" }}
                    type="text"
                    name="messagedesc"
                    placeholder=" Message Desc"
                  />
                  <div style={{ background: "#f8d7da" }}>
                    {this.state.messagesError}
                  </div>
                </Form.Group>
              </Form.Group>
              <Form.Group controlId="type">
                <Form.Label style={{ fontWeight: "bold" }}>Type</Form.Label>
                <Form.Control
                  style={{ border: "1px solid #050139" }}
                  type="text"
                  name="type"
                  placeholder="What type"
                />
                <div style={{ background: "#f8d7da" }}>
                  {this.state.messagesError}
                </div>
              </Form.Group>

              <Form.Group>
                <Button
                  className="my-1"
                  style={{
                    backgroundColor: "#478778",
                    border: "2px solid #023020",
                    color: "Black",
                  }}
                  type="submit"
                >
                  Post
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

export default Messages;
