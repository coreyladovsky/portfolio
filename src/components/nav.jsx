import React from 'react';
import { withRouter } from "react-router-dom";
// import resume from "../assets/resume.pdf";
import "./nav.css";

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

  // <div> MENU </div>
  render () {
    return(
      <div id="navBar-container">
        <div className="menu" >
          <i className="fas fa fa-bars menu-bars" onClick={this.handleSelection}></i>
        </div>



      </div>
    );
  }
}

export default withRouter(NavBar);
