import React from "react";
import cross from "../images/cross.svg";
import logo from "../images/cyf_logo.png";
import "./Header.css";

const decodenoir_url = "https://www.decodenoir.org/";
const cyf_url = "https://codeyourfuture.io/";

const Header = () => {
	return (
		<header>
			<div className="header-logo_container">
				{/* rel needs to be specified when target is used as security risk for older browsers */}
				<a
					href={decodenoir_url}
					target="_blank"
					rel="noreferrer"
					className="header-logo-decodenoir-container"
				>
					<span className="header-logo-decodenoir">decodenoir.org</span>
				</a>
				<img src={cross} alt="cross icon" className="header-cross-icon" />
				<a
					href={cyf_url}
					target="_blank"
					rel="noreferrer"
					className="header-logo-cyf-container"
				>
					<img className="header-logo-cyf" src={logo} alt="cyf logo" />
				</a>
			</div>
		</header>
	);
};

export default Header;
