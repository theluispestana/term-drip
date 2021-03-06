import React from "react";

const ThemeInfo = (props) => {
  const {
    fileName,
    fileURL,
    handleInputChange,
    handleSubmit,
    promptCode,
  } = props;

  return (
    <div>
      <label htmlFor="fileName">Name this theme: </label>
      <input
        type="text"
        name="fileName"
        value={fileName}
        onChange={handleInputChange}
      />
      <br />
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
