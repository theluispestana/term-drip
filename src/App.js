import React from "react";
import Build from "containers/build";
// import ReactDom from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/build" component={Build} />
      </Router>
    );
  }
}

export default App;
