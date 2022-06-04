import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import TableViewGroup from "./../../components/admin/tables/tableViewGroup";
import swal from "sweetalert";
import axios from "axios";

class ViewResearchGroup extends Component {
  state = {
    groups: [],
    editOb: {},
    show: false,
    panelMembers: [],
  };

  handleRemove = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((result) => {
      if (result) {
        console.log("handle remove", id);

        const groups = this.state.groups.filter((group) => group._id !== id);
        this.setState({ groups });
        axios
          .delete("http://localhost:5000/api/groups/" + id)
          .then((result) => console.log(result.data));
      }
    });
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
    const response = await fetch("http://localhost:5000/api/groups/", {
      method: "GET",
    });

    const response2 = await fetch("http://localhost:5000/api/users/", {
      method: "GET",
    });
    const data = await response.json();
    const data2 = await response2.json();

    const panelMembers = data2.filter((d) => d.type == "Panel Member");

    this.setState({ groups: data, panelMembers: panelMembers });

    console.log(data);
  }

  handleSelectChange = (value, group) => {
    console.log(value, group);
    let groups = [...this.state.groups];
    let index = groups.indexOf(group);
    groups[index].panelMember = value;
    this.setState({ groups: groups });
  };

  allocate = async (group) => {
    const jsonOb = {
      panelMember: group.panelMember,
    };

    const response = await fetch(
      "http://localhost:5000/api/groups/" + group._id,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jsonOb),
      }
    );

    alert("Panel member allocated");
    const data = await response.json(jsonOb);
  };

  render() {
    return (
      <>
        <TableViewGroup
          filteredItems={this.state.groups}
          onRemove={this.handleRemove}
          panelMembers={this.state.panelMembers}
          handleSelectChange={this.handleSelectChange}
          allocate={this.allocate}
        />
      </>
    );
  }
}

export default ViewResearchGroup;
