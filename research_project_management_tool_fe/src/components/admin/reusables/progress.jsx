import React, { Component } from "react";

const Progress = ({ percentage }) => {
  return (
    <div>
      <div class="progress">
        <div
          className="progress-bar progress-bar-striped"
          style={{ width: `${percentage}%` }}
          role="progressbar"
        >
          {percentage}%
        </div>
      </div>
    </div>
  );
};

// Progress.propTypes = {
//   percentage: PropTypes.number.isRequired,
// };

export default Progress;
