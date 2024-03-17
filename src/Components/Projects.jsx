import React, { useEffect } from 'react';
import project from '../assets/project.png';


import './Project.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Projectsdata from './Project.json';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className='ProjectsContainer'>
      <div className="project" data-aos="fade-up">
        <div className="projectleft" data-aos="fade-right">
          <img src={project} alt="" />
        </div>
        <div className="projectright" data-aos="fade-left">
          <h1>Projects</h1>
          <p>Proficient in completing various types of projects, including web development. Skilled in utilizing a diverse range of technologies and frameworks to deliver high-quality solutions tailored to specific project requirements and objectives. </p>
        </div>
      </div>

      <div className="projectspart">
        
        <div className="allprojects" data-aos="fade-up">
          {Projectsdata.map((project, index) => (
            <div key={index}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              
              <a href={project.githubLink}>GitHub Link</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
