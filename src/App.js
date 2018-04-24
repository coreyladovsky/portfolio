import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/nav";
import About from "./components/about";
import Skills from "./components/skills";
import ProjectIndex from "./components/project_index";
import Contact from "./components/contact";
import { baseUrl } from "./index.js";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" component={NavBar} />
          <Switch>
            <Route exact path={baseUrl + "/about"} component={About} />
            <Route exact path={baseUrl + "/skills"} component={Skills} />
            <Route
              exact
              path={baseUrl + "/projects"}
              component={ProjectIndex}
            />
            <Route exact path={baseUrl + "/contact"} component={Contact} />
            <Route path={baseUrl + "/*"} component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
