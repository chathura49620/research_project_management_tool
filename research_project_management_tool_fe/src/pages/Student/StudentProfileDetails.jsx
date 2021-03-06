import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, FormGroup } from "react-bootstrap";
import swal from "sweetalert";
import axios from "axios";
import "./styles.css";


class StudentProfileDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            snackbaropen: false,
            snackbarmsg: "",
            studentIDError: "",
            studentNameError: "",
            studentEmailError: "",
            phoneError: "",
            genderError: "",
            userData: [],

        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    componentDidMount() {
        axios
            .get("http://localhost:5000/api/studentrof-details?id=6299c23810db10f31dcaf23b")
            .then((result) => {
                const userData = result.data;

                this.setState({ userData: userData });
            })
            .catch((err) => console.log(err.message));

    }

    deleteProfile() {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Recode!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch('http://localhost:5000/api/studentrof-details', {
                        method: 'DELETE',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'username': 'chathura'
                        },
                        body: JSON.stringify({
                            id: '6299c23810db10f31dcaf23b'

                        })
                    }).then(res => res.json())
                        .then((result) => {
                            swal({
                                title: "User Profile Deleted Succesfully",
                                icon: "success",
                                button: "Done",
                            });
                            setTimeout(function () {
                                window.location.href = 'http://localhost:3000/';
                            }.bind(this), 1500);
                        });
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }


    handleSubmit(event, props) {


        event.preventDefault();



        // if (isValid) {
        fetch("http://localhost:5000/api/studentrof-details", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                username: "thirnaya",
            },
            body: JSON.stringify({
                id: '6299c23810db10f31dcaf23b',
                studentID: event.target.studentID.value,
                studentName: event.target.studentName.value,
                email: event.target.email.value,
                phone: event.target.phone.value,
                gender: event.target.gender.value

            }),
        })
            .then((res) => res.json())
            .then(
                (result) => {
                    swal({
                        title: "User updated Succesfully",
                        icon: "success",
                        button: "Done",
                    });
                    setTimeout(
                        function () {
                            // window.location.reload();
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
        let studentIDError = "";
        let studentNameError = "";
        let studentEmailError = "";
        let phoneError = "";
        let genderError = "";

        if (!event.target.studentID.value) {
           studentIDError = "Student ID Field Can Not Be Blank";
        }
        if (!event.target.studentName.value) {
            studentNameError = "Student NAme Field Can Not Be Blank";
        }
        if (!event.target.email.value) {
           studentEmailError = "Email Field Can Not Be Blank";
        }
        if (!event.target.phone.value) {
            phoneError = "Phone Number Field Can Not Be Blank";
        }
        if (!event.target.gender.value) {
            genderError = "Gender Field Can Not Be Blank";
        }

        if (studentIDError || studentNameError || studentEmailError || phoneError ||genderError) {
            this.setState({
                studentIDError: studentIDError,
                studentNameError: studentNameError,
                studentEmailError: studentEmailError,
                phoneError: phoneError,
                genderError:genderError,

            });
            return false;
        }

        return true;
    }

    render() {
        const userData = this.state.userData;
        return (
            <React.Fragment>
                <h1 className="heading">Student Profile Details</h1>

                <div className="center">
                    {/* <img src={addorder} alt="leavepic" /> */}
                </div>

                <div className="row">
                    <div className="col-3"></div>

                    <div className="col">
                        <Form onSubmit={this.handleSubmit}>

                            {/* {this.state.userData.map(i => ( */}

                            {/* <div key={i._id}> */}
                            <Form.Group controlId="studentID">
                                <Form.Label style={{ fontWeight: "bold" }}>
                                    Student ID
                                </Form.Label>
                                <Form.Control
                                    style={{ border: "1px solid #050139" }}
                                    type="text"
                                    name="studentID"
                                    placeholder="Group ID"
                                    defaultValue={this.state.userData.studentID}
                                />
                                <div style={{ background: "#f8d7da" }}>
                                  {this.state.studentIDError}
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
                                    placeholder="studentName"
                                    defaultValue={this.state.userData.studentName}
                                />
                                <div style={{ background: "#f8d7da" }}>
                                  {this.state.studentNameError}
                                </div>
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label style={{ fontWeight: "bold" }}>
                                    Email
                                </Form.Label>
                                <Form.Control
                                    style={{ border: "1px solid #050139" }}
                                    type="text"
                                    name="email"
                                    placeholder="email"
                                    defaultValue={this.state.userData.email}
                                />
                                <div style={{ background: "#f8d7da" }}>
                                  {this.state.studentEmailError}
                                </div>
                            </Form.Group>
                            <Form.Group controlId="phone">
                                <Form.Label style={{ fontWeight: "bold" }}>
                                    Mobile
                                </Form.Label>
                                <Form.Control
                                    style={{ border: "1px solid #050139" }}
                                    type="text"
                                    name="phone"
                                    placeholder="phone"
                                    defaultValue={this.state.userData.phone}
                                />
                                <div style={{ background: "#f8d7da" }}>
                                  {this.state.phoneError}
                                </div>
                            </Form.Group>
                            <Form.Group controlId="gender">
                                <Form.Label style={{ fontWeight: "bold" }}>
                                    Gender
                                </Form.Label>
                                <Form.Control
                                    style={{ border: "1px solid #050139" }}
                                    type="text"
                                    name="gender"
                                    placeholder="gender"
                                    defaultValue={this.state.userData.gender}
                                />
                                <div style={{ background: "#f8d7da" }}>
                                  {this.state.genderError}
                                </div>
                            </Form.Group>
                            <Form.Group>
                                <Button
                                    className="my-1"
                                    style={{ backgroundColor: "#478778",  border: "2px solid #023020",color: "Black" }}  
                                    type="submit"
                                >
                                    Edit Details
                                </Button>


                            </Form.Group>
                            {/* </div> */}

                            {/* ))} */}

                        </Form>
                        <Button
                            className="my-1 ml-4"
                            style={{ backgroundColor: "#de1738", border: "2px solid black" ,color: "black" }}
                            type="submit"
                            onClick={() => this.deleteProfile()}
                        >
                            Delete Profile
                        </Button>
                    </div>

                    <div className="col-1"></div>
                </div>
            </React.Fragment>
        );
    }
}

export default StudentProfileDetails;