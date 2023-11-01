import React from 'react';
import ProjectComponent from './ProjectComponent';

const ProjectsPage = () => {
  return (
    <div className='projects-container body night-mode-available text'>

      <div className="project">
        <h2 className='night-mode-available text'>Here are a few of my projects:</h2>
        <ProjectComponent
          title="One Piece Themed E-commerce"
          imageSrc="https://i.pinimg.com/736x/0d/a0/c0/0da0c0707b7499f60f4c7b714c727535.jpg"
          description="This application is an One Piece themed ecommerce application. For this App I used ReactJS and Bootstrap5 for the styling for the purpose of learning and testing out the front end skills I have learned so far. The components I made for this website can be reused for future works."
          githubLink="https://github.com/robohen/wanpi-ecommerce"
          liveLink="https://wanpiecommerce.netlify.app/"
        />
      </div>
      <div className='project'>
        <ProjectComponent
          title="Jobify"
          imageSrc="https://mern-project1-0.onrender.com/assets/main-bfab0516.svg"
          description="Developed a dynamic job posting and search application using the MERN (MongoDB, ExpressJS, React, NodeJS) stack. This project allowed job seekers to easily browse and apply for job listings while providing employers with a platform to post and manage job openings. (Job data was made using mockaroo.)"
          githubLink="https://github.com/robohen/MERN-project/tree/master"
          liveLink="https://mern-project1-0.onrender.com/"
        />
      </div>
    </div>
  );
};

export default ProjectsPage;