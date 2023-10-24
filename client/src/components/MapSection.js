/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useState } from "react";
import "./MapSection.css";
import MyMap from "../components/MyMap";
import ExpandIconDay from "../images/ExpandIconDay.svg";
import ExpandIconNight from "../images/ExpandIconNight.svg";
import Button from "react-bootstrap/Button";

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

	const expandIcon = isNightMode ? ExpandIconNight : ExpandIconDay;

	return (
		<div
			className={`map-section ${isFullScreen ? "fullscreen" : ""} ${
				isNightMode ? "night" : "day"
			}`}
		>
			<div className="bootstrap-container">
				<span>Click on locations to learn more about local rhythms</span>
				<Button
					variant={isNightMode ? "dark" : "light"}
					onClick={toggleNightMode}
					className={isNightMode ? "bootstrap-night" : "bootstrap-light"}
				>
					{isNightMode ? "Light Mode" : "Dark Mode"}
				</Button>
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
						<MyMap isNightMode={isNightMode} />
					</div>
				</div>
			) : (
				<div>
					<div className="expand-button">
						<img
							className="expand-icon"
							src={expandIcon}
							alt="Expand Icon"
							onClick={toggleFullScreen}
							onKeyDown={handleKeyDown}
							tabIndex={0}
							role="button"
							aria-pressed={isFullScreen}
						/>
					</div>
					<div className="map-container">
						<MyMap isNightMode={isNightMode} />
					</div>
				</div>
			)}
		</div>
	);
}

export default MapSection;
