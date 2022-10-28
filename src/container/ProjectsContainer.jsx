import React from "react";
import '../css/projects.css';
import Presentation from "../components/pure/Swiper";

class ProjectsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
}

export default ProjectsContainer;