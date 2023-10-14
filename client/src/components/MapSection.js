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
						onKeyDown={handleKeyDown}
						tabIndex={0}
						role="button"
						aria-pressed={isFullScreen}
					>
						Click to exit full screen mode
					</div>
					<div className="full-screen-map">
						<img src={dotMapImage} alt="Dot Map" />
					</div>
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
					<div className="map-container">
						<img src={dotMapImage} alt="Dot Map" />
					</div>
				</div>
			)}
		</div>
	);
}

export default MapSection;
