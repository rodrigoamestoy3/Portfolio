import React from "react";

class NavbarDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.target.classList.toggle('active');
    }

    render() {
    return(
        <div>
            <a href="#." onClick={ this.handleClick } class="toggle-button" id="toggle-btn">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </a>
        </div>
        );
    }   
}

export default NavbarDropdown;