import React from 'react';
import ProjectComponent from './ProjectComponent';

const ProjectsPage = () => {
  return (
    <div>
      <h2>Here are a few of my projects:</h2>
      <ProjectComponent
        title="One Piece Themed E-commerce"
        imageSrc="https://i.pinimg.com/736x/0d/a0/c0/0da0c0707b7499f60f4c7b714c727535.jpg"
        description="This application is an One Piece themed ecommerce application. For this App I used ReactJS and Bootstrap5 for the styling for the purpose of learning and testing out the front end skills I have learned so far. The components I made for this website can be reused for future works."
        githubLink="https://github.com/robohen/wanpi-ecommerce"
      />
      <ProjectComponent
        title="Weight Training App"
        imageSrc="https://i.pinimg.com/originals/d2/42/22/d242228e9ad2fa6abd187fc55c192248.gif"
        description="I am using ReactJS to make a weight training application so I can personally track my progress. This is the project I am currently working on and will add commits to this regularly. It will have exercises which I tend to favor towards and will have different respond messages that display based on performance for the individual to track progress."
        githubLink="https://github.com/robohen/Workout-app"
      />
    </div>
  );
};

export default ProjectsPage;