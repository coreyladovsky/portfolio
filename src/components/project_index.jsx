import React from "react";
import ProjectItem from "./project_item";
import { projectsArray } from '..//assets/projectsArray.js';
import "./project_index.css";
import $ from "jquery";
import background from "../images/back.jpg";

const ProjectIndex = () => {
    return (
      <div className="all-projects-container">
        {projectsArray.map(({title, liveLink, repoLink, description, image, facon}, i) => {
          let orderFirst = i % 2 ? "secondImg" : "firstImg"
          let orderSecond = i % 2 ? "firstImg" : "secondImg"
          return (
            <ProjectItem
               title={title}
               liveLink={liveLink}
               repoLink={repoLink}
               description={description}
                 image={image}
                 facon={facon}
                 orderFirst={orderFirst}
                 orderSecond={orderSecond}
               />
          )
        })}
      </div>
    );
}

export default ProjectIndex;
