import React from "react";

const Checkbox = (props) => {
  const { name, label, value } = props;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type="checkbox" name={name} checked={value} />
      <br />
    </>
  );
};

export default Checkbox;
