import React, {Component} from "react";
import Image from "../assets/img/header-image.png";

class Header extends Component {
    render(){
        return(
            <header className="header-section">
                <img className="header-image" src={Image} alt="Cakes By Emily Eve Header"/>
                <div className="header-content">
                    <h1 className="header-title">Cakes By Emily Eve</h1>
                    <h2 className="header-subtitle">Experience Love At First Bite!</h2>
                    <button>Book Now!</button>
                </div>
            </header>
        )
    }
}

export default Header;