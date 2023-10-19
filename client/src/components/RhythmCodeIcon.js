import { useState } from "react";

import "./RhythmCodeIcon.css";
import "./RhythmItem.css";
import RhythmItem from "./RhythmItem";

function RhythmCodeIcon({
	map_id,
	rhythmCodeName,
	rhythmsList,
	setModalOpen,
	setSelectedRhythm,
	isNightMode,
}) {
	const [isDropdownShown, setDropdownShown] = useState(false);

	const filteredRhythms = rhythmsList.filter(
		(rhythm) => rhythm.rhythm_code === rhythmCodeName
	);
	const dotSelector = document.querySelector(`#${map_id}`).outerHTML;
	const findxy = /(?!=d="m)([0-9]*.[0-9]*),([0-9]*.[0-9]*)/;
	const xyData = dotSelector.match(findxy);
	const xValue = xyData[1];
	const yValue = xyData[2];
	return (
		<div
			style={{
				position: "absolute",
				top: `${yValue}px`,
				left: `${xValue}px`,
			}}
		>
			<svg
				className="rhythmCodeIcon"
				onClick={() => setDropdownShown(!isDropdownShown)}
			>
				<circle cx="20" cy="20" r="20" fill="#FFE6E6" />
				<circle
					cx="20.3227"
					cy="19.6774"
					r="15.1613"
					fill={isNightMode ? "#006c6c" : "#FFA7A7"}
				/>
				<circle
					cx="20.3225"
					cy="19.6774"
					r="10"
					fill={isNightMode ? "#00cece" : "#ff4d00"}
				/>
			</svg>
			<div
				className="rhythmItemList"
				style={{
					display: isDropdownShown ? "block" : "none",
					top: "0",
					left: "40px",
					zIndex: 999,
				}}
			>
				<div className="rhythmCodeName">{rhythmCodeName}</div>
				{isDropdownShown &&
					filteredRhythms.map((rhythms) => {
						return (
							<RhythmItem
								key={rhythms.rhythm}
								setModalOpen={setModalOpen}
								setSelectedRhythm={setSelectedRhythm}
								rhythms={rhythms}
							/>
						);
					})}
			</div>
		</div>
	);
}

export default RhythmCodeIcon;
