import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import map from "./img/map.jpg";

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

	const handleSvgClick = () => {
		console.log("YAY! Clicked!");
	};

	return (
		<main role="main">
			<div>
				<img className="map" src={map} alt="North America Map" />
				<div className="havana-cuba-icon">
					<svg onClick={handleSvgClick} width="20" height="20">
						<circle cx="10" cy="10" r="10" />
					</svg>
				</div>
				<div className="washington-dc-icon">
					<svg onClick={handleSvgClick} width="20" height="20">
						<circle cx="10" cy="10" r="10" />
					</svg>
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
