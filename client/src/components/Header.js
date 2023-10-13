import React from "react";
import cross from "../assets/cross.svg";
import logo from "../assets/cyf_logo.png";
import "./Header.css";

const decodenoir_url = "https://www.decodenoir.org/";
const cyf_url = "https://codeyourfuture.io/";


const Header = () => {
    return (
        <header>
            <div className="header-logo_container">
                <a href={decodenoir_url}>
                    <span>decodenoir.org</span>
                </a>
                <img src={cross} alt="cross icon" />
                <a href={cyf_url}>
                    <img src={logo} alt="cyf logo" />
                </a>
            </div>
        </header>
    );
};

export default Header;