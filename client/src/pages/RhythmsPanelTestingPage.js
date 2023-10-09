import { useState, useEffect } from "react";

import CityIcon from "./CityIcon";

const RhythmsDropDown = () => {
	const [open, setOpen] = useState(false);

	const [rhythms, setRhythms] = useState([]);

	const API_URL = "/api/rhythms/rumba";

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

	const handleMenuClick = (rhythmObject) => {
		console.log(`Clicked rhythm: ${rhythmObject.rhythm}`);
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
			rhythmMenuList={rhythms.map((rhythmObject) => (
				<button
					key={rhythmObject.id}
					onClick={() => handleMenuClick(rhythmObject)}
				>
					{rhythmObject.rhythm}
				</button>
			))}
		/>
	);
};

const Dropdown = ({ open, trigger, rhythmMenuList }) => {
	return (
		<div className="dropdown">
			{trigger}
			{open ? (
				<ul className="rhythmMenuList">
					{rhythmMenuList.map((singleRhythm, index) => (
						<li key={index} className="rhythmMenuItem">
							{singleRhythm}
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
};

export default RhythmsDropDown;