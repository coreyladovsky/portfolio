import React from 'react';
import { withRouter } from "react-router-dom";
import resume from "../assets/resume.pdf";
import $ from "jquery";
import "./home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
  }

  componentDidMount() {
    if(this.props.match.path === "/*") {
    $("#navBar-container").hide();
    }
    
  }

  componentWillUnmount() {
    $("#navBar-container").show();
  }

  handleSelection(event) {
    // debugger
    if(event.target.innerText) {
      let nextPage = event.target.innerText.toLowerCase();
      if(nextPage !== "resume") {
        if(nextPage === "about") {
          this.props.history.push(`/`);
        } else {
          this.props.history.push(`/${nextPage}`);
        }
      } else {
        $(".resume-link").click();
      }
    }
  }

  render () {
    return(
      <div>
        <ul onClick={this.handleSelection} className="home-ul">
          <li className="about-li">ABOUT</li>
          <li className="projects-li">PROJECTS</li>
          <li className="skills-li">
            SKILLS
          </li>
          <li className="contact-li">CONTACT</li>

            <a href={resume} className="resume-link resume-li" target="_blank">RESUME</a>


        </ul>



      </div>
    );
  }
}

export default withRouter(Home);
