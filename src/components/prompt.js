import React from "react";
import PromptCheckbox from "containers/promptCheckbox";
import "styles/prompt.css";

const Prompt = (props) => {
  const { handleCheckbox, handlePromptInputs, checkboxes, promptItems } = props;
  return (
    <div>
      <h1>Prompt Options</h1>
      <div id="prompt-options">
        <PromptCheckbox
          name="username"
          label="Username "
          promptItems={promptItems}
          handleCheckbox={handleCheckbox}
          checkboxValue={checkboxes.username}
          handlePromptInputs={handlePromptInputs}
        />
        <PromptCheckbox
          name="hostname"
          label="Hostname "
          promptItems={promptItems}
          handleCheckbox={handleCheckbox}
          checkboxValue={checkboxes.hostname}
          handlePromptInputs={handlePromptInputs}
        />
        <PromptCheckbox
          name="workingDirectory"
          label="Working Directory "
          promptItems={promptItems}
          handleCheckbox={handleCheckbox}
          checkboxValue={checkboxes.workingDirectory}
          handlePromptInputs={handlePromptInputs}
        />
        <PromptCheckbox
          name="date"
          label="mm/dd/yy "
          promptItems={promptItems}
          handleCheckbox={handleCheckbox}
          checkboxValue={checkboxes.date}
          handlePromptInputs={handlePromptInputs}
        />
        <PromptCheckbox
          name="dayDD"
          label="day and dd "
          promptItems={promptItems}
          handleCheckbox={handleCheckbox}
          checkboxValue={checkboxes.dayDD}
          handlePromptInputs={handlePromptInputs}
        />
        <PromptCheckbox
          name="time"
          label="12-hour"
          promptItems={promptItems}
          handleCheckbox={handleCheckbox}
          checkboxValue={checkboxes.time}
          handlePromptInputs={handlePromptInputs}
        />
        <PromptCheckbox
          name="militaryTime"
          label="24-hour "
          promptItems={promptItems}
          handleCheckbox={handleCheckbox}
          checkboxValue={checkboxes.militaryTime}
          handlePromptInputs={handlePromptInputs}
        />
      </div>
    </div>
  );
};

export default Prompt;
