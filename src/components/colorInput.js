import React, { useState } from "react";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";

const ColorInput = (props) => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const { name, label, value, handleChange } = props;

  const handleClick = () => {
    setShowColorPicker(!showColorPicker);
  };

  // const handleClose = () => {
  //   setShowColorPicker(false);
  // };

  const styles = reactCSS({
    default: {
      color: {
        minWidth: "120px",
        height: "14px",
        borderRadius: "2px",
        background: `${value}`,
      },
      swatch: {
        padding: "5px",
        background: "#fff",
        borderRadius: "1px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer",
      },
      popover: {
        position: "absolute",
        zIndex: "2",
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
    },
  });

  return (
    <>
      {/* {<label htmlFor={name}>{label}</label>} */}
      <div id="color-input">
        <div style={styles.swatch} onClick={handleClick}>
          {label}
          <div style={styles.color} />
        </div>
        {showColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={handleClick} />
            <SketchPicker
              color={value}
              onChange={(color) => handleChange(color, name)}
            />
          </div>
        ) : null}
      </div>
      <br />
    </>
  );
};

export default ColorInput;
