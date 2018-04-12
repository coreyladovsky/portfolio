import React from "react";
import reduxPic from "../images/redux.png";
import "./skills.css";

export const Skills = () => {
  return (
    <div>
      <ul className="all-skills">
        <li>
          <i className="devicon-react-plain colored" />
          React
        </li>
        <li>
          <img src={reduxPic} alt="" />
          Redux
        </li>
        <li>
          <i className="devicon-javascript-plain colored" />
          JavaScript
        </li>
        <li>
          <i className="devicon-ruby-plain colored" />
          Ruby
        </li>
        <li>
          <i className="devicon-rails-plain colored" />
          Rails
        </li>
        <li>
          <i className="devicon-postgresql-plain colored" />
          PostgreSql
        </li>
        <li>
          <i className="devicon-jquery-plain colored" />
          JQuery
        </li>
        <li>
          <i className="devicon-html5-plain colored" />
          HTML5
        </li>
        <li>
          <i className="devicon-css3-plain colored" />
          CSS3
        </li>
        <li>
          <i className="devicon-d3js-plain colored" />
          D3.js
        </li>
      </ul>
    </div>
  );
};
