import React, { useState } from "react";
import Joi from "joi-browser";
import axios from "axios";
import swal from "sweetalert";

import FormSuper from "./../reusables/formsuper";

class RegisterStudent extends FormSuper {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      contactNumber: "",
      age: "",
      password: "",
      type: "Student",
    },
    errors: {},
  };

  schema = {
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    address: Joi.string().required(),
    contactNumber: Joi.string().required(),
    age: Joi.string().required(),
    password: Joi.date().required(),
    type: Joi.string(),
  };

  componentDidMount() {}

  async doSubmit() {
    const ob = this.state.data;
    const jsonOb = {
      firstName: ob.firstName,
      lastName: ob.lastName,
      email: ob.email,
      address: ob.address,
      contactNumber: ob.contactNumber,
      age: ob.age,
      password: ob.password,
      type: ob.type,
    };

    console.log("submitted");

    const response = await fetch("http://localhost:5000/api/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonOb),
    });

    const data = await response.json();

    if (data.status === "ok") {
      alert("Register successfull");
      //window.location.href = "/dashboard";
    } else {
      alert("this email is allready used");
    }

    console.log(data);
  }

  render() {
    return (
      <React.Fragment>
        <div className="row mt-4">
          <div className="col-3"></div>
          <div className="col" style={{ backgroundColor: "#F2F3F4" }}>
            <h1>Register Me</h1>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("firstName", "First Name")}
              {this.renderInput("lastName", "Last Name")}
              {this.renderInput("email", "Email Address")}
              {this.renderInput("address", "Living Address")}
              {this.renderInput("contactNumber", "Contact Number")}
              {this.renderInput("age", "Age")}
              {this.renderInput("password", "password")}
              {this.renderButton("Register User")}
            </form>
          </div>
          <div className="col-4"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisterStudent;
