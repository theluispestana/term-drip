import React from "react";
import Theme from "components/theme";
import Prompt from "components/prompt";
import "styles/build.css";
import { fetchTheme } from "helpers/requests";
import {
  addOrRemovePromptItems,
  createPromptItemArr,
  setCheckboxes,
  addPromptColors,
} from "helpers/promptHelper";
import ThemeInfo from "components/themeInfo";
import { createThemeAndFile } from "helpers/themeHelper";
import { parsePromptItems } from "helpers/promptHelper";

class Build extends React.Component {
  state = {
    renderThemeInputs: true,
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
      theme.terminal_colorscheme.colors.forEach((colorObj) =>
        this.setState({
          colors: {
            ...this.state.colors,
            [colorObj.color_type]: colorObj.color,
          },
        })
      );
      this.setState({
        promptItems: createPromptItemArr(theme.prompt_items),
        checkboxes: setCheckboxes(theme.prompt_items),
      });
    });
  };

  handleInputChange = (e) => {
    const target = e.target;
    this.setState({ [target.name]: target.value });
  };

  handleColorChange = (e) => {
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
    const promptItems = addOrRemovePromptItems(
      this.state.promptItems,
      target.name
    );
    this.setState({ promptItems });
  };

  handlePromptInputs = (e) => {
    const promptItems = addPromptColors(e.target, [...this.state.promptItems]);
    this.setState({ promptItems });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const format = "iterm";
    // const iterm = themeHelper.createTheme(props.colors, format);
    // const URL = themeHelper.createFile(iterm);
    const fileURL = createThemeAndFile(this.state.colors, format);
    this.setState({ fileURL });
  };

  render() {
    const {
      colors,
      fileURL,
      fileName,
      checkboxes,
      promptItems,
      renderThemeInputs,
    } = this.state;
    return (
      <div id="build-container">
        <div id="tools">
          <Theme
            colors={colors}
            fileURL={fileURL}
            fileName={fileName}
            handleChange={this.handleColorChange}
          />
          <Prompt
            checkboxes={checkboxes}
            promptItems={promptItems}
            handleCheckbox={this.handleCheckbox}
            handlePromptInputs={this.handlePromptInputs}
          />
          <button></button>
        </div>
        <div id="preview">
          <ThemeInfo
            fileName={fileName}
            fileURL={fileURL}
            colors={colors}
            promptItems={promptItems}
            promptCode={parsePromptItems(promptItems)}
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default Build;
