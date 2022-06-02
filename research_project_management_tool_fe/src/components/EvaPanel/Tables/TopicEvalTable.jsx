import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import swal from 'sweetalert';
import { TopicApproveModel } from '../Models/TopicApproveModel';
import { TopicRejectModel } from '../Models/TopicRejectModel';

export class TopicEvalTable extends Component {
  constructor(props) {
    super(props);
    this.state = { cate: [], editModalShow: false , editModalShowReject :false }
  }

  deleteCat(id){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Recode!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        fetch('http://localhost:5000/api/categories', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'username': 'chathura'
            },
            body: JSON.stringify({
                id: id
               
            })
        }).then(res => res.json())
        .then((result) => {
          swal({
            title: "Category Deleted Succesfully",
            icon: "success",
            button: "Done",
          }); 
          setTimeout(function() {
            window.location.reload(); 
          }.bind(this), 1500);
      });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  }

  render() {
    const {id , email} = this.state;
    let EditModelClose = () => this.setState({ editModalShow: false })
    let EditModelCloseReject = () => this.setState({ editModalShowReject: false })
  return (
    <div>
       <ButtonToolbar>

        <TopicApproveModel
            show={this.state.editModalShow}
            onHide={EditModelClose}
            id={id}
            email={email}
        />
         <TopicRejectModel
            show={this.state.editModalShowReject}
            onHide={EditModelCloseReject}
            id={id}
            email={email}
        />
        
        </ButtonToolbar>
    <table className="table table-bordered table-sm m-2" style={{width:"1000px"}}>
      <thead>
        <tr style={{ backgroundColor: "#7121AD", color: "white" } }>
          <th scope="col">groupID</th>
          <th scope="col">topicName</th>
          <th scope="col">topicDescription</th>
          <th scope="col">researchProblem</th>
          <th scope="col">researchSolution</th>
          <th scope="col">technology</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {this.props.topicDetails.map((i) => (
          <tr
            key={i._id}
            
          >
            <td>{i.groupID}</td>
            <td>{i.topicName}</td>
            <td>{i.topicDescription}</td>
            <td>{i.researchProblem}</td>
            <td>{i.researchSolution}</td>
            <td>{i.technology}</td>
            <td>{i.status}</td>
            <td>
              {i.status === 'Pending' ? <div><button 
              className="btn-sm"
              style={{ backgroundColor: "#7121AD", color: "white", marginRight:"4px" }}
            onClick={() => this.setState({ editModalShow: true, id: i._id , email: i.groupLeaderEmail })}
            >Approve</button> 
            <button 
            className="btn-sm"
            style={{ backgroundColor: "#BA0D32 ", color: "white" }} 
            onClick={() => this.setState({ editModalShowReject: true, id: i._id , email: i.groupLeaderEmail })}
            >Decline</button> </div> : i.status }
            </td>
          </tr>
        ))}
      </tbody>
     
    </table>
    </div>
  );
};
}

