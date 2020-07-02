import React from "react";
import Checkbox from "components/Checkbox";
import ColorInput from "components/colorInput";

const PromptCheckbox = (props) => {
  const { name, label, value, handlePromptInputs } = props;
  return (
    <>
      <Checkbox
        name={name}
        label={label}
        value={value}
        handlePromptInputs={handlePromptInputs}
      />
      {value ? (
        <div onChange={handlePromptInputs}>
          <ColorInput name={`${name} foreground`} label="Foreground Color: " />
          <ColorInput name={`${name} background`} label="Background Color: " />
        </div>
      ) : null}
    </>
  );
};

export default PromptCheckbox;
