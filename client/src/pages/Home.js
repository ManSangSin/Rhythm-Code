import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import ModalVideo from "../components/ModalVideo";
import map from "./img/map.jpg";
import CityIcon from "./CityIcon";

export function Home() {
	const [message, setMessage] = useState("Loading...");
	const [show, setShow] = useState(false);
	const [selectedIcon, setSelectedIcon] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = (videoInfo) => {
		setShow(true);
		setSelectedIcon(videoInfo); // Use a state variable to store the selected video info
	};

	useEffect(() => {
		fetch("/api")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setMessage(body.message);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	// const handleCityClick = (cityName) => {
	// 	alert(`${cityName} clicked!`);
	// };

const dataList = [
		{   id: 1,
			title: "DC Hand Dancing",
			url: "https://www.youtube.com/watch?v=M6uM0qrjetQ",
			location: "Washington DC",
		},
		{
			id: 2,
			title: "Rumba Guaguanco",
			url: "https://www.youtube.com/watch?v=gJVT_5swkhA",
			location: "Havana, Cuba",
		},
	];

	return (
		<main role="main">
			<div>
				<img className="map" src={map} alt="North America Map" />

				<div className="icons">
					{dataList.map((dataItem) => (
						<div key={dataItem.id}>
						<CityIcon
							cityName={dataItem.location}
							onClick={() => handleShow(dataItem)}
						/>
						</div>
					))}
					<ModalVideo show={show} handleClose={handleClose} title={selectedIcon ? selectedIcon.title:""} url={selectedIcon ?selectedIcon.url: ""} location={selectedIcon ? selectedIcon.location:""} />
				</div>

				<h1 className="message" data-qa="message">
					{message}
				</h1>
				<Link to="/DataFetchingTest">Fetch Data from backend</Link>
				<br></br>
				<Link to="/about/this/site">About</Link>
			</div>
		</main>
	);
}

export default Home;
