import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import TopicTableViewGroup from "../../components/Supervisor/tables/topictableViewGroup";

class ResearchTopics extends Component {
  state = {
    topics: [],
    editOb: {},
    show: false,
  };

  handleRemove = async (id) => {
    console.log("handle remove", id);

    const topics = this.state.topics.filter((topic) => topic._id !== id);
    this.setState({ topics });

    //   const response = await fetch("http://localhost:5000/api/users/"+id, {
    //     method: "DELETE",
    //     headers: { "Content-Type": "application/json" },
    //   });

    //  // const data = await response.json();
    //   console.log(response);

    //db delete request
  };

  handleShow = (topic) => {
    this.setState({ show: true, editOb: topic });
  };
  handleClose = () => {
    this.setState({ show: false });
  };

  closeAndSetEditedOb = (ob) => {
    const topics = [...this.state.topics];

    const topic = topics.filter((u) => u._id === ob._id);
    const editedTopic = topic[0];

    const index = topics.indexOf(editedUser);
    topics[index] = { ...users[index] };
    topics[index] = ob;

    console.log(topics);
    console.log(ob, "passsssssss");
    this.setState({ show: false, topics });
  };

  async componentDidMount() {
    const response = await fetch("http://localhost:5000/api/research-topic-details/", {
      method: "GET",
    });

    const data = await response.json();

    this.setState({ topics: data });

    console.log(data);
  }

  render() {
    return (
      <>
        {/* <TableViewMember filteredItems={this.state.users} onRemove={this.handleRemove}
            onModalView={this.handleShow}
            /> */}
        <TopicTableViewGroup
          filteredItems={this.state.topics}
          onRemove={this.handleRemove}
          onModalView={this.handleShow}
        />
        <Modal show={this.state.show}>
          <Modal.Header>
            <Modal.Title>Accepted Topic</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <AskReserveDetails  room={this.state.editOb} onClose={this.handleClose}/> */}
            {/* <EditUserDetails editOb={this.state.editOb} closeAndSetEditedOb={this.closeAndSetEditedOb}/> */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.handleClose}>
              close
            </Button>
            <Button variant="primary">save</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ResearchTopics;
