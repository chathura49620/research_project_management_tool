import React, { Component } from "react";
import { getAllFiles, getAllFilesSync } from "get-all-files";

class ViewUploadedDocuments extends Component {
  state = {
    groups: [],
    editOb: {},
    show: false,
  };

  handleRemove = async (id) => {
    console.log("handle remove", id);

    const groups = this.state.groups.filter((group) => group._id !== id);
    this.setState({ groups });
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
    console.log(
      await getAllFiles(
        `${__dirname}/../../../research_project_management_tool_fe/public/uploads/${file.name}`
      ).toArray()
    );
  }

  render() {
    return <>uploaded Documents</>;
  }
}

export default ViewUploadedDocuments;
