import React from "react";
import Checkbox from "components/Checkbox";
import ColorInput from "components/colorInput";

const PromptCheckbox = (props) => {
  const {
    name,
    label,
    checkboxValue,
    handlePromptInputs,
    handleCheckbox,
  } = props;
  return (
    <>
      <Checkbox
        name={name}
        label={label}
        value={checkboxValue}
        handleCheckbox={handleCheckbox}
        handlePromptInputs={handlePromptInputs}
      />
      {checkboxValue ? (
        <div>
          <ColorInput
            name={`${name} foreground`}
            label="Foreground Color: "
            handleChange={handlePromptInputs}
          />
          <ColorInput
            name={`${name} background`}
            label="Background Color: "
            handleChange={handlePromptInputs}
          />
        </div>
      ) : null}
    </>
  );
};

export default PromptCheckbox;
