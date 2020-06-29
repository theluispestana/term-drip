import React from "react";

const ColorInput = (props) => {
  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <input type="text" name={props.name} value={props.value} />
      <br />
    </div>
  );
};

export default ColorInput;
