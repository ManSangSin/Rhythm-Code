import React, { useState } from "react";
import "./MapSection.css";
import dotMapImage from "../images/dot-map.png";
import ExpandIcon from "../images/ExpandIcon.svg";

function MapSection() {
	const [isFullScreen, setFullScreen] = useState(false);

	const toggleFullScreen = () => {
		setFullScreen(!isFullScreen);
	};


return (
	<div className={`map-section ${isFullScreen ? "fullscreen" : ""}`}>
		<div className="help-text">
			Click on locations to learn more about local rhythms
		</div>
		{isFullScreen ? (
			<div>
				<div
					className="exit-fullscreen-button"
					onClick={toggleFullScreen}
				>
					Click to exit full screen mode
				</div>
				<img src={dotMapImage} alt="Dot Map" />
			</div>
		) : (
			<div>
				<div className="expand-button">
					<img
						className="expand-icon"
						src={ExpandIcon}
						alt="Expand Icon"
						onClick={toggleFullScreen}
					/>
				</div>
				<img src={dotMapImage} alt="Dot Map" />
			</div>
		)}
	</div>
);
}
export default MapSection;