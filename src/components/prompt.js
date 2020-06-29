import React from "react";
import * as promptHelper from "helpers/promptHelper";

const Prompt = (props) => {
  return (
    <div>
      <h1>Create A Prompt</h1>
      <form onClick={props.handleCheckbox}>
        <label htmlFor="username">Username</label>
        <input type="checkbox" name="username" />
        <br />

        <label htmlFor="date">Date</label>
        <input type="checkbox" name="date" />
        <br />

        <label htmlFor="time">Time</label>
        <input type="checkbox" name="time" />
        <br />
      </form>
      <input
        type="text"
        name="prompt"
        value={promptHelper.parsePromptItems(props.promptItems)}
      />
    </div>
  );
};

export default Prompt;
