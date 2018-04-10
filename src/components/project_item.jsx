import React from 'react';

class ProjectItem extends React.Component {
  render () {
    const { image, liveLink, repoLink, description, title } = this.props;
    return(
      <div>
        <div>title</div>
        <img src={image} alt=""/>
        <div>{description}</div>
       <a href={liveLink} target="_blank">Live</a>
       <a href={repoLink} target="_blank">Code</a>
      </div>
    );

  }
}

export default ProjectItem;
