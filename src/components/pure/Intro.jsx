import React from "react";
import "../../css/intro.css";
import icon from "../../img/intro-icon.png"

const Intro = () => {
    return(
        <div className="introduction">
            <div className="introduction-fonts">
                <h2>Hi, I'm Rodrigo</h2>
                <h4>Frontend Developer</h4>
            </div>
            <div className="icon">
                <img src={icon} alt=""/>
            </div>
        </div>
    );
}

export default Intro;
