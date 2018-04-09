import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/nav";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        
        <div className="App">
          <Switch>
            <Route path="/" component={NavBar} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
