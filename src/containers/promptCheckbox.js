import React from "react";
import Checkbox from "components/Checkbox";
import ColorInput from "components/colorInput";

const PromptCheckbox = (props) => {
  const { name, label, checkboxValue, handlePromptInputs } = props;
  return (
    <>
      <Checkbox
        name={name}
        label={label}
        value={checkboxValue}
        handlePromptInputs={handlePromptInputs}
      />
      {checkboxValue ? (
        <div onChange={handlePromptInputs}>
          <ColorInput name={`${name} foreground`} label="Foreground Color: " />
          <ColorInput name={`${name} background`} label="Background Color: " />
        </div>
      ) : null}
    </>
  );
};

export default PromptCheckbox;
