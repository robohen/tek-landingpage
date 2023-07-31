import React from 'react'

const ProjectComponent = ({title, imageSrc, description, githubLink}) => {
  return (
    <div className="project">
      {imageSrc && (
        <a href={githubLink} className="netli">
          <img src={imageSrc} alt={title} className="mugiwara-crew" style={{ width: '50%' }} />
        </a>
      )}
      <div className="project-description night-mode-available text">
        {/* Description goes here, styling needs to be done*/}
        <div className="firstDesc">
          {description}
          <span>
            <a className="link1" href={githubLink}>
              Github upload here.
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;