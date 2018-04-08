import React from 'react';
import { Link, withRouter } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event) {

  }

  render () {
    return(
      <div>
        <ul onClick={this.handleSelection}>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>RESUME</li>
          <li>CONTACT</li>
        </ul>



      </div>
    );
  }
}

export default NavBar;
