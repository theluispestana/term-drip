import React, { useState } from "react";
import ColorInput from "components/colorInput";
import * as themeHelper from "helpers/themeHelper";
import { useInputChange } from "helpers/useInputChange";

const Theme = (props) => {
  const [fileURL, setFileURL] = useState("");
  const [input, handleInputChange] = useInputChange();

  const handleSubmit = (e) => {
    e.preventDefault();
    const format = "iterm";
    const iterm = themeHelper.createTheme(props.colors, format);
    const URL = themeHelper.createFile(iterm);
    setFileURL(URL);
  };

  const { colors, handleChange } = props;
  return (
    <div>
      <h1>Create A Theme</h1>

      <label htmlFor="fileName">Name this theme: </label>
      <input
        type="text"
        name="fileName"
        value={input.fileName}
        onChange={handleInputChange}
      />

      <form>
        {Object.keys(colors).map((key, index) => (
          <ColorInput
            key={key}
            name={key}
            label={themeHelper.colorLabels[index]}
            handleChange={handleChange}
            value={colors[key]}
          />
        ))}
        <button onClick={handleSubmit}>Create File</button>
      </form>

      {fileURL ? (
        <a href={fileURL} download={`${input.fileName}.itermcolors`}>
          Download Theme
        </a>
      ) : null}
    </div>
  );
};

export default Theme;
