import React, { Component } from "react";

const Input = ({name, label, value, onChange, error, type }) => {
  return ( 
    <div className="form-group my-1">
      <label style={{ fontWeight: "bold" }} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        className="form-control"
        value={value}
        name={name}
        autoComplete="off"
        onChange={onChange}
        style={{ border: "1px solid #050139" }}
      />
      {error && (
        <div style={{ padding: 3, color: "red" }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
