import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import AdminDashboard from './pages/adminDashboard';
import RegisterUser from './components/admin/forms/registerUser';
import LoginUser from './components/admin/forms/loginUser';
import Sidebar from './components/admin/sideNav/Sidebar';

class Dashboard extends Component {
    state = {  } 
    render() { 

        console.log(localStorage.getItem('logged'));

        if(localStorage.getItem('logged') === 'kk'){

                
        return (

           
                
            <div>
            <Sidebar/> 
            <Route path="/" exact component={AdminDashboard}></Route>
            <Route path="/register" exact component={RegisterUser} />
            <Route path="/login" exact component={LoginUser} />
            
          </div>

            
            

        );
        }

        else{

            return (

           
               <LoginUser/>
                
    
            ); 
        }



    }
}
 
export default Dashboard;