import React from "react";
import Preview from "containers/preview";

const ThemeInfo = (props) => {
  const {
    fileName,
    fileURL,
    colors,
    promptItems,
    handleInputChange,
    handleSubmit,
    promptCode,
  } = props;

  const handleSave = () => {};

  return (
    <div>
      <label htmlFor="fileName">Name this theme: </label>
      <input
        type="text"
        name="fileName"
        value={fileName}
        onChange={handleInputChange}
      />
      <button onClick={handleSave}>Save Theme</button>
      <br />
      <Preview colors={colors} promptItems={promptItems} />
      <label htmlFor="prompt">Add this to your ZSH file: </label>
      <input type="text" name="prompt" readOnly value={promptCode} />
      <br />
      <button onClick={handleSubmit}>Compile Theme</button>
      {fileURL ? (
        <a href={fileURL} download={`${fileName}.itermcolors`}>
          Download
        </a>
      ) : null}
    </div>
  );
};

export default ThemeInfo;
