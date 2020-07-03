import React from "react";
import { createPromptPreview } from "helpers/promptHelper";

const PromptPreview = (props) => {
  const promptArr = createPromptPreview(props.promptItems);
  return (
    <div style={{ color: props.colors["foreground"] }}>
      {promptArr.map((prompt, index) => (
        <span key={index} style={prompt.style}>
          {prompt.text}
        </span>
      ))}
      <span>_</span>
    </div>
  );
};

export default PromptPreview;
