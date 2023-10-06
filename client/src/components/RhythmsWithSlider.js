import React, { useState, useEffect } from "react";
import DualRangeSlider from "./DualRangeSlider";

const RhythmsWithSlider = ({ rhythms }) => {
	const [selectedRange, setSelectedRange] = useState([1400, 2023]);
	const [filteredRhythms, setFilteredRhythms] = useState([]);

	// Update rhythms when user change the slider
	useEffect(() => {
		const updatedRhythms = rhythms.filter((rhythm) => {
			const rhythmStartYear = parseInt(rhythm.timePeriod.split("-")[0]);
			const rhythmEndYear = parseInt(rhythm.timePeriod.split("-")[1]);
			return (
				rhythmStartYear >= selectedRange[0] && rhythmEndYear <= selectedRange[1]
			);
		});
		setFilteredRhythms(updatedRhythms);
	}, [selectedRange, rhythms]);

	return (
		<div>
			<DualRangeSlider
				selectedRange={selectedRange}
				onChangeRange={setSelectedRange}
			/>
			<div style={{ display: "flex", flexDirection: "column" }}>
				{filteredRhythms.map((rhythm, index) => (
					<div key={index} style={{ display: "flex", alignItems: "center" }}>
						<div
							// all inline styles are just for testing
							style={{
								width: "20px",
								height: "20px",
								backgroundColor: "blue",
								borderRadius: "50%",
								marginRight: "10px",
							}}
						></div> 
						<span>{rhythm.title}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default RhythmsWithSlider;
