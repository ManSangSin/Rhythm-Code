import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import ModalVideo from "../components/ModalVideo";
import CityIcon from "./CityIcon";
import DotMap from "../components/DotMap";

export function Home() {

	const [show, setShow] = useState(false);
	const [selectedIcon, setSelectedIcon] = useState(null);

    const [rhythms, setRhythms] = useState([]);

		const API_URL = "/api/rhythms";

		useEffect(() => {
			fetch(API_URL)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					console.log("Fetched Data:", data);
					setRhythms(data);
				})
				.catch((error) => {
					console.error("Error fetching data:", error);
				});
		}, []);


	const handleClose = () => setShow(false);
	const handleShow = (videoInfo) => {
		setShow(true);
		setSelectedIcon(videoInfo); // useState to store the selected video info
	};

	return (
		<main role="main">
			<div>
				<DotMap className="map" />
				<div className="icons">
					{rhythms.map((dataItem) => (
						<div key={dataItem.id}>
							<CityIcon
								cityName={dataItem.location}
								leftpx={dataItem.leftpx}
								toppx={dataItem.toppx}
								onClick={() => handleShow(dataItem)}
							/>
						</div>
					))}
					<ModalVideo
						show={show}
						handleClose={handleClose}
						title={selectedIcon ? selectedIcon.rhythm : ""}
						url={selectedIcon ? selectedIcon.video : ""}
						location={selectedIcon ? selectedIcon.location : ""}
						audiourl={selectedIcon ? selectedIcon.audio : ""}
						description={selectedIcon ? selectedIcon.description: ""}
					/>
				</div>
				<br></br>
				<Link to="/about/this/site">About</Link>
				<br></br>
				<Link to="/RhythmsPanelTestingPage">RhythmsPanelTestingPage</Link>

				<Link to="/testingpage">Modal Testing Page</Link>
			</div>
		</main>
	);
}

export default Home;
