import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import TableViewGroup from "./../../components/admin/tables/tableViewGroup";
import swal from "sweetalert";

class ViewResearchGroup extends Component {
  state = {
    groups: [],
    editOb: {},
    show: false,
    panelMembers: [],
  };

  handleRemove = async (id) => {
    console.log("handle remove", id);

    const groups = this.state.groups.filter((group) => group._id !== id);
    this.setState({ groups });

    const response = await fetch("http://localhost:5000/api/groups/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    // const data = await response.json();
    console.log(response);

    //   const response = await fetch("http://localhost:5000/api/users/"+id, {
    //     method: "DELETE",
    //     headers: { "Content-Type": "application/json" },
    //   });

    //  // const data = await response.json();
    //   console.log(response);

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

    swal({
      text: "Panel member Allocated.",
      icon: "success",
      timer: "2000",
    });
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
