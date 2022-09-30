import React from "react";
import '../css/projects.css';
import ECOMMERCE from '../img/ecommerce.jpg';
import TODOLIST from '../img/todolist.jpg';
import NASA from '../img/nasa.jpg';
import Presentation from "../components/pure/Swiper";

const ProjectsContainer = () => {
    return(
    <div className="projects-container">
        <div className="projects-title">
          <h2 id="PROJECTS">Projects</h2>
        </div>
            <Presentation></Presentation>
            <figcaption className="p-fig">Tap the images</figcaption>
        <div className="more-projects">
            <button id="more-projects">MORE PROJECTS</button>
            <button id="more-projects2">REPOSITORY</button>
        </div>

      </div>
    );
}

export default ProjectsContainer;