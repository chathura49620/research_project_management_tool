import React, { Component } from "react";
import axios from "axios";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import {TopicEvalTable} from "../../components/EvaPanel/Tables/TopicEvalTable";


class TopicEval extends Component {
  state = {
    topicDetails: [],
    addModalShow: false
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/topic-details/")
      .then((result) => {
        const topicDetails = result.data;

        this.setState({ topicDetails: topicDetails });
      })
      .catch((err) => console.log(err.message));
  }


  render() {
    // let AddModelClose = () => this.setState({ addModalShow: false })
    return (
      <React.Fragment>
        <h1 className="mb-5">Student Topics</h1>
        {/* <ButtonToolbar>
                    <Button style={{ backgroundColor: "#7121AD", color: "white" }}
                    className="btn btn-lg"
                        onClick={() => this.setState({ addModalShow: true })}
                    >Add Category
                    </Button>
                    <AddCategoryModal
                        show={this.state.addModalShow}
                        onHide={AddModelClose}
                    />
          </ButtonToolbar> */}
            <TopicEvalTable topicDetails={this.state.topicDetails} />
      </React.Fragment>
    );
  }
};

export default TopicEval;