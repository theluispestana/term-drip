import React from "react";
import PromptCheckbox from "containers/promptCheckbox";

const Prompt = (props) => {
  const { handleCheckbox, handlePromptInputs, checkboxes, promptItems } = props;
  return (
    <div>
      <h1>Create A Prompt</h1>
      <form>
        <PromptCheckbox
          name="username"
          label="Username "
          promptItems={promptItems}
          handleCheckbox={handleCheckbox}
          checkboxValue={checkboxes.username}
          handlePromptInputs={handlePromptInputs}
        />
        <PromptCheckbox
          name="date"
          label="Date "
          promptItems={promptItems}
          handleCheckbox={handleCheckbox}
          checkboxValue={checkboxes.date}
          handlePromptInputs={handlePromptInputs}
        />
        <PromptCheckbox
          name="time"
          label="Time "
          promptItems={promptItems}
          handleCheckbox={handleCheckbox}
          checkboxValue={checkboxes.time}
          handlePromptInputs={handlePromptInputs}
        />
      </form>
    </div>
  );
};

export default Prompt;
