// import React from "react";
// import "./ToggleSwitch.css";
import { useState } from "react";

// const ToggleSwitch = ({ label, status }) => {
//   const [state, setState] = useState({ status });

//   const handleChange = (event) => {
//     setState({ ...state, [event.target.name]: event.target.checked });
//   };

//   return (
//     <div className="container">
//       {label}{" "}
//       <div className="toggle-switch">
//         <input
//           type="checkbox"
//           className="checkbox"
//           name={label}
//           id={label}
//           value={status}
//           checked={state.status}
//           onChange={handleChange}
//         />
//         <label className="label" htmlFor={label}>
//           <span className="inner" />
//           <span className="switch" />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default ToggleSwitch;
// import React, { Component } from "react";
import Switch from "react-switch";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateActiveFood } from "../store/action/food";

export default function ToggleSwitch({ status, props }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(status);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  // const handleUpdate = () => {
  //   dispatch(updateActiveFood(id));
  // };

  return (
    <div className="example">
      <label htmlFor="material-switch">
        <Switch
          checked={checked}
          onChange={handleChange}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          className="react-switch"
          id="material-switch"
        />
      </label>
    </div>
  );
}
