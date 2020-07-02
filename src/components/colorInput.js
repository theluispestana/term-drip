import React from "react";

const ColorInput = (props) => {
  const { name, label, value, handleChange } = props;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type="color" name={name} value={value} onChange={handleChange} />
      <br />
    </>
  );
};

export default ColorInput;
