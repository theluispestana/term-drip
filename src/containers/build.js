import React from "react";
import Theme from "components/theme";
import Prompt from "components/prompt";
import Preview from "containers/preview";
import { fetchTheme } from "helpers/requests";

class Build extends React.Component {
  state = {
    checkboxes: {
      username: false,
      date: false,
      time: false,
    },
    promptItems: [],
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

  componentDidMount() {
    const themeId = this.props.match.params.id;
    themeId ? this.setTheme(themeId) : this.setTheme("2");
  }

  setTheme = (id) => {
    fetchTheme(id).then((theme) => {
      console.log("theme object from database: ", theme);
      theme.colors.forEach((colorObj) =>
        this.setState({
          colors: {
            ...this.state.colors,
            [colorObj.color_type]: colorObj.color,
          },
        })
      );
    });
  };

  handleChange = (e) => {
    const target = e.target;
    this.setState({
      colors: { ...this.state.colors, [target.name]: target.value },
    });
  };

  handleCheckbox = (e) => {
    const target = e.target;
    const checkboxes = { ...this.state.checkboxes };

    this.setState({
      checkboxes: { ...checkboxes, [target.name]: !checkboxes[target.name] },
    });

    this.handlePromptItems(target);
  };

  handlePromptItems = (target) => {
    const promptItems = this.state.promptItems;

    if (promptItems.some((item) => item.type === target.name)) {
      this.removePromptItem(target.name);
    } else {
      this.addPromptItem(target.name);
    }
  };

  handlePromptInputs = (e) => {
    const target = e.target;
    const [type, colorType] = target.name.split(" ");
    const promptItems = [...this.state.promptItems];
    const index = promptItems.findIndex((item) => item.type === type);
    console.log("index of colors prompt item obj: ", index);
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
    console.log("prompt items: ", this.state.promptItems);
    return (
      <div>
        <Theme
          colors={this.state.colors}
          fileURL={this.state.fileURL}
          fileName={this.state.fileName}
          handleChange={this.handleChange}
        />
        <Prompt
          checkboxes={this.state.checkboxes}
          promptItems={this.state.promptItems}
          handleCheckbox={this.handleCheckbox}
          handlePromptInputs={this.handlePromptInputs}
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
