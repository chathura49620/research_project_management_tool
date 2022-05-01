import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class AdminDashboard extends Component {
    state = {  } 

handleLogout = () => {


    console.log("handlelogout")
    localStorage.removeItem("logged");
    window.location.href = "/";
}

    render() { 
        return (
             <div>




<div>this is admin dashboard</div>

<button className='btn btn-sm btn-primary' onClick={this.handleLogout}>Log out</button><br></br>
<br />
<Link className='btn btn-sm btn-primary'> Add user</Link>
             </div>
            
        );
    }
}
 
export default AdminDashboard;