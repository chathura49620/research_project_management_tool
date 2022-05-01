import React from "react";
import ReactDOM from "react-dom";
import RegisterUser from "./components/admin/forms/registerUser";
//import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//import RegisterUser from './components/admin/forms/registerUser';

ReactDOM.render(<BrowserRouter>< App/></BrowserRouter>, document.querySelector("#root"));
