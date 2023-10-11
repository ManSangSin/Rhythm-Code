import React, { useState } from "react";
import "./MapSection.css";
import dotMapImage from "../images/dot-map.png";
import ExpandIcon from "../images/ExpandIcon.svg";

function MapSection() {
	const [isFullScreen, setFullScreen] = useState(false);

	const toggleFullScreen = () => {
		setFullScreen(!isFullScreen);
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			toggleFullScreen();
		}
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
					//added this part to prevent Eslint rule error and also for accessability
					onKeyDown={handleKeyDown}
					tabIndex={0}
					role="button"
					aria-pressed={isFullScreen}
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
						onKeyDown={handleKeyDown}
						tabIndex={0}
						role="button"
						aria-pressed={isFullScreen}
					/>
				</div>
				<img src={dotMapImage} alt="Dot Map" />
			</div>
		)}
	</div>
);
}
export default MapSection;