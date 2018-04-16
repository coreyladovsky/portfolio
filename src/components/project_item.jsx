import React from "react";
import "./project_item.css";
import $ from "jquery";


class ProjectItem extends React.Component {

  componentDidMount() {
    $(".menu-bars").css("color", "black");
    $("html").css("background", "white");

  }

  render() {
    const { image, liveLink, repoLink, description, title, facon, orderFirst, orderSecond } = this.props;
    return (
      <div className="project-container">
        <div className={"img-container " + orderFirst}>
          <div className="blue-effect"></div>
          <img className="project-image" src={image} alt="" />
          <i className={facon} aria-hidden="true"></i>
        </div>
        <div className={"project-info-container " + orderSecond}>
          <h2 className="project-title">{title}</h2>
          <div className="project-description">{description}</div>
          <div className="project-links">
            <a href={liveLink} target="_blank">
              Live
            </a>
            •
            <a href={repoLink} target="_blank">
              Code
            </a>
          </div>

        </div>

      </div>
    );
  }
}

export default ProjectItem;
