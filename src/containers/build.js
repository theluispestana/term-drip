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

  componentDidMount() {
    const themeId = this.props.match.params.id;
    if (themeId) this.setTheme(themeId);
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

  handleColorChange = (color, name) => {
    this.setState({
      colors: { ...this.state.colors, [name]: color.hex },
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

  handlePromptInputs = (color, name) => {
    // console.log("name:", name);
    // console.log("color:", color);
    const promptItems = addPromptColors({ name: name, value: color.hex }, [
      ...this.state.promptItems,
    ]);
    this.setState({ promptItems });
    // console.log("promptItems after colorchange: ", this.state.promptItems);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.fileSelect) {
      const format = this.state.fileSelect.split("-")[0];
      const fileURL = createThemeAndFile(this.state.colors, format);
      this.setState({ fileURL });
    }
  };

  handleBoolean = (e) => {
    const target = e.target;
    this.setState({ [target.name]: !this.state[target.name] });
  };

  handleFileSelectChange = (e) => {
    const value = e.target.value;
    console.log("value: ", value);
    console.log("entire event", e);
    this.setState({ fileSelect: value });
  };

  render() {
    const {
      colors,
      fileURL,
      fileName,
      checkboxes,
      promptItems,
      renderThemeInputs,
      fileSelect,
    } = this.state;
    return (
      <div id="build-container">
        <div id="tools">
          {renderThemeInputs ? (
            <Theme
              colors={colors}
              fileURL={fileURL}
              fileName={fileName}
              handleChange={this.handleColorChange}
            />
          ) : (
            <Prompt
              checkboxes={checkboxes}
              promptItems={promptItems}
              handleCheckbox={this.handleCheckbox}
              handlePromptInputs={this.handlePromptInputs}
            />
          )}
          <button name="renderThemeInputs" onClick={this.handleBoolean}>
            {renderThemeInputs ? "Show Prompt Tools" : "Show Terminal Tools"}
          </button>
        </div>
        <div id="preview">
          <ThemeInfo
            fileName={fileName}
            fileURL={fileURL}
            fileSelect={fileSelect}
            colors={colors}
            promptItems={promptItems}
            promptCode={parsePromptItems(promptItems)}
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
            handleFileSelectChange={this.handleFileSelectChange}
          />
        </div>
      </div>
    );
  }
}

export default Build;
