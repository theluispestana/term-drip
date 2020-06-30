import React from "react";
import * as promptHelper from "helpers/promptHelper";

const PromptPreview = (props) => {
  const promptJSX = promptHelper.createPromptPreview(props.promptItems);
  return (
    <div>
      {promptJSX.map((prompt) => prompt)}
      <span style={{ color: "white" }}>_</span>
    </div>
  );
};

export default PromptPreview;
