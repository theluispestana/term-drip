import React from "react";

const FileSelect = (props) => {
  const { value, handleFileSelectChange } = props;
  return (
    <select
      name="filetype"
      id="file-select"
      value={value}
      onChange={handleFileSelectChange}
    >
      <option value="defualt">select a terminal format</option>
      <option value="iterm-itermcolors">iterm</option>
      <option value="guake-sh">guake</option>
      <option value="sublime-tmTheme">sublime/textmate</option>
      <option value="xresources-xresources">xresources</option>
      <option value="json-json">json</option>
      <option value="text-txt">text</option>
    </select>
  );
};

export default FileSelect;
