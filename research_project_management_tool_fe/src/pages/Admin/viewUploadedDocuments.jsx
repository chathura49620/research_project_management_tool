import React, { Component } from "react";
import TableDocument from "../../components/admin/tables/tableDocument";

class ViewUploadedDocuments extends Component {
  state = {
    documents: [],
    editOb: {},
    show: false,
  };

  handleRemove = async (id) => {
    console.log("handle remove", id);

    const documents = this.state.documents.filter(
      (document) => document._id !== id
    );
    this.setState({ documents });

    const response = await fetch("http://localhost:5000/api/documents/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    // const data = await response.json();
    console.log(response);
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
    console.log(ob, "passsssssss");
    this.setState({ show: false, users });
  };

  async componentDidMount() {
    const response = await fetch("http://localhost:5000/api/documents", {
      method: "GET",
    });

    const data = await response.json();

    this.setState({ documents: data });

    console.log(data);
  }

  render() {
    return (
      <>
        <TableDocument
          filteredItems={this.state.documents}
          onRemove={this.handleRemove}
        />
      </>
    );
  }
}

export default ViewUploadedDocuments;
