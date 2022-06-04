import React, { Component } from "react";
import TableViewMember from "../../components/admin/tables/tableViewmember";
import EditModal from "../../components/admin/reusables/editModal";
import RegisterUser from "../../components/admin/forms/registerUser";
import { Modal, Button } from "react-bootstrap";
import EditUserDetails from "../../components/admin/forms/EditUserDetails";

class ViewMember extends Component {
  state = {
    users: [],
    editOb: {},
    show: false,
  };

  handleRemove = async (id) => {
    console.log("handle remove", id);

    const users = this.state.users.filter((user) => user._id !== id);
    this.setState({ users });

    const response = await fetch("http://localhost:5000/api/users/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    // const data = await response.json();
    console.log(response);

    //db delete request
  };

  handleShow = (member) => {
    this.setState({ show: true, editOb: member });
  };
  handleClose = () => {
    this.setState({ show: false });
  };

  closeAndSetEditedOb = (ob) => {
    const users = [...this.state.users];

    const user = users.filter((u) => u._id === ob._id);
    const editedUser = user[0];

    const index = users.indexOf(editedUser);
    users[index] = { ...users[index] };
    users[index] = ob;

    console.log(users);
    console.log(ob);
    this.setState({ show: false, users });
  };

  async componentDidMount() {
    const response = await fetch("http://localhost:5000/api/users/", {
      method: "GET",
    });

    const data = await response.json();

    this.setState({ users: data });

    console.log(data);
  }

  render() {
    return (
      <>
        <TableViewMember
          filteredItems={this.state.users}
          onRemove={this.handleRemove}
          onModalView={this.handleShow}
        />
        <Modal show={this.state.show}>
          <Modal.Header>
            <Modal.Title>Edit Member details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditUserDetails
              editOb={this.state.editOb}
              closeAndSetEditedOb={this.closeAndSetEditedOb}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.handleClose}>
              close
            </Button>
            <Button variant="primary" style={{ color: "Black" }}>
              save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ViewMember;
