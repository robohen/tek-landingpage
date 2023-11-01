import React from 'react'

const ProjectComponent = ({title, imageSrc, description, githubLink, liveLink}) => {
  return (
    <div className="project">
      {imageSrc && (
        <a href={githubLink} className="netli">
          <img src={imageSrc} alt={title} className="mugiwara-crew" style={{ width: '40%' }} />
        </a>
      )}
      <div className="project-description night-mode-available text">
        <div className="firstDesc">
          {description}
          <span>
            <a className="link1" href={githubLink}>
              Github upload here.
            </a>
          </span>
          <span>
            <u><a className="link1" href={liveLink}>
              Live link here.
            </a></u>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;