import React from "react";
import ProjectItem from "./project_item";
import help from "../images/help.jpg";

class Projects extends React.Component {
  render() {
    return (
      <div>
        <ProjectItem
          title={"Help"}
          liveLink={"http://www.corey-ladovsky-help.club"}
          repoLink={"https://github.com/coreyladovsky/help"}
          description={"A single page application in the style of Yelp where users are able to rate and review restaurants. Built with Rails, React, Redux, AWS, CSS3, HTML5, and PostgreSQL"}
          image={help}
        />
      </div>
    );
  }
}

export default Projects;
