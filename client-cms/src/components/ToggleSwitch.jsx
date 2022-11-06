import React from "react";
import "./ToggleSwitch.css";
import { useState } from "react";

const ToggleSwitch = ({ label, status }) => {
  const [state, setState] = useState({ status });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className="container">
      {label}{" "}
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          name={label}
          id={label}
          value={status}
          checked={state.status}
          onChange={handleChange}
        />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
