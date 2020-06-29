import React, { useState } from "react";
// import { useInputChange } from "helpers/useInputChange";
import ColorInput from "components/colorInput";
import * as themeHelper from "helpers/themeHelper";

const Theme = (props) => {
  const [fileURL, setFileURL] = useState("");
  const [fileName, setFileName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const format = "iterm";
    const iterm = themeHelper.createTheme(props.colors, format);

    const URL = themeHelper.createFile(iterm);
    const name = "this is the best theme of all time.itermcolors";

    // this.setState({ fileURL: fileURL, fileName: fileName });
    setFileURL(URL);
    setFileName(name);
  };

  return (
    <div>
      <h1>Create A Theme</h1>
      <form onChange={props.handleChange}>
        {Object.keys(props.colors).map((key, index) => (
          <ColorInput
            key={key}
            name={key}
            label={themeHelper.colorLabels[index]}
            value={props.colors[key]}
          />
        ))}
        <button onClick={handleSubmit}>Create File</button>
      </form>
      {fileURL ? (
        <a href={fileURL} download={fileName}>
          Download Theme
        </a>
      ) : null}
    </div>
  );
};

export default Theme;
