import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Build from "containers/build";
import Browse from "components/browse";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/build" component={Build} />
        <Route exact path="/browse" component={Browse} />
      </Router>
    );
  }
}

export default App;
