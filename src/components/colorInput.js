import React from "react";

const ColorInput = (props) => {
  const { name, label, value } = props;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type="color" name={name} value={value} />
      <br />
    </>
  );
};

export default ColorInput;