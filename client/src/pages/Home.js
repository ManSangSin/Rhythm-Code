import { useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import ModalVideo from "../components/ModalVideo";
import map from "./img/map.jpg";
import CityIcon from "./CityIcon";

import rhythmsJsonData from "./rhythmsData.json";

export function Home() {

	const [show, setShow] = useState(false);
	const [selectedIcon, setSelectedIcon] = useState(null);

	const handleClose = () => setShow(false);
	const handleShow = (videoInfo) => {
		setShow(true);
		setSelectedIcon(videoInfo); // Use a state variable to store the selected video info
	};

	return (
		<main role="main">
			<div>
				<Link to="/DataFetchingTest">Fetch Data from backend</Link>

				<img className="map" src={map} alt="North America Map" />

				<div className="icons">
					{rhythmsJsonData.map((dataItem) => (
						<div key={dataItem.id}>
							<CityIcon
								cityName={dataItem.location}
								onClick={() => handleShow(dataItem)}
							/>
						</div>
					))}
					<ModalVideo
						show={show}
						handleClose={handleClose}
						title={selectedIcon ? selectedIcon.title : ""}
						url={selectedIcon ? selectedIcon.url : ""}
						location={selectedIcon ? selectedIcon.location : ""}
					/>
				</div>

				<br></br>
				<Link to="/about/this/site">About</Link>
			</div>
		</main>
	);
}

export default Home;
