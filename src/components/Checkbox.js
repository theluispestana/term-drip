import React from "react";

const Checkbox = (props) => {
  const { name, label, value, handleCheckbox } = props;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type="checkbox"
        name={name}
        onChange={handleCheckbox}
        checked={value}
      />
      <br />
    </>
  );
};

export default Checkbox;
