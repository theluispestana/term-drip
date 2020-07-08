import React from "react";
import Preview from "containers/preview";
import "styles/browse.css";
import { fetchThemes } from "helpers/requests";
import { createColorObj } from "helpers/themeHelper";
import { Link } from "react-router-dom";
import { createPromptItemArr } from "helpers/promptHelper";

class Browse extends React.Component {
  state = {
    themes: [],
  };

  componentDidMount() {
    fetchThemes().then((themes) => this.setState({ themes }));
  }

  render() {
    return (
      <div id="browse">
        {this.state.themes.map((theme) => (
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
    );
  }
}

export default Browse;
