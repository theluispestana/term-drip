import React from "react";
import { parsePromptItems } from "helpers/promptHelper";
import PromptCheckbox from "containers/promptCheckbox";

const Prompt = (props) => {
  const { handleCheckbox, handlePromptInputs, promptItems, checkboxes } = props;
  return (
    <div>
      <h1>Create A Prompt</h1>
      <form onClick={handleCheckbox}>
        <PromptCheckbox
          name="username"
          label="Username "
          checkboxValue={checkboxes.username}
          handlePromptInputs={handlePromptInputs}
        />
        <PromptCheckbox
          name="date"
          label="Date "
          checkboxValue={checkboxes.date}
          handlePromptInputs={handlePromptInputs}
        />
        <PromptCheckbox
          name="time"
          label="Time "
          checkboxValue={checkboxes.time}
          handlePromptInputs={handlePromptInputs}
        />
      </form>
      <input type="text" name="prompt" value={parsePromptItems(promptItems)} />
    </div>
  );
};

export default Prompt;
