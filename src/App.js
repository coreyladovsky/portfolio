import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from './components/nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        
          <Route path="/" component={NavBar} />

      </div>
    );
  }
}

export default App;
