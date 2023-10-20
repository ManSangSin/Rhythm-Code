import { useState, useEffect } from "react";

import "./MyMap.css";
import ModalVideo from "../components/ModalVideo";
import DotMap from "../components/DotMap";
import RhythmCodeIcon from "./RhythmCodeIcon";
import DualRangeSlider from "./DualRangeSlider";

function MyMap({ isNightMode }) {
	const [rhythmCodes, setRhythmCodes] = useState([]);
	const [rhythms, setRhythms] = useState([]);

	const [isModalOpen, setModalOpen] = useState(false);
	const [selectedRhythm, setSelectedRhythm] = useState({});

	const [selectedRange, setSelectedRange] = useState([1400, 2023]);
	const [filteredRhythms, setFilteredRhythms] = useState([]);

	// Update rhythms when user change the slider
	// This strictly just shows the rhythms in selected range(for now!)
	useEffect(() => {
		const updatedRhythms = rhythms.filter((rhythm) => {
			const rhythmStartYear = parseInt(rhythm.year_start);
			const rhythmEndYear = parseInt(rhythm.year_end);
			return (
				rhythmStartYear >= selectedRange[0] && rhythmEndYear <= selectedRange[1]
			);
		});
		setFilteredRhythms(updatedRhythms);
	}, [selectedRange, rhythms]);

	// toggleDropdownShown function is passed down to RhythmCodeIcon as a prop to allow state to be set by child component as setRhythmCodes is inside the toggleDropdownShown function
	function toggleDropdownShown(name) {
		// when using setState function we can access the previous state when declaring an arrow function, we called it prevRhythmCodes in this instance. This will have the same data as rhythmCodes
		setRhythmCodes((prevRhythmCodes) => {
			// We do not want to directly modify state so instead we will create a new array (called newRhythmCodes) where we can set the isDropdownShown for the specific rhythm code and then use setRhythmCodes function to set the rhythmCodes to this new array
			const newRhythmCodes = [];
			// Looping original array
			for (let i = 0; i < prevRhythmCodes.length; i++) {
				const currentRhythmCode = prevRhythmCodes[i];
				// Check if the current rhythm_code key matches the name (name of rhythm code) passed back by the onClick from RhythmCodeIcon. If match, set isDropdownShown to opposite of current value and add to newRhythmCodes array
				if (currentRhythmCode.rhythm_code === name) {
					const updatedRhythmCode = {
						...currentRhythmCode,
						isDropdownShown: !currentRhythmCode.isDropdownShown,
					};
					newRhythmCodes.push(updatedRhythmCode);
					// else, set isDropdownShown to false and add to newRhythmCode array
				} else {
					const updatedRhythmCode = {
						...currentRhythmCode,
						isDropdownShown: false,
					};
					newRhythmCodes.push(updatedRhythmCode);
				}
			}
			// Return new array to setRythmCodes function which will change the data of rhythmCodes and which tells react to rebuild components with the new array data
			return newRhythmCodes;
		});
	}
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
							// Add a new key/value pair to the rhythmCodes array of objects called isDropdownShown
							isDropdownShown: false,
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
						rhythmsList={filteredRhythms}
						map_id={rhythmCodeObject.map_id}
						setModalOpen={setModalOpen}
						setSelectedRhythm={setSelectedRhythm}
						isNightMode={isNightMode}
						toggleDropdownShown={toggleDropdownShown}
						isDropdownShown={rhythmCodeObject.isDropdownShown}
					/>
				))}
			</DotMap>
			<DualRangeSlider
				selectedRange={selectedRange}
				onChangeRange={setSelectedRange}
			/>
			{isModalOpen && (
				<ModalVideo setModalOpen={setModalOpen} rhythm={selectedRhythm} />
			)}
		</div>
	);
}

export default MyMap;
