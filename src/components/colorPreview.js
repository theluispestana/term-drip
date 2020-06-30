import React from "react";

const ColorPreview = (props) => {
  return (
    <span className="color" style={{ backgroundColor: props.color }}>
      &nbsp;
    </span>
  );
};

export default ColorPreview;
