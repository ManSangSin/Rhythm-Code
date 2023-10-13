import React from "react";
import cross from "../assets/cross.svg";
import logo from "../assets/cyf_logo.png";

const Header = () => {
    return (
        <div>
            <span>decodenoir.org</span>
            <img src={cross} alt="cross icon" />
            <img src={logo} alt="cyf logo" />
        </div>
    );
};

export default Header;