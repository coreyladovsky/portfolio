import React from 'react';
import { Link, withRouter } from "react-router-dom";
import resume from "../assets/resume.pdf";
import $ from "jquery";

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
    if(event.target.innerText) {
      let nextPage = event.target.innerText.toLowerCase();
      if(nextPage !== "resume") {
        this.props.history.push(`/${nextPage}`);

      }
    }
  }

  render () {
    return(
      <div>
        <ul onClick={this.handleSelection}>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>
            SKILLS
          </li>
          <li>CONTACT</li>
          <li>
            <a href={resume} className="resume-link" target="_blank">RESUME</a>
          </li>

        </ul>



      </div>
    );
  }
}

export default withRouter(Home);
