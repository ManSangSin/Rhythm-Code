import { useState } from "react";

import "./RhythmCodeIcon.css";
import "./RhythmItem.css";
import RhythmItem from "./RhythmItem";

function RhythmCodeIcon({
	toppx,
	leftpx,
	rhythmCodeName,
	rhythmsList,
	setModalOpen,
	setSelectedRhythm,
}) {
	const [isDropdownShown, setDropdownShown] = useState(false);

	const filteredRhythms = rhythmsList.filter(
		(rhythm) => rhythm.rhythm_code === rhythmCodeName
	);

	const dotSelector = document.querySelector("#dot1028").outerHTML;
	console.log(dotSelector);

	return (
		<div
			style={{
				position: "absolute",
				top: `${toppx}px`,
				left: `${leftpx}px`,
			}}
		>
			<svg
				className="rhythmCodeIcon"
				onClick={() => setDropdownShown(!isDropdownShown)}
			>
				<circle cx="20" cy="20" r="20" fill="#FFE6E6" />
				<circle cx="20.3227" cy="19.6774" r="15.1613" fill="#FFA7A7" />
				<circle cx="20.3225" cy="19.6774" r="10" fill="#CB3100" />
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
