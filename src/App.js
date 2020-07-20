import React from "react";
import {
  // BrowserRouter as Router,
  Route,
  Switch,
  HashRouter,
} from "react-router-dom";
import Build from "containers/build";
import Browse from "components/browse";
import Welcome from "containers/welcome";
import NavBar from "components/navBar";
import "styles/app.css";

class App extends React.Component {
  render() {
    return (
      <HashRouter basename="/term-drip">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/browse" component={Browse} />
          <Route path="/build/:id" component={Build} />
          <Route path="/build" component={Build} />
          <Route path="*" component={Welcome} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
