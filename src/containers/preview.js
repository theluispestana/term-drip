import React from "react";
import PromptPreview from "components/promptPreview";
import "styles/preview.css";

const Preview = (props) => {
  return (
    <div>
      <h1>Preview</h1>
      <div className="preview">
        <h2>test</h2>
        <PromptPreview colors={props.colors} promptItems={props.promptItems} />
      </div>
    </div>
  );
};

export default Preview;
