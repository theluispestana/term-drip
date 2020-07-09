import React from "react";
import Preview from "containers/preview";
import "styles/browse.css";
import { fetchThemes } from "helpers/requests";
import { createColorObj } from "helpers/themeHelper";
import { Link } from "react-router-dom";
import { createPromptItemArr } from "helpers/promptHelper";

class Browse extends React.Component {
  state = {
    search: "",
    themes: [],
  };

  componentDidMount() {
    fetchThemes().then((themes) => {
      this.setState({ themes });
    });
  }

  handleChange = (e) => {
    const target = e.target;
    this.setState({ [target.name]: target.value });
  };

  render() {
    const filteredThemes = this.state.themes.filter((theme) =>
      theme.theme.name.includes(this.state.search)
    );
    return (
      <div id="browse-container">
        <div id="filter-options">
          {/* <label htmlFor="search">Search:</label> */}
          <input
            name="search"
            value={this.state.search}
            placeholder={"Search Themes"}
            onChange={this.handleChange}
          />
        </div>
        <div id="browse">
          {filteredThemes.map((theme) => (
            <div key={theme.theme.id} id="preview-container">
              <Link to={`/build/${theme.theme.id}`}>
                <h1>{theme.theme.name}</h1>
              </Link>
              <Preview
                colors={createColorObj(theme.terminal_colorscheme.colors)}
                promptItems={createPromptItemArr(theme.prompt_items)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Browse;
