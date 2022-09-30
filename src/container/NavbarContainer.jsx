import React from "react";
import NavbarDropdown from "../components/pure/NavbarDropdown";


const NavbarContainer = () => {
    return(
        <div className="nav-bar-container">
            <h1>Rodrigo Amestoy</h1>
            <NavbarDropdown></NavbarDropdown>
            <ul>
                <li><a href="#PROJECTS">Projects</a></li>
                <li><a href="#ABOUT">About</a></li>
                <li><a href="#CONTACT">Contact</a></li>
            </ul>
        </div>
    );
}

export default NavbarContainer;