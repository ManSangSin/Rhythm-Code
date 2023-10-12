import { useState } from "react";

import RhythmItem from "../components/RhythmItem";

// city styling classes
const style = (toppx, leftpx) => ({
	// position: "absolute",
	top: `${toppx}px`,
	left: `${leftpx}px`,
});

function CityIcon ({ toppx, leftpx, rhythmCodeName, rhythmsList, setModalOpen, setSelectedRhythm }) {
	const [isDropdownShown, setDropdownShown] = useState(false);

			const filteredRhythms = rhythmsList.filter(
				(rhythm) => rhythm.rhythm_code === rhythmCodeName
			);

			return (
				<div>
					<div style={style(toppx, leftpx)}>

					<svg
						className="cityIconSVG"
						onClick={() => setDropdownShown(!isDropdownShown)}
					>
						<circle cx="10" cy="10" r="10" />
						{rhythmCodeName}
					</svg>

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