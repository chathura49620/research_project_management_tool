import React, { Component } from 'react'
import TableViewMember from '../components/admin/tables/tableViewmember';

class ViewMember extends Component {
    state = { 

        users : [],
     }
    

    handleRemove = (id) => {

console.log("handle remove", id);

      const users  = this.state.users.filter(user => user._id !== id);
      this.setState({users});


      //db delete request
      

    } 
    

   async componentDidMount(){

        const response = await fetch("http://localhost:5000/api/users/", {
            method: "GET",
          });

          const data = await response.json();

          this.setState({users: data});

          console.log(data);


    }



    render() { 
        return (
            <TableViewMember filteredItems={this.state.users} onRemove={this.handleRemove}/>
        );
    }
}
 
export default ViewMember;