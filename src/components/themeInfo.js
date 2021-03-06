import React, { useState } from "react";
import Preview from "containers/preview";
import { postTheme } from "helpers/requests";
import FileSelect from "./fileSelect";

const ThemeInfo = (props) => {
  const {
    fileName,
    fileURL,
    colors,
    promptCode,
    promptItems,
    handleInputChange,
    handleSubmit,
    handleFileSelectChange,
    fileSelect,
  } = props;
  const fileExtension = fileSelect ? fileSelect.split("-")[1] : "";
  const [saveError, setSaveError] = useState("");
  const [saveSuccess, setSaveSuccess] = useState("");

  const handleSave = () => {
    postTheme(fileName, colors, promptItems)
      .then((json) => {
        setSaveError("");
        setSaveSuccess("save successful");
      })
      .catch((error) => {
        if (error.message === "401") {
          setSaveError("login to save a theme");
        } else if (error.message === "406") {
          setSaveError("invalid name");
        }
        setSaveSuccess("");
      });
  };

  return (
    <div id="preview-container">
      <div id="save-theme">
        {saveError ? <span style={{ color: "red" }}>{saveError}</span> : null}
        {saveSuccess ? (
          <span style={{ color: "blue" }}>{saveSuccess}</span>
        ) : null}
        <input
          type="text"
          name="fileName"
          value={fileName}
          placeholder="Name this theme"
          onChange={handleInputChange}
        />
        <button onClick={handleSave}>Save Theme</button>
      </div>
      <br />
      <Preview colors={colors} promptItems={promptItems} />
      <div id="download">
        <label htmlFor="prompt">Add this to your ZSH file: </label>
        <input type="text" name="prompt" readOnly value={promptCode} />
        <br />
        <FileSelect
          value={fileSelect}
          handleFileSelectChange={handleFileSelectChange}
        />
        <button onClick={handleSubmit}>Compile Theme</button>
        <br />
        {fileURL ? (
          <a href={fileURL} download={`${fileName}.${fileExtension}`}>
            Download
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default ThemeInfo;
