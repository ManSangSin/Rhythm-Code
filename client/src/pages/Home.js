import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

import map from "./img/map.jpg";
import CityIcon from "./CityIcon";

export function Home() {
	const [message, setMessage] = useState("Loading...");

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

	const handleCityClick = (cityName) => {
		alert(`${cityName} clicked!`);
	};

	return (
		<main role="main">
			<div>
				<img className="map" src={map} alt="North America Map" />

				<div className="icons">
					<CityIcon cityName="Havana Cuba"
						onClick={() => handleCityClick("Havana Cuba")}
					/>
					<CityIcon
						cityName="Washington DC"
						onClick={() => handleCityClick("Washington DC")}
					/>
				</div>

				<h1 className="message" data-qa="message">
					{message}
				</h1>
				<Link to="/about/this/site">About</Link>
			</div>
		</main>
	);
}

export default Home;
