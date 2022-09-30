import React from "react";

const toggleNavbar = () => {
    document.getElementsById("toggle-btn").classList.toggle('active');
}

const NavbarDropdown = () => {
    return(
        <div>
            <a href="#." onClick={ toggleNavbar } class="toggle-button" id="toggle-btn">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </a>
        </div>
    )
}

export default NavbarDropdown;