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

	const [open, setOpen] = useState(false); // dropdown
	const [show, setShow] = useState(false); // modal

	const API_RhythmCodes_URL = "/api/rhythm_codes";
	useEffect(() => {
		fetch(API_RhythmCodes_URL)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log("Fetched Rhythm Codes:", data);
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

	// handleclick for dropdown
	const handleShowDropdown = (rhythmObject) => {
		console.log(`Clicked rhythm: ${rhythmObject.rhythm}`);
		setOpen(false);
		<ModalVideo
			show={show}
			handleClose={handleClose}
			title={selectedIcon ? selectedIcon.rhythm : ""}
			url={selectedIcon ? selectedIcon.video : ""}
			location={selectedIcon ? selectedIcon.location : ""}
			audiourl={selectedIcon ? selectedIcon.audio : ""}
			description={selectedIcon ? selectedIcon.description : ""}
		/>;
	};

	// handleclick for modal
	const handleClose = () => setShow(false); // modal close button
	const handleShow = (rhythmObject) => {
		// modal show modal
		setShow(true);
		setSelectedIcon(rhythmObject); // useState to store the selected video info
	};

	// const handleOpen = () => {
	// 	// toggles value of open for dropdown
	// 	console.log("OPEN DROPDOWN NOW");
	// 	setOpen(!open); // negates value of open
	// };

	return (
		<main role="main">
			<div>
				<DotMap className="map" />
				<div className="icons">
					{rhythmCodes.map((rhythmObject) => (
						<div key={rhythmObject.id}>
							<Dropdown
								setOpen={setOpen}
								setShow={setShow}
								setSelectedIcon={setSelectedIcon}
								open={open}
								trigger={
									<button onClick={() => handleShowDropdown(rhythmObject)}>
										<CityIcon
											cityName={rhythmObject.location}
											leftpx={rhythmObject.leftpx}
											toppx={rhythmObject.toppx}
										/>
									</button>
								}
							/>
						</div>
					))}
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
