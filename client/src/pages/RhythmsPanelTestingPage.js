import { useState, useEffect } from "react";

import CityIcon from "./CityIcon";

const RhythmsDropDown = () => {
	const [open, setOpen] = useState(false);

	const [rhythms, setRhythms] = useState([]);

	const API_URL = "/api/rhythms";

	useEffect(() => {
		fetch(API_URL)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log("YAY! Fetched these:", data);
				setRhythms(data);
			})
			.catch((error) => {
				console.error("NOPE! Error fetching data from backend:", error);
			});
	}, []);


	const handleOpen = () => {
		// toggles value of open
		setOpen(!open); // negates value of open
	};

	const handleMenuClick = (rhythms) => {
		console.log(`Clicked rhythm: ${rhythms.rhythm}`);
		setOpen(false);
	};


	return (
		<Dropdown
			open={open}
			trigger={
				<button onClick={handleOpen}>
					{" "}
					<CityIcon />
				</button>
			}
			menu={rhythms.map((rhythm) => (
				<button key={rhythm.id} onClick={() => handleMenuClick(rhythm)}>
					{rhythm.rhythm}
				</button>
			))}
		/>
	);
};

const Dropdown = ({ open, trigger, menu }) => {
	return (
		<div className="dropdown">
			{trigger}
			{open ? (
				<ul className="menu">
					{menu.map((rhythmItem, index) => (
						<li key={index} className="menu-item">
							{rhythmItem}
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
};

export default RhythmsDropDown;