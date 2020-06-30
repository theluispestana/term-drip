import React from "react";
import Theme from "components/theme";
import Prompt from "components/prompt";
import Preview from "containers/preview";

class Build extends React.Component {
  state = {
    promptItems: [],
    colors: {
      background: "#272822",
      foreground: "#F1EBEB",
      0: "#48483E",
      1: "#DC2566",
      2: "#8FC029",
      3: "#D4C96E",
      4: "#55BCCE",
      5: "#9358FE",
      6: "#56B7A5",
      7: "#ACADA1",
      8: "#76715E",
      9: "#FA2772",
      10: "#A7E22E",
      11: "#E7DB75",
      12: "#66D9EE",
      13: "#AE82FF",
      14: "#66EFD5",
      15: "#CFD0C2",
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
