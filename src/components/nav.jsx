import React from 'react';
import { withRouter } from "react-router-dom";
import resume from "../assets/resume.pdf";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event) {
          this.props.history.push(`/home`);

    // if(event.target.innerText) {
    //   let nextPage = event.target.innerText.toLowerCase();
    //   if(nextPage !== "resume") {
    //     if(nextPage === "about") {
    //       this.props.history.push(`/`);
    //     } else {
    //       this.props.history.push(`/${nextPage}`);
    //     }
    //   }
    // }
  }

  render () {
    return(
      <div id="navBar-container">
        <ul onClick={this.handleSelection}>
          <i class="fas fa fa-bars"></i>
          <div> MENU </div>
        </ul>



      </div>
    );
  }
}

export default withRouter(NavBar);
