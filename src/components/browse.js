import React from "react";
import { fetchThemes } from "helpers/requests";
import { createColorObj } from "helpers/themeHelper";
import Preview from "containers/preview";
import { Link } from "react-router-dom";
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
            <Preview
              key={theme.theme.id}
              colors={createColorObj(theme.terminal_colorscheme.colors)}
              promptItems={theme.prompt_items}
            />
            <Link to={`/build/${theme.theme.id}`}>See Theme</Link>
          </>
        ))}
      </div>
    );
  }
}

export default Browse;
