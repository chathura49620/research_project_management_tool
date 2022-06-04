import React from "react";
import { Link } from "react-router-dom";

const TableDocument = ({ filteredItems, onRemove }) => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Document Name</th>
        </tr>
      </thead>
      <tbody>
        {filteredItems.map((document) => (
          <tr key={document._id}>
            <th scope="row">{filteredItems.indexOf(document) + 1}</th>
            <td>{document.documentName}</td>
            <td>
              <a
                className="btn btn-sm btn-primary"
                href={`/uploads/${document.documentName}`}
                download
              >
                Download
              </a>
            </td>
            <td>
              <button
                onClick={() => onRemove(document._id)}
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

export default TableDocument;
