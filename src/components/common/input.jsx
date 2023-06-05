import React, { Component } from "react";
const Input = ({ name, label, value, onChange, type, error }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        autoFocus
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        className="form-control"
        id={name}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
