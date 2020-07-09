import React from "react";
import PromptPreview from "components/promptPreview";
import ColorPreview from "components/colorPreview";
import "styles/preview.css";

const Preview = (props) => {
  const { colors, promptItems } = props;
  return (
    <>
      <div
        className="preview"
        style={{ backgroundColor: colors["background"] }}
      >
        <div id="tool-bar">
          <span></span>
        </div>
        <div className="color-container">
          {Object.keys(colors).map((key, index) =>
            Number(key) + 1 ? (
              <ColorPreview key={index} color={colors[key]} />
            ) : null
          )}
        </div>
        <PromptPreview colors={colors} promptItems={promptItems} />
      </div>
    </>
  );
};

export default Preview;
