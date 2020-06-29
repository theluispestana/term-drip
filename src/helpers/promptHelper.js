// import React from "react";

// creates and return proper prompt for code preview
export const parsePromptItems = (promptItems) => {
  let prompt = "";
  promptItems.forEach((item) => {
    if (item.type === "username") {
      prompt += "%n";
    } else if (item.type === "date") {
      prompt += "%W";
    } else if (item.type === "time") {
      prompt += "%T";
    }
  });

  return `PROMPT="${prompt}"`;
};

// export const createPromptPreview = (promptItems) => {

// };

// export const addPromptItem = (type) => {
//   this.setState({
//     promptItems: this.state.promptItems.concat({ type }),
//   });
// };

// export const removePromptItem = (type) => {
//   const promptItems = this.state.promptItems.filter((i) => i.type !== type);
//   this.setState({ promptItems });
// };
