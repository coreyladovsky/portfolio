import React from "react";
import reduxPic from "../images/redux.png";
import "./skills.css";
import $ from "jquery";

class Skills extends React.Component {
  componentDidMount() {
    $(".menu-bars").css("color", "white");
    $("html").css("background", "linear-gradient(#0e222b, black)");
  }

  render() {
    return (
      <div>
        <ul className="all-skills">
          <li>
            <i className="devicon-react-plain colored skill" />
            React
          </li>
          <li className="redux-li">
            <img className="redux-pic" src={reduxPic} alt="" />
            Redux
          </li>
          <li>
            <i className="devicon-javascript-plain colored skill" />
            JavaScript
          </li>
          <li>
            <i className="devicon-ruby-plain colored skill" />
            Ruby
          </li>
          <li>
            <i className="devicon-rails-plain colored skill" />
            Rails
          </li>
          <li>
            <i className="devicon-postgresql-plain colored skill" />
            PostgreSql
          </li>
          <li>
            <i className="devicon-jquery-plain colored skill" />
            JQuery
          </li>
          <li>
            <i className="devicon-html5-plain colored skill" />
            HTML5
          </li>
          <li>
            <i className="devicon-css3-plain colored skill" />
            CSS3
          </li>
          <li>
            <i className="devicon-d3js-plain colored skill" />
            D3.js
          </li>
        </ul>
      </div>
    );
  }
}

export default Skills;
