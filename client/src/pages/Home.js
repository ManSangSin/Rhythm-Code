import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import CityIcon from "./CityIcon";
import DotMap from "../components/DotMap";
import ModalVideo from "../components/ModalVideo";

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
				console.log("API resultsssss:", rhythms);

				setRhythms(rhythms);
				let rhythmsCodes = rhythms.reduce((acc, rhythm) => {
					const existingRhythm = acc.find(
						(item) => item.rhythm_code === rhythm.rhythm_code
					);
					if (!existingRhythm) {
						acc.push({
							rhythm_code: rhythm.rhythm_code,
							leftpx: rhythm.leftpx,
							toppx: rhythm.toppx,
						});
					}
					return acc;
				}, []);
				console.log(rhythmsCodes);
				setRhythmCodes(rhythmsCodes);
			})
			.catch((error) => {
				console.error("NOPE! Rhythms:", error);
			});
	}, []);

	return (
		<div>
				{rhythmCodes.map((rhythmCodeObject) => {
					return (
						<CityIcon
							key={rhythmCodeObject.rhythm_code}
							rhythmCodeName={rhythmCodeObject.rhythm_code}
							rhythmsList={rhythms}
							toppx={rhythmCodeObject.toppx}
							leftpx={rhythmCodeObject.leftpx}
							setModalOpen={setModalOpen}
							setSelectedRhythm={setSelectedRhythm}

						/>
					);
				})}
				{isModalOpen &&
					<ModalVideo setModalOpen={setModalOpen} rhythm={selectedRhythm} />
				}
			<DotMap className="map" />
		</div>
	);
}

function Home() {
	return (
		<main role="main">
			<MyMap />
			<br />
			<br />
			<br />
			<Link to="/about/this/site">About</Link>
			<br />
			<Link to="/RhythmsPanelTestingPage">RhythmsPanelTestingPage</Link>
			<br />
			<Link to="/testingpage">Modal Testing Page</Link>
		</main>
	);
}

export default Home;