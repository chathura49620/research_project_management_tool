import React, { useState } from "react";
import Joi from "joi-browser";
import axios from "axios";
import swal from "sweetalert";

import FormSuper from "./../reusables/formsuper";

class EditUserDetails extends FormSuper {
  state = {
    data: {
      _id: "",
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      contactNumber: "",
      age: "",
      password: "",
      type: "",
    },
    errors: {},
    memberTypes: [
      { id: 1, type: "Panel Member" },
      { id: 2, type: "Supervisor" },
    ],
  };

  schema = {
    _id: Joi.string(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    address: Joi.string().required(),
    contactNumber: Joi.string().required(),
    age: Joi.string().required(),
    password: Joi.date().required(),
    type: Joi.string().required(),
  };

  componentDidMount() {
    const user = this.props.editOb;
    console.log(user, "edittttttttt");
    const data = {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      address: user.address,
      contactNumber: user.contactNumber,
      age: user.age,
      password: user.password,
      type: user.type,
    };
    this.setState({ data });
  }

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

    const response = await fetch("http://localhost:5000/api/users/" + ob._id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonOb),
    });

    const data = await response.json(jsonOb);

    if (data.status === "ok") {
      this.props.closeAndSetEditedOb(ob);
      //window.location.href = "/dashboard";
    } else {
      alert("this email is allready used");
    }

    console.log(data);
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ backgroundColor: "#F2F3F4" }}>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col">
                {this.renderInput("firstName", "First Name")}
                {this.renderInput("lastName", "Last Name")}
                {this.renderInput("email", "Email Address")}
                {this.renderInput("address", "Living Address")}
              </div>
              <div className="col">
                {this.renderInput("contactNumber", "Contact Number")}
                {this.renderInput("age", "Age")}
                {this.renderInput("password", "password")}
                {this.renderSelect("type", "Type", this.state.memberTypes)}
              </div>
            </div>

            {this.renderButton("Update User")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default EditUserDetails;
