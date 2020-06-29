import React from "react";
import Theme from "components/theme";
import Prompt from "components/prompt";
import * as themeHelper from "helpers/themeHelper";

class Build extends React.Component {
  state = {
    promptItems: [],
    fileURL: "",
    fileName: "",
    colors: {
      background: "",
      foreground: "",
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "",
      15: "",
    },
  };

  handleChange = (e) => {
    const target = e.target;
    this.setState({
      colors: { ...this.state.colors, [target.name]: target.value },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const format = "iterm";
    const iterm = themeHelper.createTheme(this.state.colors, format);

    const fileURL = themeHelper.createFile(iterm);
    const fileName = "this is the best theme of all time.itermcolors";

    this.setState({ fileURL: fileURL, fileName: fileName });
  };

  handleCheckbox = (e) => {
    const target = e.target;
    const promptItems = this.state.promptItems;

    if (promptItems.some((item) => item.type === target.name)) {
      this.removePromptItem(target.name);
    } else {
      this.addPromptItem(target.name);
    }
  };

  removePromptItem = (type) => {
    const promptItems = this.state.promptItems.filter((i) => i.type !== type);
    this.setState({ promptItems });
  };

  addPromptItem = (type) => {
    this.setState({
      promptItems: this.state.promptItems.concat({ type }),
    });
  };

  parsePromptItems = () => {
    let prompt = "";
    const promptItems = this.state.promptItems;
    promptItems.forEach((item) => {
      if (item.type === "username") {
        prompt += "%n";
      } else if (item.type === "date") {
        prompt += "%W";
      } else if (item.type === "time") {
        prompt += "%T";
      }
    });

    return `PROMPT="${prompt}"`;
  };

  render() {
    return (
      <div>
        <Theme
          colors={this.state.colors}
          fileURL={this.state.fileURL}
          fileName={this.state.fileName}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Prompt
          handleCheckbox={this.handleCheckbox}
          parsePromptItems={this.parsePromptItems}
        />
      </div>
    );
  }
}

export default Build;
