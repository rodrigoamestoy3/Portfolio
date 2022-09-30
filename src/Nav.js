import NavbarContainer from "./container/NavbarContainer";
import React from "react";
import './css/nav.css';

function Navbar() {
    return(
        <div className="nav-bar">
            <NavbarContainer></NavbarContainer>
        </div>
    );
}

export default Navbar;