import React from "react";
import '../css/aboutme.css';
import HTML from '../img/html-5.png';
import CSS from '../img/css-3.png';
import JS from '../img/js.png';
import SQL from '../img/sql-server.png';
import BOOTSTRAP from '../img/bootstrap.png';
import REACT from '../img/react.png';

const AboutMe = () => {
    return(
        <div class="about-container">
        <div class="about-me">
          <h2 id="ABOUT">About Me</h2>
          <div class="info-skills">
            <h4 id="info-title">Skills</h4>
            <div class="rows">
                <div class="col">
                  <div class="row"><img src={HTML}  alt=""/></div>
                  <div class="row"><img src={CSS} alt=""/></div>
                  <div class="row"><img src={JS} alt=""/></div>
                </div>
                <div class="col">
                  <div class="row"><img src={SQL} alt=""/></div>
                  <div class="row"><img src={BOOTSTRAP} alt=""/></div>
                  <div class="row"><img src={REACT} alt=""/></div>
                </div>
              </div>
          </div>
          <div class="info-about">
            <h4 id="info-title">My Passion</h4>
            <p>I always wanted to develop myself in the IT world, and when I found the opportunity I jumped right into it. I started with enrolling myself in JaP and constantly searching for more and more information, managing not only to suceed in JaP but also reach a great base of programming knowledge which nowdays gives me a solid trust to start my professional career as a developer</p>
          </div>
        </div>
      </div>
    )
}

export default AboutMe;