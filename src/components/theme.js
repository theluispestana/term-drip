import React from "react";
import ColorInput from "components/colorInput";
import { colorLabels } from "helpers/themeHelper";

const Theme = (props) => {
  // const handleSubmit = (e) => {
  // };

  const { colors, handleChange } = props;
  return (
    <div>
      <h1>Create A Theme</h1>
      <form>
        {Object.keys(colors).map((key, index) => (
          <ColorInput
            key={key}
            name={key}
            label={colorLabels[index]}
            handleChange={handleChange}
            value={colors[key]}
          />
        ))}
      </form>
    </div>
  );
};

export default Theme;
