import React from "react";

const TableViewGroup = ({
  filteredItems,
  onRemove,
  allocate,
  panelMembers,
  handleSelectChange,
}) => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Member1</th>
          <th scope="col">Member2</th>
          <th scope="col">Member3</th>
          <th scope="col">Member4</th>
          <th scope="col">Panel Member</th>
        </tr>
      </thead>
      <tbody>
        {filteredItems.map((group) => (
          <tr key={group._id}>
            <th scope="row">{filteredItems.indexOf(group) + 1}</th>
            <td>{group.member1}</td>
            <td>{group.member2}</td>
            <td>{group.member3}</td>
            <td>{group.member4}</td>
            <td
              style={{
                border:
                  group.panelMember === ""
                    ? "1px solid red"
                    : "1px solid black",
              }}
            >
              {group.panelMember}
            </td>
            <td>
              <select
                id="lang"
                value={group.panelMember}
                onChange={(e) => handleSelectChange(e.target.value, group)}
              >
                {panelMembers.map((member) => (
                  <option key={member._id} value={member.firstName}>
                    {member.firstName}
                  </option>
                ))}
              </select>
            </td>
            <td>
              <button
                onClick={() => allocate(group)}
                className="btn btn-sm btn-primary"
              >
                Allocate
              </button>
            </td>
            <td>
              <button
                onClick={() => onRemove(group._id)}
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

export default TableViewGroup;
