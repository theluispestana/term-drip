import React from "react";
import ColorInput from "components/colorInput";
import { colorLabels } from "helpers/themeHelper";
import "styles/themecolors.css";

const Theme = (props) => {
  const { colors, handleChange } = props;
  return (
    <div>
      <h1>Terminal Color Scheme</h1>
      <div id="terminal-container">
        {Object.keys(colors).map((key, index) => (
          <ColorInput
            key={key}
            name={key}
            label={colorLabels[index]}
            handleChange={handleChange}
            value={colors[key]}
          />
        ))}
      </div>
    </div>
  );
};

export default Theme;
