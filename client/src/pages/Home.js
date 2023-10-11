import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import CityIcon from "./CityIcon";
import DotMap from "../components/DotMap";
import Dropdown from "../components/Dropdown";
import ModalVideo from "../components/ModalVideo";

export function Home() {
	const [rhythms, setRhythms] = useState([]);
	const [rhythmCodes, setRhythmCodes] = useState([]);

	const [selectedIcon, setSelectedIcon] = useState(null);

	const [openDropdown, setOpenDropdown] = useState(false); // dropdown
	const [showModal, setShowModal] = useState(false); // modal

	const API_RhythmCodes_URL = "/api/rhythm_codes";
	useEffect(() => {
		fetch(API_RhythmCodes_URL)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log("Rhythm Codes:", data);
				setRhythmCodes(data);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	const API_Rhythms_URL = "/api/rhythms";
	useEffect(() => {
		fetch(API_Rhythms_URL)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log("YAY! Rhythmsss:", data);
				setRhythms(data);
			})
			.catch((error) => {
				console.error("NOPE! Rhythmssss:", error);
			});
	}, []);

	// toggles value of open for dropdown
	const handleCloseDropdown = () => { // --> when you click the li this closes (go in dropdown component?)
		console.log("OPEN DROPDOWN NOW");
		setOpenDropdown(!open); // negates value of open
	};

	// handleclick for dropdown
	const handleShowDropdown = (rhythmObject) => {
		console.log(`Clicked rhythm: ${rhythmObject.rhythm}`);
		setOpenDropdown(true); // needs to be negated to close - TODO! see above - condense with this
	};

	// handleclick for modal
	const handleCloseModal = () => setShowModal(false); // close modal
	const handleShowModal = (rhythmObject) => {
		// show modal
		setShowModal(true);
		setSelectedIcon(rhythmObject); // useState to store the selected video info
	};

	<ModalVideo
		showModal={showModal}
		handleCloseModal={handleCloseModal}
		title={selectedIcon ? selectedIcon.rhythm : ""}
		url={selectedIcon ? selectedIcon.video : ""}
		location={selectedIcon ? selectedIcon.location : ""}
		audiourl={selectedIcon ? selectedIcon.audio : ""}
		description={selectedIcon ? selectedIcon.description : ""}
	/>;

	return (
		<main role="main">
			<div>
				<DotMap className="map" />
				<div className="icons">
					{rhythmCodes.map(
						(
							rhythmCodeObject // do I need a map within a map here? How can I map over RhythmCodes but pass down rhythmObject not rhythmCodeObject as props to the dropdown component?
						) => (
							<div key={rhythmCodeObject.id}>
								<Dropdown
									rhythms={rhythms}
									handleShowModal={handleShowModal}
									open={open}
									trigger={
										<button
											onClick={() => {
												console.log("rhythmCodeObject:", rhythmCodeObject);
												handleShowDropdown(rhythmCodeObject);
											}}
										>
											<CityIcon
												cityName={rhythmCodeObject.location}
												leftpx={rhythmCodeObject.leftpx}
												toppx={rhythmCodeObject.toppx}
											/>
										</button>
									}
								/>
							</div>
						)
					)}
				</div>

				<br></br>
				<Link to="/about/this/site">About</Link>
				<br></br>
				{/* <Link to="/RhythmsPanelTestingPage">RhythmsPanelTestingPage</Link> */}
				<br></br>
				<Link to="/testingpage">Modal Testing Page</Link>
			</div>
		</main>
	);
}

export default Home;
