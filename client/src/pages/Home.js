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

	const dataList = [
		{
			id: 1,
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
						<CityIcon
							cityName={dataItem.location}
							onClick={() => handleCityClick(dataItem.location)}
							key={dataItem.id}
						/>
					))}
				</div>

				<h1 className="message" data-qa="message">
					{message}
				</h1>
				<Link to="/DataFetchingTest">Fetch Data from backend</Link>
				<br></br>
				<Link to="/about/this/site">About</Link>
				<Link to="/modaltesting">Modal Testing</Link>
			</div>
		</main>
	);
}

export default Home;
