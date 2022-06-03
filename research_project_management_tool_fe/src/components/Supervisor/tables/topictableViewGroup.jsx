import React from "react";

const TopicTableViewGroup = ({ filteredItems, onRemove, onModalView }) => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Topic ID</th>
          <th scope="col">Topic Name</th>
          <th scope="col">Description</th>
          <th scope="col">Group ID</th>
          <th scope="col">Group Name</th>
        </tr>
      </thead>
      <tbody>
        {filteredItems.map((topic) => (
          <tr key={topic._id}>
            <th scope="row">{filteredItems.indexOf(topic) + 1}</th>
            <td>{topic.topicID}</td>
            <td>{topic.topicName}</td>
            <td>{topic.topicDescription}</td>
            <td>{topic.groupID}</td>
            <td>{topic.groupName}</td>
            <td>
              <button
                onClick={() => onModalView(topic)}
                className="btn btn-sm btn-primary"
              >
                Accept
              </button>
            </td>
            <td>
              <button
                onClick={() => onRemove(topic._id)}
                className="btn btn-sm btn-danger"
              >
                Reject
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TopicTableViewGroup;
