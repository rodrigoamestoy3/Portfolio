import React from "react";
import '../css/footer.css';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import Ressume from '../img/Rodrigo_Amestoy_en.pdf';

const openGithub = () => {
    window.open('https://github.com/rodrigoamestoy', '_blank');
}
const openLinkedin = () => {
    window.open('https://www.linkedin.com/in/rodrigo-amestoy/', '_blank');
}

const Footer = () => {
    return(
        <div className="footer">
            <div class="icons">
                <img src={github} onClick={ openGithub } alt="" id="github"/>
                <img src={linkedin} onClick={ openLinkedin } alt="" id="linkedin"/>
                <a href={Ressume} download="">Download Resume</a>
            </div>
        </div>
    );
}

export default Footer;