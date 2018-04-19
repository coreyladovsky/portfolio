import React from "react";
import { withRouter } from "react-router-dom";
import resume from "../assets/resume.pdf";
import "./nav.css";
import $ from "jquery";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.showing = false;
    this.handleSelection = this.handleSelection.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
    this.location  = this.location.bind(this);
  }

  toggleNav() {
    if (this.showing) {
      $(".nav-container").removeClass("slideInLeft");
      $(".nav-container").addClass("slideOutLeft");
      setTimeout(() => {
        $(".nav-container").css("display", "none");
      }, 500);
    } else {
      $(".nav-container").css("display", "grid");
      $(".nav-container").removeClass("slideOutLeft");
      $(".nav-container").addClass("slideInLeft");
    }
    this.showing = !this.showing;
  }

  handleSelection(event) {
    if (event.target.className === "li-selector") {
      let nextPage = event.target.innerText.toLowerCase();
      if (nextPage !== "resume") {
        this.props.history.push(`/${nextPage}`);
      }
    }
    this.toggleNav();
  }

  location() {
    if(this.props.location.pathname === "/projects") {
      return(
        <div className="project-header">PROJECTS</div>
      );
    } else if(this.props.location.pathname === "/skills") {
      return(
        <div className="project-header skill-header">SKILLS</div>
      );

    }
  }

  render() {
    return (
      <div id="navBarContainer">
        <div className="menu">
          <i className="fas fa fa-bars menu-bars" onClick={this.toggleNav} />
          {this.location()}
          <div></div>
        </div>
        <div>
          <div className="nav-container">
            <div className="close-nav">
              <div onClick={this.toggleNav}>x</div>
            </div>
            <ul onClick={this.handleSelection} className="nav-ul">
              <li className="about-nav">
                <div className="li-selector">ABOUT</div>
              </li>
              <li className="projects-nav">
                <div className="li-selector">PROJECTS</div>
              </li>
              <li className="skills-nav">
                <div className="li-selector">SKILLS</div>
              </li>
              <li className="contact-nav">
                <div className="li-selector">CONTACT</div>
              </li>
              <div className="li-selector">
                <a
                  href={resume}
                  className="resume-link-nav resume-nav"
                  target="_blank"
                >
                  RESUME
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
