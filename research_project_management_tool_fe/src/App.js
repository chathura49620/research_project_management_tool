import React, { useState } from "react";
import LoginUser from "./components/admin/forms/loginUser";
import RegisterUser from "./components/admin/forms/registerUser";
import Dashboard from "./dashboard";
import AdminDashboard from "./pages/adminDashboard";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";

const App = () => {
  
  return (
  
      // <LoginUser/>
      <Dashboard/>
     
   
    
    // <AdminDashboard></AdminDashboard>
      
   
  );
};

export default App;
