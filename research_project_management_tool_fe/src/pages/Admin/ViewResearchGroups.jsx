import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap';
import TableViewGroup from './../../components/admin/tables/tableViewGroup';

class ViewResearchGroup extends Component {
    state = { 

        groups : [],
        editOb: {},
        show: false,
     }
    

   handleRemove = async(id) => {

console.log("handle remove", id);

      const groups  = this.state.groups.filter(group => group._id !== id);
      this.setState({groups});

    //   const response = await fetch("http://localhost:5000/api/users/"+id, {
    //     method: "DELETE",
    //     headers: { "Content-Type": "application/json" },
    //   });

    //  // const data = await response.json();
    //   console.log(response);


      //db delete request


    } 

    handleShow = (member) => {
        this.setState({show: true, editOb: member});
    }
    handleClose = () => {

        this.setState({show: false});
    }

    closeAndSetEditedOb = (ob) => {
       
    const users = [...this.state.users];

    const user = users.filter((u) => u._id === ob._id);
    const editedUser = user[0];

    const index = users.indexOf(editedUser);
    users[index] = { ...users[index] };
    users[index] = ob;

    console.log(users);
    console.log(ob, "passsssssss")
    this.setState({ show: false, users});

    }

   async componentDidMount(){

    
      const response = await fetch("http://localhost:5000/api/groups/", {
            method: "GET",
          });

          const data = await response.json();

          this.setState({groups: data});

          console.log(data);


    }



    render() { 
        return (
            <>
           {/* <TableViewMember filteredItems={this.state.users} onRemove={this.handleRemove}
            onModalView={this.handleShow}
            /> */}
            <TableViewGroup filteredItems={this.state.groups} onRemove={this.handleRemove}
            onModalView={this.handleShow}/>
            <Modal show={this.state.show}>
             <Modal.Header>

               <Modal.Title>Edit Member details</Modal.Title>
             </Modal.Header>
             <Modal.Body>


            {/* <AskReserveDetails  room={this.state.editOb} onClose={this.handleClose}/> */}
            {/* <EditUserDetails editOb={this.state.editOb} closeAndSetEditedOb={this.closeAndSetEditedOb}/> */}


             </Modal.Body>
             <Modal.Footer>
                 <Button variant='danger' onClick={this.handleClose}>
                  close
                 </Button>
                 <Button variant='primary'>
                   save
                 </Button>

             </Modal.Footer>

            </Modal>
            </>
           
        );
    }
}
 
export default ViewResearchGroup;