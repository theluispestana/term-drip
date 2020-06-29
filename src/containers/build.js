import React from "react";
import Theme from "components/theme";
import Prompt from "components/prompt";
import Preview from "containers/preview";

class Build extends React.Component {
  state = {
    promptItems: [],
    colors: {
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
      background: "",
      foreground: "",
    },
  };

  handleChange = (e) => {
    const target = e.target;
    this.setState({
      colors: { ...this.state.colors, [target.name]: target.value },
    });
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

  render() {
    return (
      <div>
        <Theme
          colors={this.state.colors}
          fileURL={this.state.fileURL}
          fileName={this.state.fileName}
          handleChange={this.handleChange}
        />
        <Prompt
          handleCheckbox={this.handleCheckbox}
          promptItems={this.state.promptItems}
        />
        <Preview
          colors={this.state.colors}
          promptItems={this.state.promptItems}
        />
      </div>
    );
  }
}

export default Build;
