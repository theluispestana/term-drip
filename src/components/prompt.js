import React from "react";
import { parsePromptItems } from "helpers/promptHelper";
import PromptCheckbox from "containers/promptCheckbox";

const Prompt = (props) => {
  const { handleCheckbox, handlePromptInputs, promptItems, checkboxes } = props;
  return (
    <div>
      <h1>Create A Prompt</h1>
      <form>
        <PromptCheckbox
          name="username"
          label="Username "
          handleCheckbox={handleCheckbox}
          checkboxValue={checkboxes.username}
          handlePromptInputs={handlePromptInputs}
        />
        <PromptCheckbox
          name="date"
          label="Date "
          handleCheckbox={handleCheckbox}
          checkboxValue={checkboxes.date}
          handlePromptInputs={handlePromptInputs}
        />
        <PromptCheckbox
          name="time"
          label="Time "
          handleCheckbox={handleCheckbox}
          checkboxValue={checkboxes.time}
          handlePromptInputs={handlePromptInputs}
        />
      </form>
      <input
        type="text"
        name="prompt"
        readOnly
        value={parsePromptItems(promptItems)}
      />
    </div>
  );
};

export default Prompt;
