import React from "react";
import { fetchThemes } from "helpers/requests";
import { createColorObj } from "helpers/themeHelper";
import Preview from "containers/preview";
import { Link } from "react-router-dom";
import { createPromptItemArr } from "helpers/promptHelper";
// import { Link } from "react-router-dom";

class Browse extends React.Component {
  state = {
    themes: [],
  };

  componentDidMount() {
    fetchThemes().then((themes) => this.setState({ themes }));
  }

  render() {
    // console.log("browse themes: ", this.state.themes);
    // this.state.themes.forEach((theme) =>
    //   console.log(createColorObj(theme.colors))
    // );
    return (
      <div>
        {this.state.themes.map((theme) => (
          <>
            <Link to={`/build/${theme.theme.id}`}>
              <h1>{theme.theme.name}</h1>
            </Link>
            <Preview
              key={theme.theme.id}
              colors={createColorObj(theme.terminal_colorscheme.colors)}
              promptItems={createPromptItemArr(theme.prompt_items)}
            />
          </>
        ))}
      </div>
    );
  }
}

export default Browse;
