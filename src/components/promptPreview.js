import React from "react";
import { createPromptPreview } from "helpers/promptHelper";

const PromptPreview = (props) => {
  const promptJSX = createPromptPreview(props.promptItems);
  return (
    <div style={{ color: props.colors["foreground"] }}>
      {promptJSX.map((prompt) => prompt)}
      <span>_</span>
    </div>
  );
};

export default PromptPreview;
