import React from 'react';
import reduxPic from '../images/redux.png';

export const Skills = () => {
  return(
    <div>
      <li>
        <i className="devicon-react-plain colored"></i>
        React
      </li>
        <li>
        <img src={reduxPic} alt=""/>
        Redux
      </li>
      <li>
        <i className="devicon-javascript-plain colored"></i>
        JavaScript
      </li>
      <li>
        <i className="devicon-ruby-plaincolored"></i>
        Ruby
      </li>
      <li>
        <i className="devicon-rails-plain colored"></i>
        Rails
      </li>
      <li>
        <i className="devicon-postgresql-plain colored"></i>
        PostgreSql
      </li>
      <li>
        <i className="devicon-jquery-plain colored"></i>
        JQuery
      </li>
      <li>
        <i className="devicon-html5-plain colored"></i>
        HTML5
      </li>
      <li>
        <i className="devicon-css3-plain colored"></i>
        CSS3
      </li>
      <li>
        <i className="devicon-d3js-plain colored"></i>
        D3.js
      </li>

    </div>
  );
};
