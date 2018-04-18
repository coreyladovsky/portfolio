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
  }

  toggleNav() {
    if (this.showing) {
      $(".navContainer").removeClass("slideInLeft");
      $(".navContainer").addClass("slideOutLeft");
      setTimeout(() => {
        $(".navContainer").css("display", "none");
      }, 500);
    } else {
      $(".navContainer").css("display", "grid");
      $(".navContainer").removeClass("slideOutLeft");
      $(".navContainer").addClass("slideInLeft");
    }
    this.showing = !this.showing;
  }

  handleSelection(event) {
    if (event.target.className === "liSelector") {
      let nextPage = event.target.innerText.toLowerCase();
      if (nextPage !== "resume") {
        this.props.history.push(`/${nextPage}`);
      }
    }
    this.toggleNav();
  }

  render() {
    return (
      <div id="navBarContainer">
        <div className="menu">
          <i className="fas fa fa-bars menuBars" onClick={this.toggleNav} />
        </div>
        <div>
          <div className="navContainer">
            <div className="closeNav">
              <div onClick={this.toggleNav}>x</div>
            </div>
            <ul onClick={this.handleSelection} className="navUl">
              <li className="about-nav">
                <div className="liSelector">ABOUT</div>
              </li>
              <li className="projects-nav">
                <div className="liSelector">PROJECTS</div>
              </li>
              <li className="skills-nav">
                <div className="liSelector">SKILLS</div>
              </li>
              <li className="contact-nav">
                <div className="liSelector">CONTACT</div>
              </li>
              <div className="liSelector">
                <a
                  href={resume}
                  className="resume-link-nav resumeNav"
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
