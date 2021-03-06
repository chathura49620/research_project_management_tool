import React, { useState } from "react";
import Joi from "joi-browser";
import axios from "axios";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import LoginImage from "./../../../assests/research.svg";

import FormSuper from "./../reusables/formsuper";

class LoginUser extends FormSuper {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().required(),
    password: Joi.string().required(),
  };

  componentDidMount() {}

  async doSubmit() {
    const jsonOb = this.state.data;
    console.log("submitted");
    console.log(jsonOb);

    const response = await fetch(
      "http://localhost:5000/api/users/" + jsonOb.email + "/" + jsonOb.password,
      {
        method: "GET",
      }
    );

    const data = await response.json();

    if (data.status === "ok") {
      console.log("logged");
      localStorage.setItem("logged", "ok");
      localStorage.setItem("type", data.user.type);
      console.log(localStorage.getItem("logged"));
      window.location.href = "/";
    } else {
      console.log("notlog");
    }

    // console.log(data);
  }

  render() {
    return (
      <React.Fragment>
        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col-4"></div>
          <div className="col" style={{ backgroundColor: "#F2F3F4" }}>
            <h1 className="mb-4">Sign in</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="my-2">{this.renderInput("email", "Email")}</div>
              <div className="mb-5">
                {this.renderInput("password", "password")}
              </div>

              {this.renderButton("Sign in")}
              <Link to="/registerStudent">Sign in as a Student</Link>
            </form>
          </div>
          <div className="col-4">
            <img style={{ width: "60%", height: "60%" }} src={LoginImage}></img>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginUser;
