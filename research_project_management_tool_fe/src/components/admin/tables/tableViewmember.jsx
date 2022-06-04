import React from "react";

const TableViewMember = ({ filteredItems, onRemove, onModalView }) => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Address</th>
          <th scope="col">contact Number</th>
          <th scope="col">Age</th>
          <th scope="col">Type</th>
          <th scope="col">Password</th>
        </tr>
      </thead>
      <tbody>
        {filteredItems.map((member) => (
          <tr>
            <th scope="row">{filteredItems.indexOf(member) + 1}</th>
            <td>{member.firstName}</td>
            <td>{member.lastName}</td>
            <td>{member.email}</td>
            <td>{member.address}</td>
            <td>{member.contactNumber}</td>
            <td>{member.age}</td>
            <td>{member.type}</td>
            <td>{member.password}</td>
            <td>
              <button
                onClick={() => onModalView(member)}
                className="btn btn-sm btn-primary"
              >
                modify
              </button>
            </td>
            <td>
              <button
                onClick={() => onRemove(member._id)}
                className="btn btn-sm btn-danger"
              >
                remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableViewMember;
