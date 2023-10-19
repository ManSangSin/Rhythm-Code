import { useState, useEffect } from "react";

import "./MyMap.css";
import ModalVideo from "../components/ModalVideo";
import DotMap from "../components/DotMap";
import RhythmCodeIcon from "./RhythmCodeIcon";

function MyMap() {
	const [rhythmCodes, setRhythmCodes] = useState([]);
	const [rhythms, setRhythms] = useState([]);

	const [isModalOpen, setModalOpen] = useState(false);
	const [selectedRhythm, setSelectedRhythm] = useState({});

	const API_Rhythms_URL = "/api/rhythms";

	useEffect(() => {
		fetch(API_Rhythms_URL)
			.then((response) => response.json())
			.then((rhythms) => {
				setRhythms(rhythms);
				let rhythmsCodes = rhythms.reduce((acc, rhythm) => {
					const existingRhythm = acc.find(
						(item) => item.rhythm_code === rhythm.rhythm_code
					);
					if (!existingRhythm) {
						acc.push({
							rhythm_code: rhythm.rhythm_code,
							map_id: rhythm.map_id,
						});
					}
					return acc;
				}, []);
				setRhythmCodes(rhythmsCodes);
			})
			.catch((error) => {
				console.error("NOPE! Rhythms:", error);
			});
	}, []);

	return (
		<div>
			<DotMap>
				{rhythmCodes.map((rhythmCodeObject) => (
					<RhythmCodeIcon
						key={rhythmCodeObject.rhythm_code}
						rhythmCodeName={rhythmCodeObject.rhythm_code}
						rhythmsList={rhythms}
						map_id={rhythmCodeObject.map_id}
						setModalOpen={setModalOpen}
						setSelectedRhythm={setSelectedRhythm}
					/>
				))}
			</DotMap>
			{isModalOpen && (
				<ModalVideo setModalOpen={setModalOpen} rhythm={selectedRhythm} />
			)}
		</div>
	);
}

export default MyMap;
