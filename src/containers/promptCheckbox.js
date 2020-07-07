import React from "react";
import Checkbox from "components/Checkbox";
import ColorInput from "components/colorInput";

const PromptCheckbox = (props) => {
  const {
    name,
    label,
    promptItems,
    checkboxValue,
    handlePromptInputs,
    handleCheckbox,
  } = props;
  const promptItem = promptItems.find((item) => item.type === name);
  // console.log(promptItem);
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
            value={promptItem.foreground}
            handleChange={handlePromptInputs}
          />
          <ColorInput
            name={`${name} background`}
            label="Background Color: "
            value={promptItem.background}
            handleChange={handlePromptInputs}
          />
        </div>
      ) : null}
    </>
  );
};

export default PromptCheckbox;
