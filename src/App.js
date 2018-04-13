import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/nav";
import Home from "./components/home";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import ProjectIndex from "./components/project_index";
import Contact from "./components/contact";

class App extends Component {
  // constructor() {
  //   super();
  //   this.navBar = this.navBar.bind(this);
  // }

  // navBar() {
  //   // debugger
  //   if(false ) {
  //     return(null);
  //   } else {
  //     return <Route path="/" component={NavBar} />;
  //   }
  // }
  render() {
    return (
      <BrowserRouter>

        <div className="App">
          <Route path="/" component={NavBar} />
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/projects" component={ProjectIndex} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/*" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
