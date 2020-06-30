import React from "react";
import * as promptHelper from "helpers/promptHelper";

const PromptPreview = (props) => {
  const promptJSX = promptHelper.createPromptPreview(props.promptItems);
  return (
    <div style={{ color: props.colors["foreground"] }}>
      {promptJSX.map((prompt) => prompt)}
      <span>_</span>
    </div>
  );
};

export default PromptPreview;
