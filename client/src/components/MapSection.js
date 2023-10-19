import React, { useState } from "react";
import "./MapSection.css";
import MyMap from "../components/MyMap";
import ExpandIcon from "../images/ExpandIcon.svg";

function MapSection() {
	const [isFullScreen, setFullScreen] = useState(false);
	const [isNightMode, setNightMode] = useState(false);

	const toggleFullScreen = () => {
		setFullScreen(!isFullScreen);
	};

	const toggleNightMode = () => {
		setNightMode(!isNightMode);
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			toggleFullScreen();
		}
	};

	return (
		<div
			className={`map-section ${isFullScreen ? "fullscreen" : ""} ${
				isNightMode ? "night" : ".map-section"
			}`}
		>
			<div className="help-text">
				Click on locations to learn more about local rhythms
			</div>
			<div>
				<button onClick={toggleNightMode}>
					{isNightMode ? "Switch to Day Mode" : "Switch to Night Mode"}
				</button>
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
						<MyMap />
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
						<MyMap />
					</div>
				</div>
			)}
		</div>
	);
}

export default MapSection;
