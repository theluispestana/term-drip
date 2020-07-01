import React from "react";
import { fetchThemes } from "helpers/requests";
import { createColorObj } from "helpers/themeHelper";
import Preview from "containers/preview";
import { Link } from "react-router-dom";

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
            <Preview colors={createColorObj(theme.colors)} promptItems={[]} />
            <Link to={`/build/${theme.id}`} style={{ textDecoration: "none" }}>
              See Full Theme
            </Link>
          </>
        ))}
      </div>
    );
  }
}

export default Browse;
