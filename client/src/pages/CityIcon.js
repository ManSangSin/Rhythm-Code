import { useState } from "react";

import RhythmItem from "../components/RhythmItem";

// rhythm code styling classes
// const style = (toppx, leftpx) => ({
// 	position: "absolute",
// 	top: `${toppx}`,
// 	left: `${leftpx}px`,
// 	width: "40",
// 	height:"40",
// 	viewBox:"0 0 40 40",
// 	fill:"none",

// });

function CityIcon({ toppx, leftpx, rhythmCodeName, rhythmsList, setModalOpen, setSelectedRhythm }) {
	console.log(`toppx: ${toppx}, leftpx: ${leftpx}`);

	const [isDropdownShown, setDropdownShown] = useState(false);

			const filteredRhythms = rhythmsList.filter(
				(rhythm) => rhythm.rhythm_code === rhythmCodeName
			);

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
						{/* {rhythmCodeName} */}
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



export default CityIcon;